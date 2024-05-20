import Contratista from '@/../../public/images/contratista-4.png';
import * as Utilities from '@/Util/Utilities.js';
import {Link} from "@inertiajs/react";

export default function ContratistaCard({contratista}) {
    return (
            <Link href={route('profile.view', {userId: contratista.id})} className="bg-white p-6 rounded-lg flex gap-4 items-center">
                <img className="rounded-lg w-[100px] h-[100px]" src={Contratista} alt={Utilities.getName(contratista.name).firstName}/>
                <div>
                    <p className="text-black font-bold text-xl">{Utilities.getName(contratista.name).firstName}</p>
                    <p className="text-black mb-2">{Utilities.getName(contratista.name).lastName}</p>
                    <p className="text-xs">Tecnico</p>
                    <span className="bg-blue-600 text-white text-xs rounded-md px-2 py-1">Nuevo en stelle</span>
                </div>
            </Link>
    )
}
