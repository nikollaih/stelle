import Filters from "@/Pages/Contratistas/Partials/Filters.jsx";
import ContratistaCard from "@/Pages/Contratistas/Partials/ContratistaCard.jsx";
import {useState} from "react";
import OverlayContainer from "@/Components/OverlayContainer.jsx";
import FiltersList from "@/Components/Filters/FiltersList.jsx";

export default function Contratistas({contratistas, onApplyFilters = () => {}}) {
    const [showMFilters, setShowFilters] = useState(false);

    const handleClickFilters = () => {
        setShowFilters(!showMFilters);
    };
    const ContratistasList = () => {
        return contratistas.map((contratista) => {
            return <ContratistaCard key={contratista.id} contratista={contratista} />
        })
    }

    const applyFilters = () => {
        handleClickFilters();
        onApplyFilters();
    }

    return(
        <div   className="flex-1">
            <OverlayContainer isOpen={showMFilters} toggleOverlay={handleClickFilters}>
                <FiltersList applyFilters={applyFilters} />
            </OverlayContainer>

            <Filters onOpen={handleClickFilters} />
            <div className="container mx-auto pb-4">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {ContratistasList()}
                </div>

            </div>

        </div>
    )
}
