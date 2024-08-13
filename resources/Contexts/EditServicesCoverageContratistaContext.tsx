
import React, { createContext, useContext, useState } from 'react';
import {useForm} from "@inertiajs/react";
import {toast} from "sonner";

const EditServicesCoverageContratistaContext = createContext({});

export const useEditServicesCoverageContratista = () => useContext(EditServicesCoverageContratistaContext);

const initialValue = {
    user_id: null,
    cities: [],
    categories: []
}

export const EditServicesCoverageContratistaProvider = ({ children }) => {
    const { data, setData, processing,  post, errors } = useForm(initialValue);

    const setInitialData = (user_services) => {
        setData(user_services)
    }

    const handleCategories = (category) => {
        let categories = data.categories;

        const index = categories.findIndex(c => c.id === category.id);

        if (index !== -1) {
            categories.splice(index, 1);
        } else {
            categories.push(category);
        }

        setData({
            ...data,
            categories: categories
        })
    }

    const handleCoverage = (city) => {
        let cities = data.cities;

        const index = cities.findIndex(c => c.id === city.id);

        if (index !== -1) {
            cities.splice(index, 1);
        } else {
            cities.push(city);
        }

        setData({
            ...data,
            cities: cities
        })
    };

    const onSubmit = () => {
        post(route("user.services.update", { userId: data.user_id }), {
            onSuccess: () => {toast.success("Información modificada exitosamente")},
            onError: handleError
        })
    }

    const handleError = () => {
        Object.keys(errors).map((key) => {
            toast.error(errors[key].toString());
        })
    }


    // @ts-ignore
    return (
        <EditServicesCoverageContratistaContext.Provider value={{ data, processing, handleCoverage, handleCategories, setInitialData, onSubmit }}>
            {children}
        </EditServicesCoverageContratistaContext.Provider>
    );
};
