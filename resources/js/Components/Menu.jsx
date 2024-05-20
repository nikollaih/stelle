import React, { useState } from "react";
import OverlayContainer from "@/Components/OverlayContainer.jsx";
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {Link} from "@inertiajs/react";

export default function Menu({onClose}) {

    return (
        <div className="overlay-content justify-center items-center mx-auto p-8">
            <ApplicationLogo className="h-[30px] mb-10"/>
            <Link className="w-full my-10" href={route('login')}>
                <PrimaryButton className="w-full text-lg">
                    Inicio de sesión
                </PrimaryButton>
            </Link>
            <Link href={route('register')}>
                <p className="text-blue-300 mb-6">Registrarme</p>
            </Link>

            <div className="bg-white h-[1px] w-full max-w-[300px] mt-10"/>
            <p className="text-2xl text-center mt-10">Soy <span className="text-blue-300">independiente</span> quiero
                ofertar mis servicios</p>
            <Link className="w-full my-10" href={route('register')}>
                <PrimaryButton className="w-full text-lg">
                    Unirme como contratista
                </PrimaryButton>
            </Link>
            <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor" className="w-8 h-8 mt-[60px] cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
            </svg>
        </div>
    );
}
