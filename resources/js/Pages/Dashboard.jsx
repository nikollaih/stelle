import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, router, useForm} from '@inertiajs/react';
import Contratistas from "@/Pages/Contratistas/Partials/List.jsx";
import {useEffect} from "react";
import {useFilter} from "../../Contexts/FilterContext.jsx";

export default function Dashboard({ auth, cities, types, contratistas, filter_city }) {
    const { filters, setFilters, appliedFilters, updateFilter } = useFilter();

    const { data, setData, post, processing, errors, reset } = useForm({...filters});

    useEffect(() => {
        if(appliedFilters?.location.length === 0)
            updateFilter(filter_city, "location");
    }, [])

    useEffect(() => {
        if(filters.location.length === 0)
            setCitiesTypesFilter()

        setData(appliedFilters)
    }, [appliedFilters]);

    const setCitiesTypesFilter = () => {
        let currentFilters = structuredClone(filters);
        currentFilters["location"] = cities;
        currentFilters["type"] = types;
        setFilters(currentFilters);
    }

    const handleApplyFilters = () => {
        post(route("dashboard"));
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Contratistas" />
            <p className="text-center text-white text-3xl font-bold mb-10 max-w-[220px] mx-auto">Contratistas a tu <span className="text-blue-300">medida</span></p>
            <Contratistas contratistas={contratistas} onApplyFilters={handleApplyFilters}/>
        </AuthenticatedLayout>
    );
}
