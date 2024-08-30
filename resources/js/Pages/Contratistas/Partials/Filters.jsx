import {useFilter} from "../../../../Contexts/FilterContext.jsx";
import {useEffect, useState} from "react";

export default function Filters({onOpen}) {
    const {appliedFilters,  } = useFilter();
    const [isFiltered, setFiltered] = useState(false);

    useEffect(() => {
        setIsFiltered();
    }, [appliedFilters]);

    const setIsFiltered = () => {
        setFiltered((appliedFilters.location.length > 0));
    }

    const appliedFiltersLocationResume = () => {
        return appliedFilters.location.length > 0 && <div onClick={onOpen} className="flex items-center ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor" className="size-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
            </svg>
            <p className="text-white mx-2 border py-1 px-2 rounded-md text-sm">{appliedFilters.location[0].name}</p>
        </div>
    }

    const appliedFiltersServicesResume = () => {
        return appliedFilters.categories.length > 0 && <div className="flex items-center ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor" className="size-6 text-white ml-2">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
            </svg>
            {
                appliedFilters.categories.map((category) =>
                    <p className="text-white mx-2 border py-1 px-2 rounded-md text-sm">{category.name}</p>
                )
            }
        </div>
    }

    return (
        <div className="flex justify-between cursor-pointer mb-6">
            <div  className="flex items-center">
                <p className="text-white text-lg font-normal">Resultados:</p>
                {
                    appliedFiltersLocationResume()
                }
            </div>
            <div onClick={onOpen} className="flex gap-2 border-gray-200 border-[0.5px] py-1 px-2 rounded-md relative">
                {isFiltered &&
                    <div className="bg-blue-300 w-[10px] h-[10px] rounded-full absolute right-[-5px] top-[-5px]"/>}
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
