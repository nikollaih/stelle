import { useState } from "react";
import {usePage} from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {TCities, TCity} from "../../../../../Types/Cities";
import {useEditServicesCoverageContratista} from "../../../../../Contexts/EditServicesCoverageContratistaContext";

const EditCoverage = () => {
    const { props }: { props: { cities: TCities, profile: { services: { cities: TCities } } } } = usePage();
    const { data, handleCoverage, onSubmit } = useEditServicesCoverageContratista();
    const [cities] = useState(props.cities);

    // Display each of the services and categories in the page
    const itemCity = (city: TCity) => {
        let active = (data.cities.some((lCity) => lCity.id === city.id));
        return <div
                key={city.id}
                className={"border-white px-2 py-1 cursor-pointer rounded-md hover:bg-blue-300  hover:text-black " + (active ? "bg-blue-300 text-black" : "text-white")}
                style={{borderWidth: 0.5}}
                onClick={() => handleCoverage(city)}>
                <span className="flex gap-2 items-center">
                    {city.name}
                </span>
            </div>
    }

    return <div>
        <p className="text-white mb-4 font-semibold text-xl mt-8">Cobertura</p>
        <div className="flex gap-4 flex-wrap">
            {
                cities && cities.map((city: TCity) => itemCity(city))
            }
        </div>

        <div className="text-center mt-16">
            <PrimaryButton onClick={() => onSubmit()}>
                <span>Guardar cambios</span>
            </PrimaryButton>
        </div>
    </div>
}

export default EditCoverage;
