import Avatar from '@/../../public/images/avatar.png';
import * as Utilities from '@/Util/Utilities.js';
import {Link} from "@inertiajs/react";
import {useEffect, useState} from "react";

export default function ContratistaCard({contratista}) {
    const [ profileImage, setProfileImage ] = useState(Avatar);

    useEffect(() => {
        if(contratista.profile_picture) {
            setProfileImage(contratista.profile_picture);
        }
    }, []);
    return (
            <Link href={route('profile.view', {userId: contratista.id})} className="bg-white p-6 rounded-lg flex gap-4 items-center">
                <img className="rounded-lg w-[100px] h-[100px]" src={profileImage} alt={Utilities.getName(contratista.name).firstName}/>
                <div>
                    <p className="text-black font-bold text-xl">{Utilities.getName(contratista.name).firstName}</p>
                    <p className="text-black mb-2">{Utilities.getName(contratista.name).lastName}</p>
                    <p className="text-xs">{contratista.profession}</p>
                    <span className="bg-blue-600 text-white text-xs rounded-md px-2 py-1">Nuevo en stelle</span>
                </div>
            </Link>
    )
}
