import { useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput.tsx';
import { Head, useForm } from '@inertiajs/react';
import AuthLayout from "@/Layouts/AuthLayout.jsx";

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('password.store'));
    };

    return (
        <AuthLayout>
            <Head title="Reset Password" />
            <div className="change-password-container">
                <p className="text-center text-xl text-white mb-2 font-bold">Cambia tu contraseña</p>
                <p className="text-white font-light mb-8 text-center mx-20">Te recomendamos que tenga 8 caracteres como minimo</p>

                <form onSubmit={submit}>
                    <div>
                        <InputLabel className="text-white" htmlFor="email" value="Correo"/>

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            placeholder="Ingresa el correo de la cuenta"
                            onChange={(e) => setData('email', e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2"/>
                    </div>

                    <div className="mt-4">
                        <InputLabel className="text-white" htmlFor="password" value="Contraseña"/>

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            isFocused={true}
                            placeholder="Ingresa tu contraseña nueva"
                            onChange={(e) => setData('password', e.target.value)}
                        />

                        <InputError message={errors.password} className="mt-2"/>
                    </div>

                    <div className="mt-4">
                        <InputLabel className="text-white" htmlFor="password_confirmation"
                                    value="Confirmar contraseña"/>

                        <TextInput
                            type="password"
                            id="password_confirmation"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            placeholder="Ingresa nuevamente tu contraseña nueva"
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                        />

                        <InputError message={errors.password_confirmation} className="mt-2"/>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton className="mt-4 w-full" disabled={processing}>
                            Cambiar
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </AuthLayout>
    );
}
