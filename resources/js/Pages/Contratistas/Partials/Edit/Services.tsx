import { useServices } from '@/Hooks/useServices.ts';
import { useEffect, useState } from "react";
import {usePage} from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {useEditContratista} from "../../../../../Contexts/EditContratistaContext.tsx";
import {useEditServicesCoverageContratista} from "../../../../../Contexts/EditServicesCoverageContratistaContext";

const EditServices = () => {
    const { props = { csrfToken: String, types: (Object)[Array] } } = usePage();
    const { data, handleCategories, onSubmit } = useEditServicesCoverageContratista();
    const [services] = useState(props.types);
    const { processing } = useEditContratista();

    // Display each of the services and categories in the page
    const itemService = (type) => {
        return <div key={type.id}>
            <p className="text-white text-lg mt-6 mb-2">{type.name}</p>
            <div className="flex gap-4 flex-wrap">
                {
                    type.categories.map((item) => {
                            let active = data.categories.some((cat: { id: number, name: string }) => cat.id === item.id);
                            return <div
                                key={item.id}
                                className={"border-white px-2 py-1 cursor-pointer rounded-md hover:bg-blue-300  hover:text-black " + (active ? "bg-blue-300 text-black" : "text-white")}
                                style={{borderWidth: 0.5}}
                                onClick={() => handleCategories(item)}>
                                    <span className="flex gap-2 items-center">
                                        {item.name}
                                    </span>
                            </div>
                        }
                    )
                }
            </div>
        </div>
    }

    return <div className="mb-20">
        <p className="text-white mb-4 font-semibold text-xl">Servicios</p>
        {
            services.map((type) => itemService(type))
        }
        <div className="text-center mt-16">
            <PrimaryButton processing={processing} onClick={() => onSubmit()}>
                Guardar cambios
            </PrimaryButton>
        </div>
    </div>
}

export default EditServices;
