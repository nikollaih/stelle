import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput.tsx';
import { Head, useForm } from '@inertiajs/react';
import AuthLayout from "@/Layouts/AuthLayout.jsx";
import InputLabel from "@/Components/InputLabel.jsx";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <AuthLayout>
            <Head title="Forgot Password" />

            <div className="forgot-password-container">
                <p className="text-center text-xl text-white mb-2 font-bold">Restablece tu contraseña</p>
                <p className="text-white font-light mb-8 text-center mx-10">Vamos a enviar a tu correo las instrucciones para restablecer tu contraseña</p>

                {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                <form onSubmit={submit}>
                    <InputLabel className="text-white" htmlFor="name" value="Correo"/>
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        isFocused={true}
                        placeholder="Ingresa tu correo"
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2"/>

                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton className="mt-4 w-full" disabled={processing}>
                            Enviar
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </AuthLayout>
    );
}
