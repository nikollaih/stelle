import Avatar from '../../../../../public/images/avatar.png';
import {Link} from "@inertiajs/react";
import {useEffect, useState} from "react";

export default function ContratistaItem({contratista}) {
    const [ profileImage, setProfileImage ] = useState(Avatar);

    useEffect(() => {
        console.log(contratista)
        if(contratista.profile_picture){
            setProfileImage(contratista.profile_picture);
        }
    }, []);

    return (
        <Link href={route('contratista.edit', {userId: contratista.id})}
              className="text-center block bg-white p-4 rounded-lg sm:flex gap-4 items-center justify-start sm:justify-between">
            <img className="mb-4 sm:mb-0 mx-auto rounded-lg max-w-[100px] max-h-[100px] sm:max-w-[70px] sm:max-h-[70px]" src={profileImage} alt={contratista.name}/>
            <div className="block sm:mx-10 mx-0 sm:flex sm:flex-1 gap-4 items-center justify-between">
                <p className="text-black">{contratista.document}</p>
                <p className="text-black ">{contratista.name}</p>
                <p className="">{contratista.whatsapp_number}</p>
                <p className="">{contratista.city.name}</p>
            </div>
        </Link>
    )
}
