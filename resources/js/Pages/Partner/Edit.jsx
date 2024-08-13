import {Head, Link, router, useForm} from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import AlertMessage from "@/Components/AlertMessage.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.tsx";
import InputError from "@/Components/InputError.jsx";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {useRef, useState} from "react";
import {toast} from "sonner";
import Texts from "../../../Texts.js";
import {usePage} from "@inertiajs/react";
import Swal from "sweetalert2";

export default function EditPartnerPage () {
    const { props } = usePage();
    const partner = props.partner || {};
    const buttonResetRef = useRef(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [previewImage, setPreviewImage] = useState(partner.logo);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: partner.name,
        url: partner.url
    });
    const submit = (e) => {
        console.log(data)

        e.preventDefault();
        post(route('partner.update', { partnerId: partner.id }), {
            onSuccess: () => handleOnSuccess(),
            onError: () => {toast.error(Texts.form_error)}
        });
    };

    const handleFileChange = (event) => {
        console.log(event.target.files[0])
        let newData = {...data};
        newData.file = event.target.files[0];
        setData(newData)
    };

    const handleOnSuccess = () => {
        toast.success(Texts.partner.account.update);
        buttonResetRef.current.click();
    }

    const handlePictureChange = (e) => {
        handleFileChange(e);
        setPreviewImage(URL.createObjectURL(e.target.files[0]))
    }

    const handleDelete = () => {
            Swal.fire({
                title: "¿Estás seguro?",
                text: "El aliado será eliminado!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, eliminar",
                cancelButtonText: "Cancelar"
            }).then((result) => {
                if(result.isConfirmed) {
                    router.delete(route('partner.destroy', {partnerId: partner.id}), {
                        onSuccess: () => {
                            router.visit(route('partner'), {
                                preserveState: false
                            })
                        }
                    })
                }
            });
    }

    return <AuthenticatedLayout>
        <Head title="Crear aliado"/>
        <div className="register-container sm:max-w-md mx-auto">
            <div className="flex justify-between">
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
                <div onClick={() => { handleDelete() }}>
                    <PrimaryButton className="bg-transparent text-red-500 border-red-500 px-2 pt-2 pb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="size-6 mr-2 text-red-500">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                        </svg>

                        <span>Eliminar</span>
                    </PrimaryButton>
                </div>
            </div>

            <p className="text-center text-2xl text-white mt-14 mb-8 font-bold">Modificar aliado</p>
            <AlertMessage
                title={successMessage}
                onClose={() => setSuccessMessage('')}
            />
            {
                partner.logo && <div className="mb-8">
                    <img src={previewImage} alt={partner.name} className="h-28 mx-auto rounded-md bg-white p-4"/>
                </div>
            }

            <form onSubmit={submit} method="put">
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
                        onChange={handlePictureChange}
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
