import React from 'react';
import FilterItem from "@/Components/Filters/FilterItem.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import { useFilter } from "../../../Contexts/FilterContext.jsx";
import Swal from "sweetalert2";

export default function FiltersList({ applyFilters }) {
    const { filters, appliedFilters, clearFilters } = useFilter();

    const renderFilters = (filterType) => {
        const filterItems = appliedFilters[filterType].map((item) => (
            <FilterItem key={item.id} item={item} type={filterType} active={true} />
        ));
        return filterItems;
    };

    const handleApplyFilter = () => {
        applyFilters()
    }

    return (
        <div className="p-6">
            <div className="">
                <div className="mb-10">
                    <div className="flex justify-between">
                        <p className="text-white text-xl font-bold mb-4">Filtros aplicados</p>
                        <p onClick={clearFilters} className="text-white cursor-pointer">Limpiar filtros</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {renderFilters('location')}
                        {renderFilters('type')}
                        {renderFilters('categories')}
                    </div>
                </div>

                <div className="mb-10">
                    <p className="text-white text-xl font-bold mb-4">Ubicación</p>
                    <div className="flex flex-wrap gap-2">
                        {filters.location.map((item) => (
                            <FilterItem key={item.id} item={item} type="location" />
                        ))}
                    </div>
                </div>

                <div className="mb-10">
                    <p className="text-white text-xl font-bold mb-4">Tipo</p>
                    <div className="flex flex-wrap gap-2">
                        {filters.type.map((item) => (
                            <FilterItem key={item.id} item={item} type="type" />
                        ))}
                    </div>
                </div>

                <div>
                    <p className="text-white text-xl font-bold mb-4">Categoría</p>
                    <div className="flex flex-wrap gap-2">
                        {filters.categories.map((item) => (
                            <FilterItem key={item.id} item={item} type="categories" />
                        ))}
                    </div>
                </div>
            </div>
            <PrimaryButton onClick={() => handleApplyFilter()} className="self-end w-full mt-10">
                Aplicar Filtros
            </PrimaryButton>
        </div>
    );
}
