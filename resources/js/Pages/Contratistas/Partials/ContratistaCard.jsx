import Avatar from '@/../../public/images/avatar.png';
import * as Utilities from '@/Util/Utilities.js';
import {Link} from "@inertiajs/react";
import {useEffect, useState} from "react";
import moment from "moment";
import {useFilter} from "../../../../Contexts/FilterContext.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

export default function ContratistaCard({contratista}) {
    const { appliedFilters } = useFilter();
    const [ profileImage, setProfileImage ] = useState(Avatar);

    useEffect(() => {
        if(contratista.profile_picture) {
            setProfileImage(contratista.profile_picture);
        }
    }, []);

    const getSpecialties = () => {
        if(appliedFilters.categories.length > 0) {
            return appliedFilters.categories.map((filter) => <p key={filter.id} className="bg-gray-200 text-sm p-1 rounded-md">
                {filter.name}
            </p>)
        }
        else {
            if (contratista.services.categories.length > 0) {
                // Shuffle the categories and select up to 3 random items
                const randomCategories = contratista.services.categories
                    .sort(() => 0.5 - Math.random()) // Shuffle the array randomly
                    .slice(0, 3); // Get the first 3 items

                return randomCategories.map((filter) => (
                    <p key={filter.id} className="bg-gray-200 text-sm p-1 rounded-md">
                        {filter.name}
                    </p>
                ));
            }
        }
    }

    return (
            <div  className="bg-white px-4 py-6 rounded-lg gap-4 text-center">
                <img className="rounded-lg w-[100px] h-[100px] mx-auto" src={profileImage} alt={Utilities.getName(contratista.name).firstName}/>
                <div className="flex flex-col">
                    <div className="flex-1">
                        <p className="text-black font-bold text-xl mt-2">{Utilities.getName(contratista.name).firstName}</p>
                        <p className="text-black mb-2">{Utilities.getName(contratista.name).lastName}</p>
                        {
                            (moment(contratista.created_at).diff(moment(), 'days') < 8) &&
                            <span className="bg-blue-600 text-white text-xs rounded-md px-2 py-1">Nuevo en stelle</span>
                        }
                        <p className="text-gray-600 mb-4 leading-5 mt-3 min-h-0 md:min-h-16">
                            {contratista.about ? contratista.about.slice(0, 90) : ''}
                            {contratista.about && contratista.about.length > 90 && '...'}
                        </p>
                        {
                            appliedFilters.categories.length > 0 &&
                            <p className="text-black mb-2 text-sm font-semibold">Especialidades</p>
                        }

                        <div className="flex gap-2 justify-center flex-wrap">
                            {getSpecialties()}
                        </div>
                    </div>

                    <Link href={route('profile.view', {userId: contratista.id})} className="w-full self-end">
                        <PrimaryButton className="w-full mt-4">
                            Conocer más
                        </PrimaryButton>
                    </Link>
                </div>

            </div>
    )
}
