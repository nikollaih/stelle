declare module 'react/jsx-runtime';
import React, { createContext, useContext, useState } from 'react';
import {useForm} from "@inertiajs/react";
import {TProfile} from "../Types/Profile";
import {toast} from "sonner";

const EditContratistaContext = createContext({});

export const useEditContratista = () => useContext(EditContratistaContext);

const initialValue: TProfile = {
    document: null,
    name: "",
    email: "",
    whatsapp_number: "",
    phone_number: "",
    birthdate: "",
    about: "",
    active: 0,
    profession: "",
    file: {}
}

export const EditContratistaProvider = ({ children }: {children: any}) => {
    const { data, setData, processing,  post, errors } = useForm(initialValue);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData({...data, [event.target.name]: event.target.value})
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setData({...data, file: file})
    };

    const onSubmit = (e: SubmitEvent) => {
        e.preventDefault();
        post(route('contratista.update', {userId: data.id}), {
            onSuccess: () => {toast.success("Información modificada exitosamente")},
            onError: () => { handleError() }
        });
    }

    const handleError = () => {
        toast.error("Verifique los errores y vuelva a intentar");
    }

    const setInitialData = (profile: TProfile) => {
        setData({
            id: profile.id,
            name: profile.name,
            about: profile.about,
            active: profile.active,
            birthdate: profile.birthdate,
            phone_number: profile.phone_number,
            whatsapp_number: profile.whatsapp_number,
            document: profile.document,
            email: profile.email,
            profession: profile.profession
        })
    }

    // @ts-ignore
    return (
        <EditContratistaContext.Provider value={{ data, processing, errors, handleInputChange, setInitialData, handleFileChange, onSubmit }}>
            {children}
        </EditContratistaContext.Provider>
    );
};
