<?php

namespace Database\Factories;

use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Project>
 */
class ProjectFactory extends Factory
{
    protected $model = Project::class;

    /**
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = fake()->words(3, true).' Home';

        return [
            'user_id' => User::factory(),
            'name' => $name,
            'slug' => Project::uniqueSlug($name),
            'description' => fake()->sentence(),
            'type' => fake()->randomElement(['home', 'building', 'apartment', 'office']),
            'status' => 'draft',
            'map_mode' => '3d',
            'width' => 20,
            'depth' => 15,
            'floors_count' => 1,
        ];
    }
}
