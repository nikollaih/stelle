import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import AuthLayout from "@/Layouts/AuthLayout.jsx";
import Select from "@/Components/Select.jsx";

export default function Register({cities}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        role_id: 2,
        name: '',
        email: '',
        city_id: '',
        phone_number: '',
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

        post(route('register'));
    };

    return (
        <AuthLayout>
            <Head title="Únete"/>
            <div className="register-container">
                <p className="text-center text-2xl text-white mb-2 font-bold">Únete hoy</p>
                <p className="text-white font-light mb-8 text-center">Contratistas de acuerdo a tus necesidades</p>

                <form onSubmit={submit}>
                    <div>
                        <InputLabel className="text-white" htmlFor="name" value="Nombre completo"/>

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            placeholder="Ingresa tu nombre"
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2"/>
                    </div>

                    <div className="mt-4">
                        <InputLabel className="text-white" htmlFor="email" value="Correo"/>

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            placeholder="Ingresa tu correo"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />

                        <InputError message={errors.email} className="mt-2"/>
                    </div>

                    <div className="mt-4">
                        <InputLabel className="text-white" htmlFor="email" value="Celular"/>

                        <TextInput
                            id="phone_number"
                            type="number"
                            name="email"
                            value={data.phone_number}
                            className="mt-1 block w-full"
                            autoComplete="phone"
                            placeholder="Ingresa un número de contacto"
                            onChange={(e) => setData('phone_number', e.target.value)}
                            required
                        />

                        <InputError message={errors.phone_number} className="mt-2"/>
                    </div>

                    <div className="mt-4">
                        <InputLabel className="text-white" htmlFor="city_id" value="Ciudad"/>

                        <Select
                            data={cities}
                            onChange={(value) => {setData('city_id', value)} }
                        />

                        <InputError message={errors.city_id} className="mt-2"/>
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
                            placeholder="Ingresa una contraseña para tu cuenta"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />

                        <InputError message={errors.password} className="mt-2"/>
                    </div>

                    <div className="mt-4">
                        <InputLabel className="text-white text-lg" htmlFor="password_confirmation"
                                    value="Confirmar contraseña"/>

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            placeholder="Ingresa tu contraseña de nuevo"
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required
                        />

                        <InputError message={errors.password_confirmation} className="mt-2"/>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton className="w-full mt-4" disabled={processing}>
                            Registrarme
                        </PrimaryButton>
                    </div>

                    <div className="flex mt-4 justify-center">
                        <p className="text-white">¿Tienes una cuenta?
                            <Link
                                href={route('login')}
                                className="text-blue-300 cursor-pointer hover:text-blue-200 ml-1"
                            > inicia sesión</Link>
                        </p>
                    </div>
                </form>
            </div>
        </AuthLayout>
    );
}
