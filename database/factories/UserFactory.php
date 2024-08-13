<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'document' => fake()->numberBetween(1095000000, 1970000000),
            'name' => 'Admin',
            'email' => 'stelle@gmail.com',
            'phone_number' => fake()->numberBetween(3100000000, 3230000000),
            'whatsapp_number' => fake()->numberBetween(3100000000, 3230000000),
            'about' => fake()->realText(),
            'email_verified_at' => now(),
            'role_id' => 1,
            'city_id' => 1,
            'password' => static::$password ??= Hash::make('password'),
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
