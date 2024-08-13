import {Head, Link, useForm} from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import AlertMessage from "@/Components/AlertMessage.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.tsx";
import InputError from "@/Components/InputError.jsx";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {useRef, useState} from "react";
import {toast} from "sonner";
import Texts from "../../../Texts.js";

export default function CreatePartnerPage () {
    const buttonResetRef = useRef(null);
    const [successMessage, setSuccessMessage] = useState('');
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        url: ''
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('partner.store'), {
            onSuccess: () => handleOnSuccess(),
            onError: () => {toast.error(Texts.form_error)}
        });
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setData({...data, file: file})
    };

    const handleOnSuccess = () => {
        toast.success(Texts.partner.account.create);
        buttonResetRef.current.click();
    }

    return <AuthenticatedLayout>
        <Head title="Crear aliado"/>
        <div className="register-container sm:max-w-md mx-auto">
            <Link href="#" onClick={() => { window.history.back(); return false; }}>
                <PrimaryButton className="bg-transparent text-white border-white px-2 pt-2 pb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="size-5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"/>
                    </svg>

                    <span>Volver</span>
                </PrimaryButton>
            </Link>
            <p className="text-center text-2xl text-white mt-14 mb-8 font-bold">Nuevo aliado</p>
            <AlertMessage
                title={successMessage}
                onClose={() => setSuccessMessage('')}
            />
            <form onSubmit={submit} method="post">
                <div>
                    <InputLabel className="text-white" htmlFor="name" value="Nombre ó Razon social"/>

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        type="text"
                        placeholder="Stelle"
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2"/>
                </div>

                <div className="mt-4">
                    <InputLabel className="text-white" htmlFor="url" value="Link al sitio web"/>

                    <TextInput
                        id="url"
                        name="url"
                        className="mt-1 block w-full"
                        autoComplete="url"
                        isFocused={true}
                        value={data.url}
                        placeholder="https://stelle.com"
                        onChange={(e) => setData('url', e.target.value)}
                    />

                    <InputError message={errors.url} className="mt-2"/>
                </div>

                <div className="mt-4">
                    <InputLabel className="text-white" htmlFor="file" value="Logo"/>

                    <TextInput
                        id="file"
                        type="file"
                        name="file"
                        className="mt-1 block w-full bg-white pt-2 pl-2"
                        placeholder="Ingresa tu correo"
                        accept="image/png, image/jpe, image/jpeg"
                        onChange={handleFileChange}
                        required
                    />

                    <InputError message={errors.logo} className="mt-2"/>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="w-full mt-4" disabled={processing}>
                        Registrar aliado
                    </PrimaryButton>
                </div>
                <button type="reset" className="hidden" ref={buttonResetRef}>reset</button>
            </form>
        </div>
    </AuthenticatedLayout>
}
