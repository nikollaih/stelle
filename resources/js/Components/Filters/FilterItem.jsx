import {useFilter} from "../../../Contexts/FilterContext.jsx";
import {useEffect} from "react";

export default function FilterItem({item, type, active = false}) {
    const { categories, ...newItem } = item;

    const {appliedFilters, updateFilter} = useFilter();

    useEffect(() => {
        checkIfApplied();
    }, [appliedFilters])

    const checkIfApplied = () => {
        switch (type) {
            case "location":
                return (appliedFilters.location.filter((filter) => JSON.stringify(filter) === JSON.stringify(newItem)).length > 0)
                break;
            case "type":
                return (appliedFilters.type.filter((filter) => JSON.stringify(filter) === JSON.stringify(newItem)).length > 0)
                break;
            case "categories":
                return (appliedFilters.categories.filter((filter) => JSON.stringify(filter) === JSON.stringify(newItem)).length > 0)
                break;
        }

        return false;
    }


    return (
        <div
            onClick={() => updateFilter(item, type)}
            className={"border-white px-2 py-1 cursor-pointer rounded-md hover:bg-blue-300  hover:text-black " + (active || checkIfApplied() ? "bg-blue-300 text-black" : "text-white")}
            style={{borderWidth: 0.5}}>
            <span className="flex gap-2 items-center">
                {item.name}
                {active &&
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                    </svg>
                }
            </span>
        </div>

    )
}
