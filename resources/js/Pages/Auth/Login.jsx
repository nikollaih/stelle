import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput.tsx';
import { Head, Link, useForm } from '@inertiajs/react';
import AuthLayout from "@/Layouts/AuthLayout.jsx";
import { usePage } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const props = usePage();
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        if(props?.auth?.user){
            navigate("dashboard");
        }
    }, [props])

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <AuthLayout>
            <Head title="Bienvenido" />
            <div className="login-container">
                <p className="text-center text-2xl text-white mb-2 font-bold">Bienvenido de vuelta</p>
                <p className="text-white font-light mb-8 text-center">Contratistas de acuerdo a tus necesidades</p>
                {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                <form onSubmit={submit}>
                    <div>
                        <InputLabel className="text-white text-lg" htmlFor="email" value="Correo" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            placeholder="Ingresa tu correo"
                            onChange={(e) => setData('email', e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4 mb-2">
                        <InputLabel className="text-white text-lg font-medium" htmlFor="password" value="Contraseña" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            placeholder="Ingresa tu contraseña"
                            onChange={(e) => setData('password', e.target.value)}
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="text-sm text-blue-300 hover:text-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            ¿Olvidaste tu contraseña?
                        </Link>
                    )}

                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton className="w-full mt-4" disabled={processing}>
                            Iniciar sesión
                        </PrimaryButton>
                    </div>

                    <div className="flex mt-4 justify-center">
                        <p className="text-white">¿Aún no tienes una cuenta?
                            <Link
                                href={route('register')}
                                className="text-blue-300 cursor-pointer hover:text-blue-200 ml-1"
                            > crea una acá</Link>
                        </p>
                    </div>
                </form>
            </div>
        </AuthLayout>
    );
}
