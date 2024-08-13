import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.tsx";
import TextArea from "@/Components/TextArea.tsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import { usePage } from "@inertiajs/react";
import {TProfile} from "../../../../../Types/Profile";
// @ts-ignore
import {useEditContratista} from "@/../Contexts/EditContratistaContext.tsx";
import { useEffect} from "react";
import InputError from "@/Components/InputError.jsx";


type PageProps = {
    props: {
        profile: TProfile
    }
}

const EditPersonalInformation = () => {
    const { props }: PageProps = usePage();
    const profile = props.profile;
    // @ts-ignore
    const { data, processing, handleInputChange, setInitialData, onSubmit, errors }: EditContratistaType = useEditContratista();

    console.log(errors)

    useEffect(() => {
        setInitialData(profile)
    }, [])

    return <div className="mb-16 mt-0">

        <form onSubmit={onSubmit}>
            <p className="text-white mb-4 font-semibold text-xl">Información personal</p>
            <div className="flex gap-4 mb-4">
                <div className="flex-1">
                    <InputLabel className="text-white" htmlFor="document" value="Número de identificación"/>

                    <TextInput
                        id="document"
                        name="document"
                        defaultValue={profile.document}
                        className="mt-1 block w-full"
                        autoComplete="document"
                        placeholder={"12345678"}
                        onChange={(e) => handleInputChange(e)}
                        type="text"
                        value={data.document}
                    />

                    {
                        errors && errors.document && <InputError message={errors.document}/>
                    }
                </div>
                <div className="flex-1">
                    <InputLabel className="text-white" htmlFor="name" value="Nombre completo"/>

                    <TextInput
                        id="name"
                        name="name"
                        defaultValue={profile.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        placeholder="Ingrese el nombre completo"
                        onChange={(e) => handleInputChange(e)}
                        type="text"
                        value={data.name}
                    />

                    {
                        errors && errors.name && <InputError message={errors.name}/>
                    }
                </div>
            </div>

            <div className="flex gap-4 mb-4">
                <div className="flex-1">
                    <InputLabel className="text-white" htmlFor="email" value="Correo electrónico"/>

                    <TextInput
                        id="email"
                        name="email"
                        defaultValue={profile.email}
                        className="mt-1 block w-full"
                        autoComplete="email"
                        placeholder="ejemplo@correo.com"
                        onChange={(e) => handleInputChange(e)}
                        type="email"
                        value={data.email}
                    />

                    <InputError message={errors.email}/>
                </div>
            </div>

            <div className="flex gap-4 mb-4">
                <div className="flex-1">
                    <InputLabel className="text-white" htmlFor="profession" value="Profesión"/>

                    <TextInput
                        id="profession"
                        name="profession"
                        defaultValue={profile.profession}
                        className="mt-1 block w-full"
                        autoComplete="profession"
                        placeholder="Carpintero"
                        onChange={(e) => handleInputChange(e)}
                        type="text"
                        value={data.profession}
                    />

                    <InputError message={errors.profession}/>
                </div>
                <div className="flex-1">
                    <InputLabel className="text-white" htmlFor="name" value="Whatsapp"/>

                    <TextInput
                        id="whatsapp_number"
                        name="whatsapp_number"
                        defaultValue={profile.whatsapp_number}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        placeholder="Ingrese el número de contacto"
                        onChange={(e) => handleInputChange(e)}
                        type="number"
                        value={data.whatsapp_number}
                    />

                    {
                        errors && errors.whatsapp_number && <InputError message={errors.whatsapp_number}/>
                    }
                </div>
            </div>

            <div className="flex gap-4 mb-4 flex-wrap">
                <div className="flex-1">
                    <InputLabel className="text-white" htmlFor="date_of_birth" value="Fecha de nacimiento"/>

                    <TextInput
                        id="birthdate"
                        name="birthdate"
                        defaultValue={profile.birthdate}
                        className="mt-1 block w-full"
                        autoComplete="date_of_birth"
                        onChange={(e) => handleInputChange(e)}
                        type="date"
                        value={data.birthdate}
                    />
                </div>
                <div className="flex-1">
                    <InputLabel className="text-white" htmlFor="name" value="Número de contacto"/>

                    <TextInput
                        id="phone_number"
                        name="phone_number"
                        defaultValue={profile.phone_number}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        placeholder="Ingrese el número de contacto"
                        onChange={(e) => handleInputChange(e)}
                        type="number"
                        value={data.phone_number}
                    />

                    {
                        errors && errors.phone_number && <InputError message={errors.phone_number}/>
                    }
                </div>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1">
                    <InputLabel className="text-white" htmlFor="about" value="Acerca"/>

                    <TextArea
                        id="about"
                        name="about"
                        defaultValue={profile.about}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        placeholder="Escriba una biografia..."
                        onChange={(e) => handleInputChange(e)}
                        value={data.about}
                    />
                </div>
            </div>

            <div className="text-center">
                <PrimaryButton disabled={processing} processing={processing}>
                    Guardar cambios
                </PrimaryButton>
            </div>
        </form>
    </div>
}

export default EditPersonalInformation;
