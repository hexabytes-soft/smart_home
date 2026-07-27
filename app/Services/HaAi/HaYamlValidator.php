<?php

namespace App\Services\HaAi;

use Symfony\Component\Yaml\Exception\ParseException;
use Symfony\Component\Yaml\Yaml;

class HaYamlValidator
{
    /**
     * @return array{valid: bool, errors: list<string>, data: mixed}
     */
    public function validate(string $yaml): array
    {
        $errors = [];
        $data = null;

        if (trim($yaml) === '') {
            return ['valid' => false, 'errors' => ['YAML is empty.'], 'data' => null];
        }

        try {
            $data = Yaml::parse($yaml);
        } catch (ParseException $e) {
            return ['valid' => false, 'errors' => ['YAML parse error: '.$e->getMessage()], 'data' => null];
        }

        if (! is_array($data)) {
            return ['valid' => false, 'errors' => ['YAML root must be a mapping or list of automations.'], 'data' => $data];
        }

        $docs = array_is_list($data) ? $data : [$data];
        foreach ($docs as $index => $doc) {
            if (! is_array($doc)) {
                $errors[] = "Automation #{$index} must be a mapping.";
                continue;
            }
            if (! isset($doc['trigger']) && ! isset($doc['triggers'])) {
                $errors[] = "Automation #{$index} is missing trigger/triggers.";
            }
            if (! isset($doc['action']) && ! isset($doc['actions'])) {
                $errors[] = "Automation #{$index} is missing action/actions.";
            }
        }

        return [
            'valid' => $errors === [],
            'errors' => $errors,
            'data' => $data,
        ];
    }

    /**
     * @return array{alias: ?string, description: ?string, id: ?string}
     */
    public function extractMeta(string $yaml): array
    {
        $result = $this->validate($yaml);
        $data = $result['data'];
        if (! is_array($data)) {
            return ['alias' => null, 'description' => null, 'id' => null];
        }
        if (array_is_list($data)) {
            $data = $data[0] ?? [];
        }

        return [
            'alias' => isset($data['alias']) ? (string) $data['alias'] : null,
            'description' => isset($data['description']) ? (string) $data['description'] : null,
            'id' => isset($data['id']) ? (string) $data['id'] : null,
        ];
    }

    /**
     * @return array<string, mixed>
     */
    public function toConfigArray(string $yaml): array
    {
        $result = $this->validate($yaml);
        if (! $result['valid']) {
            throw new \InvalidArgumentException(implode('; ', $result['errors']));
        }
        $data = $result['data'];
        if (is_array($data) && array_is_list($data)) {
            $data = $data[0] ?? [];
        }
        if (! is_array($data)) {
            throw new \InvalidArgumentException('Invalid automation YAML structure.');
        }

        return $data;
    }
}
