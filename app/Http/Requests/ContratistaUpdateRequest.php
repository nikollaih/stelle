<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ContratistaUpdateRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $userId = $this->route('userId');

        return [
            'document' => ['required', 'numeric', 'min:5'],
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', Rule::unique('users')->ignore($userId)],
            'whatsapp_number' => ['max:10'],
            'phone_number' => ['max:10'],
            'profession' => ['required', 'string']
        ];
    }

    public function messages(): array
    {
        return [
            'document.required' => 'El número de identificación es requerido',
            'document.min' => 'El número debe ser mayor a 5 digitos',
            'name.required' => 'El nombre completo es requerido',
            'email.required' => 'El correo electrónico es requerido',
            'email.email' => 'El correo electrónico no es válido',
            'email.unique' => 'El correo electrónico ya se encuentra registrado',
            'email.lowercase' => 'El correo electrónico debe estar en letras minusculas',
            'whatsapp_number.max' => 'El número debe ser menor a 10 digitos',
            'phone_number.max' => 'El número debe ser menor a 10 digitos',
            'profession.required' => 'La profesión es requerida'
        ];
    }
}
