<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;
use Illuminate\View\View;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    public function index(): View
    {
        abort_unless(auth()->user()->can('users.view'), 403);

        $users = User::query()
            ->with('roles')
            ->latest()
            ->paginate(15);

        return view('admin.users.index', compact('users'));
    }

    public function create(): View
    {
        abort_unless(auth()->user()->can('users.create'), 403);

        $roles = Role::query()->orderBy('name')->get();

        return view('admin.users.create', compact('roles'));
    }

    public function store(Request $request): RedirectResponse
    {
        abort_unless(auth()->user()->can('users.create'), 403);

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:120'],
            'email' => ['required', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', 'confirmed', Password::defaults()],
            'role' => ['required', Rule::exists('roles', 'name')],
        ]);

        $user = User::query()->create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'email_verified_at' => now(),
        ]);

        $user->syncRoles([$validated['role']]);

        return redirect()
            ->route('admin.users.index')
            ->with('status', 'User created.');
    }

    public function edit(User $user): View
    {
        abort_unless(auth()->user()->can('users.update'), 403);

        $roles = Role::query()->orderBy('name')->get();

        return view('admin.users.edit', compact('user', 'roles'));
    }

    public function update(Request $request, User $user): RedirectResponse
    {
        abort_unless(auth()->user()->can('users.update'), 403);

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:120'],
            'email' => ['required', 'email', 'max:255', Rule::unique('users', 'email')->ignore($user->id)],
            'password' => ['nullable', 'confirmed', Password::defaults()],
            'role' => ['required', Rule::exists('roles', 'name')],
        ]);

        $user->name = $validated['name'];
        $user->email = $validated['email'];

        if (! empty($validated['password'])) {
            $user->password = Hash::make($validated['password']);
        }

        $user->save();
        $user->syncRoles([$validated['role']]);

        return redirect()
            ->route('admin.users.index')
            ->with('status', 'User updated.');
    }

    public function destroy(User $user): RedirectResponse
    {
        abort_unless(auth()->user()->can('users.delete'), 403);

        if ($user->id === auth()->id()) {
            return back()->withErrors(['user' => 'You cannot delete your own account.']);
        }

        $user->delete();

        return redirect()
            ->route('admin.users.index')
            ->with('status', 'User deleted.');
    }
}
