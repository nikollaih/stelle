import { useRef, useState} from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput.tsx';
import { Head, Link, useForm } from '@inertiajs/react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import Select from "@/Components/Select.jsx";
import AlertMessage from "@/Components/AlertMessage.jsx";
import Texts from '@/../Texts.js';
import {toast} from "sonner";

export default function Register({cities}) {
    const buttonResetRef = useRef(null);
    const [successMessage, setSuccessMessage] = useState('');
    const { data, setData, post, processing, errors, reset } = useForm({
        role_id: 3,
        name: '',
        email: '',
        city_id: '',
        whatsapp_number: ''
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('contratista.store'), {
            onSuccess: () => {handleOnSuccess()},
            onError: () => {toast.error(Texts.form_error)}
        });
    };

    const handleOnSuccess = () => {
        toast.success(Texts.contratista.account.create);
        buttonResetRef.current.click();
    }

    return (
        <AuthenticatedLayout>
            <Head title="Vincular contratista"/>
            <div className="register-container sm:max-w-md mx-auto">
                <Link href={route('contratista.index')}>
                    <PrimaryButton className="bg-transparent text-white border-white px-2 pt-2 pb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="size-5 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"/>
                        </svg>

                        <span>Volver</span>
                    </PrimaryButton>
                </Link>
                <p className="text-center text-2xl text-white my-8 font-bold">Nuevo contratista</p>
                <AlertMessage
                    title={successMessage}
                    onClose={() => setSuccessMessage('')}
                />
                <form onSubmit={submit} method="post">
                    <div>
                        <InputLabel className="text-white" htmlFor="document" value="Número de identificación"/>

                        <TextInput
                            id="document"
                            name="document"
                            value={data.document}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            type="number"
                            placeholder="Ingresa tu número de documento"
                            onChange={(e) => setData('document', e.target.value)}
                            required
                        />

                        <InputError message={errors.document} className="mt-2"/>
                    </div>

                    <div className="mt-4">
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
                        <InputLabel className="text-white" htmlFor="email" value="Whatsapp"/>

                        <TextInput
                            id="whatsapp_number"
                            type="number"
                            name="email"
                            value={data.whatsapp_number}
                            className="mt-1 block w-full"
                            autoComplete="phone"
                            placeholder="Ingresa un número de contacto"
                            onChange={(e) => setData('whatsapp_number', e.target.value)}
                            required
                        />

                        <InputError message={errors.whatsapp_number} className="mt-2"/>
                    </div>

                    <div className="mt-4">
                        <InputLabel className="text-white" htmlFor="city_id" value="Ciudad"/>

                        <Select
                            data={cities}
                            onChange={(value) => {
                                setData('city_id', value)
                            }}
                        />

                        <InputError message={errors.city_id} className="mt-2"/>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton className="w-full mt-4" disabled={processing}>
                            Vincular contratista
                        </PrimaryButton>
                    </div>
                    <button type="reset" className="hidden" ref={buttonResetRef}>reset</button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
