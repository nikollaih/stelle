// @ts-ignore
import Avatar from "../../../../../../public/images/avatar.png";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.tsx";
import useDate from "@/Hooks/useDate.ts";
import YesNoRadio from "@/Components/YesNoRadio.jsx";
import {usePage} from "@inertiajs/react";
import {useEditContratista} from "../../../../../Contexts/EditContratistaContext.js";
import {EditContratistaType} from "../../../../../Types/Contratistas.js";
import {useEffect, useState} from "react";
import SetPartnersUserList from "../../../Partner/Partials/setPartnersUserList.jsx";
import Modal from "@/Components/Modal.jsx";

const EditContratistaLeft = () => {
    const [ showModal, setShowModal ] = useState(false);
    const { data, handleInputChange, handleFileChange }: EditContratistaType = useEditContratista();
    const [previewImg, setPreviewImg] = useState(Avatar);
    const {props} = usePage();
    const { toInputFormat } = useDate();
    const profile = props.profile;

    const handlePictureChange = (e) => {
        handleFileChange(e);
        setPreviewImg(URL.createObjectURL(e.target.files[0]))
    }

    useEffect(() => {
        if(profile.profile_picture && profile.profile_picture !== "") {
            setPreviewImg(profile.profile_picture)
        }
    }, [])

    const partnerItem = (partner) => {
        return <div>
            <img src={partner.logo} alt={partner.name} className="h-[50px]"/>
        </div>
    }

    return <div className="md:col-span-1">
        <Modal show={showModal} onClose={() => {setShowModal(false)}}>
            <SetPartnersUserList partners={props.partners} user_partners={profile.partners} user={profile} onClose={() => {setShowModal(false)}} />
        </Modal>

        <p className="text-white mb-4 font-semibold text-xl">Foto de perfil</p>
        <div className="text-center bg-white rounded-xl p-4">
            <img className="w-[150px] h-[150px] mx-auto srounded-lg"
                 src={previewImg} alt={profile.name}/>
            <label htmlFor="profile_picture" className="cursor-pointer">
                <div className="mx-auto mt-6 bg-blue-300 py-3 rounded-md hover:bg-gray-700">
                    Cambiar foto
                </div>
                <input
                    id="profile_picture"
                    name="profile_picture"
                    type="file"
                    className="hidden"
                    accept="image/png, image/jpg, image/jpeg"
                    onChange={handlePictureChange}
                />
            </label>
        </div>

        <div className="mt-6">
            <InputLabel className="text-white" htmlFor="document" value="Fecha de vinculación"/>

            <TextInput
                id="document"
                name="document"
                defaultValue={toInputFormat(data.created_at)}
                className="mt-1 block w-full"
                autoComplete="name"
                isFocused={true}
                type="date"
                required
                disabled
            />
        </div>

        <div className="mt-6">
            <InputLabel className="text-white" htmlFor="document" value="Fecha de pago"/>

            <TextInput
                id="document"
                name="document"
                value={toInputFormat(data.created_at)}
                className="mt-1 block w-full"
                autoComplete="name"
                type="date"
                disabled
            />
        </div>

        <div className="mt-6">
            <InputLabel className="text-white" htmlFor="document" value="¿La cuenta está activa?"/>

            <YesNoRadio name="active" active={data.active} onChange={handleInputChange}/>
        </div>

        <div className="mt-6">
            <InputLabel className="text-white" htmlFor="document" value="Aliados"/>
            <div onClick={() => setShowModal(true)} className="p-4 bg-white rounded-md flex gap-4 flex-wrap cursor-pointer">
                {
                    profile.partners.length > 0 && profile.partners.map((partner) => partnerItem(partner))
                }
                {
                    profile.partners.length <= 0 && <div className="flex w-full items-center justify-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="size-12 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"/>
                            </svg>
                        </div>
                    </div>
                }
            </div>
        </div>
    </div>
}

export default EditContratistaLeft;
