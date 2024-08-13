import {Head, Link} from "@inertiajs/react";
import Footer from "@/Components/Footer.jsx";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import Avatar from '@/../../public/images/avatar.png';
import * as Utilities from '@/Util/Utilities.js';
import {usePage} from "@inertiajs/react";
import {useEffect, useState} from "react";

export default function ContratistaView({auth, profile = {}}) {
    const {props} = usePage();
    const [profileImage, setProfileImage] = useState(Avatar);

    useEffect(() => {
        if(profile.profile_picture) {
            setProfileImage(profile.profile_picture);
        }
    }, []);

    // Get the cities listing to display them in the "Cobertura" section
    const getCitiesDom = () => {
        if(props.cities && props.cities.length > 0) {
            let cities = props.cities;
            return cities.map((city) => {
                let active = (profile.services.cities.some((lCity) => lCity.id === city.id));
                    if(active) {
                        return <span
                            key={city.name}
                            className={"border-[0.5px] border-gray-400 px-2 py-1 rounded-lg text-gray-700"}>{city.name}</span>
                    }

                    return null;
            })
        }

        return <></>
    }


    const getCategoriesDom = () => {
        if (props.types && props.types.length > 0) {
            let types = props.types;
            return types.map((type) => {
                return <div key={type.id}>
                    <p className="font-bold my-2">{type.name}</p>
                    <div className="gap-2 flex flex-wrap">
                        {
                            type.categories.map((category, index) => {
                                let active = (profile.services.categories.some((lCategory) => lCategory.id === category.id));

                                if(active)
                                    return (
                                        <span
                                            key={index}
                                            className="border-[0.5px] border-gray-400 px-2 py-1 rounded-lg text-gray-700 mr-2">
                                            {category.name}
                                        </span>
                                    );

                                return null;
                            })
                        }
                    </div>
                </div>
            })
        }

        return <></>
    }

    const partnerItem = (partner) => {
        return <a href={partner.url} target="_blank">
            <img src={partner.logo} alt={partner.name} className="h-[60px]"/>
        </a>
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Perfil Contratista"/>
            <Link to="#" onClick={() => window.history.back()}>
                <PrimaryButton className="bg-transparent border-[0.5px] border-white gap-2 w-[100px] py-2 px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-4 h-4 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"/>
                    </svg>
                    <p className="text-white text-sm">Volver</p>
                </PrimaryButton>
            </Link>

            <div className="flex-1">
                <div className="p-6 bg-white rounded-2xl relative mt-[100px] mb-8 max-w-[500px] mx-auto">
                    <img className="absolute w-[150px] h-[150px] left-0 right-0 mx-auto mt-[-100px] rounded-xl"
                         src={profileImage} alt=""/>
                    <div className="mt-16 text-center">
                        <p className="text-black font-bold text-xl">{Utilities.getName(profile.name).firstName}</p>
                        <p className="mb-4">{Utilities.getName(profile.name).lastName}</p>

                        <p className="text-sm mb-2">Técnico</p>
                        <PrimaryButton className="gap-2 bg-green-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"/>
                            </svg>

                            <a target="_blank" href={"https://wa.me/57" + profile.whatsapp_number}>
                                <p className="text-white">Escribir al whatsapp</p>
                            </a>
                        </PrimaryButton>
                    </div>
                </div>

                <div className="p-6 bg-white rounded-2xl relative mb-8  max-w-[500px] mx-auto">
                    <p className="text-black font-bold text-xl mb-4">Sobre mí</p>
                    <p>{profile.about}</p>
                </div>

                <div className="p-6 bg-white rounded-2xl relative mb-8 max-w-[500px] mx-auto">
                    <p className="text-black font-bold text-xl">Servicios</p>
                    {getCategoriesDom()}
                </div>

                <div className="p-6 bg-white rounded-2xl relative mb-8 max-w-[500px] mx-auto">
                    <p className="text-black font-bold text-xl mb-4">Cobertura</p>
                    <div className="flex flex-wrap gap-2">
                        {getCitiesDom()}
                    </div>
                </div>

                {
                    profile.partners.length > 0 &&  <div className="p-6 bg-white rounded-2xl relative mb-8  max-w-[500px] mx-auto">
                        <p className="text-black font-bold text-xl mb-4">Aliados</p>
                        <div className="p-4 bg-white rounded-md flex gap-4 flex-wrap">
                            {
                                profile.partners.map((partner) => partnerItem(partner))
                            }
                        </div>
                    </div>
                }
            </div>
        </AuthenticatedLayout>
    )
}
