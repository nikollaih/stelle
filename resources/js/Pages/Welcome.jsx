import { Link, Head } from '@inertiajs/react';
import { styles } from '../../css/Style.js';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import Contratista from '@/../../public/images/contratista.png';
import Primero from '@/../../public/images/solucion_1.png';
import Segundo from '@/../../public/images/solucion_2.png';
import Tercero from '@/../../public/images/solucion_3.png';
import '../../css/Style.css';
import Menu from '@/../js/Components/Menu.jsx';
import {useState} from "react";
import OverlayContainer from "@/Components/OverlayContainer.jsx";
import Footer from "@/Components/Footer.jsx";
import GuestLayout from "@/Layouts/GuestLayout.jsx";

export default function Welcome({ auth }) {
    const [showMenu, setShowMenu] = useState(false);

    const handleClickMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <GuestLayout auth={auth}>
            <Head title="Inicio" />
            <OverlayContainer isOpen={showMenu} toggleOverlay={handleClickMenu}>
                <Menu onClose={handleClickMenu} />
            </OverlayContainer>
                <div className="relative min-h-screen flex flex-col items-center  selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <main className="mt-6 px-4 flex flex-col items-center">
                            <h2 className="text-center mb-10 text-white font-bold leading-10 text-4xl max-w-[500px]">Te
                                conectamos con contratistas de acuerdo a tus necesidades</h2>
                            <a href={route((auth.user) ? 'dashboard' : 'guest.dashboard')} className="mb-10">
                                <PrimaryButton>
                                    Ver contratistas
                                </PrimaryButton>
                            </a>

                            <p className="text-2xl mt-10 text-white mb-6 text-center">Una <span
                                className="text-blue-300">solución</span> en tres sencillos pasos</p>

                            <div
                                className="flex overflow-x-auto space-x-8 w-full mb-10 scrollbar-hide mx-auto items-center lg:justify-center">
                                <section className="flex-shrink-0 rounded-xl bg-white p-4 text-center max-w-[200px]">
                                    <img src={Primero} className="w-28 py-4  mx-auto mb-4" alt=""/>
                                    <p className="text-gray-800 text-2xl font-bold mb-2">Busca</p>
                                    <p className="text-black m-0 leading-tight mb-4">Profesionales con diversas
                                        habilidades</p>
                                </section>
                                <section className="flex-shrink-0 rounded-xl bg-white p-4 text-center max-w-[200px]">
                                    <img src={Segundo} className="w-28 py-4  mx-auto mb-4" alt=""/>
                                    <p className="text-gray-800 text-2xl font-bold mb-2">Contacta</p>
                                    <p className="text-black m-0 leading-tight mb-4">Y obtén respuestas ajustadas a tu
                                        solicitud</p>
                                </section>
                                <section className="flex-shrink-0 rounded-xl bg-white p-4 text-center max-w-[200px]">
                                    <img src={Tercero} className="w-28 py-4  mx-auto mb-4" alt=""/>
                                    <p className="text-gray-800 text-2xl font-bold mb-2">Soluciona</p>
                                    <p className="text-black m-0 leading-tight mb-4">Tus necesidades de forma segura y
                                        aficaz</p>
                                </section>
                            </div>

                            <div className="relative pt-6 mt-10">
                                <img src={Contratista} className="self-center relative h-[250px] mx-auto z-10" alt=""/>
                                <div
                                    className="bg-blue-300 p-10 absolute top-20 left-0 right-0 w-[250px] h-[250px] mx-auto rounded-full"/>
                                <div className="bg-white rounded-xl p-6 text-center relative max-w-[500px]">
                                    <p className="text-black mb-4">¡Hacer realidad tus proyectos de <span
                                        className="text-blue-500">construcción, remodelación o instalación</span> no fue
                                        tan facil</p>
                                    <a href={route((auth.user) ? 'dashboard' : 'guest.dashboard')}>
                                        <PrimaryButton className="font-normal">
                                            Ver contratistas
                                        </PrimaryButton>
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 mt-10 text-center relative max-w-[500px]">
                                <p className="text-black mb-4 text-3xl">Únete a stelle, la <span
                                    className="text-blue-500">comunidad de prestadores de servicios</span> más grande de colombia</p>
                                <p className="text-gray-700 mt-8 mb-8">En todo momento hay alguien que necesita de tu conocimiento; Marca la diferencia ahora.</p>
                                <a href={route((auth.user) ? 'dashboard' : 'guest.dashboard')}>
                                    <PrimaryButton className="font-normal">
                                        Quiero ofertar mis servicios
                                    </PrimaryButton>
                                </a>
                            </div>
                        </main>
                    </div>
                </div>
        </GuestLayout>
    );
}
