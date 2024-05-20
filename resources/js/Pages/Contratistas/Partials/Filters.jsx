import {useFilter} from "../../../../Contexts/FilterContext.jsx";
import {useEffect, useState} from "react";

export default function Filters({onOpen}) {
    const {appliedFilters} = useFilter();
    const [isFiltered, setFiltered] = useState(false);

    useEffect(() => {
        setIsFiltered();
    }, [appliedFilters]);

    const setIsFiltered = () => {
        setFiltered((appliedFilters.location.length > 0));
    }

    return (
        <div className="flex justify-between cursor-pointer mb-6">
            <p className="text-white text-lg font-normal">Resultados</p>
            <div onClick={onOpen} className="flex gap-2 border-gray-200 border-[0.5px] py-1 px-2 rounded-md relative">
                {isFiltered && <div className="bg-blue-300 w-[10px] h-[10px] rounded-full absolute right-[-5px] top-[-5px]" />}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="w-6 h-6 text-gray-200">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"/>
                </svg>
                <p className="text-gray-200">Filtros</p>
            </div>
        </div>
    )
}
