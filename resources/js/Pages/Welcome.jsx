import { Link, Head } from '@inertiajs/react';
import { styles } from '../../css/Style.js';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import Contratista from '@/../../public/images/contratista.png';
import Primero from '@/../../public/images/primero.png';
import '../../css/Style.css';
import Menu from '@/../js/Components/Menu.jsx';
import {useState} from "react";
import OverlayContainer from "@/Components/OverlayContainer.jsx";
import Footer from "@/Components/Footer.jsx";

export default function Welcome({ auth, laravelVersion, phpVersion }) {

    const [showMenu, setShowMenu] = useState(false);

    const handleClickMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <Head title="Welcome" />
            <OverlayContainer isOpen={showMenu} toggleOverlay={handleClickMenu}>
                <Menu onClose={handleClickMenu} />
            </OverlayContainer>
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50" style={styles.container}>
                <div className="relative min-h-screen flex flex-col items-center  selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="flex lg:justify-center lg:col-start-2">
                                <ApplicationLogo className="h-[20px]" />
                            </div>
                            <nav className="-mx-3 flex flex-1 justify-end">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Inicio
                                    </Link>
                                ) : (
                                    <>
                                        <div onClick={() => {handleClickMenu()}} className="lg:hidden cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                            </svg>
                                        </div>

                                        <div className="hidden lg:block">
                                            <Link
                                                href={route('login')}
                                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                            >
                                                Iniciar Sesión
                                            </Link>
                                            <Link
                                                href={route('register')}
                                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                            >
                                                Registro
                                            </Link>
                                        </div>

                                    </>
                                )}
                            </nav>
                        </header>

                        <main className="mt-6 px-4 flex flex-col items-center">
                            <h2 className="text-center mb-10 text-white font-bold leading-10 text-4xl max-w-[500px]">Te
                                conectamos con contratistas de acuerdo a tus necesidades</h2>
                            <Link href={route('register')} className="mb-10">
                                <PrimaryButton>
                                    Unirme a la comunidad Stelle
                                </PrimaryButton>
                            </Link>

                            <p className="text-2xl mt-10 text-white mb-6 text-center">Una <span
                                className="text-blue-300">solución</span> en tres sencillos pasos</p>

                            <div className="flex overflow-x-auto space-x-8 w-full mb-10 scrollbar-hide mx-auto items-center lg:justify-center">
                                <section className="flex-shrink-0 rounded-md bg-white p-4 text-center max-w-[200px]">
                                    <img src={Primero} className="h-20 w-20 rounded-full border-2 mx-auto mb-4" alt=""/>
                                    <p className="text-gray-800 text-2xl font-bold mb-2">Busca</p>
                                    <p className="text-black m-0 leading-tight">Profesionales con diversas
                                        habilidades</p>
                                </section>
                                <section className="flex-shrink-0 rounded-md bg-white p-4 text-center max-w-[200px]">
                                    <img src={Primero} className="h-20 w-20 rounded-full border-2 mx-auto mb-4" alt=""/>
                                    <p className="text-gray-800 text-2xl font-bold mb-2">Busca</p>
                                    <p className="text-black m-0 leading-tight">Profesionales con diversas
                                        habilidades</p>
                                </section>
                                <section className="flex-shrink-0 rounded-md bg-white p-4 text-center max-w-[200px]">
                                    <img src={Primero} className="h-20 w-20 rounded-full border-2 mx-auto mb-4" alt=""/>
                                    <p className="text-gray-800 text-2xl font-bold mb-2">Busca</p>
                                    <p className="text-black m-0 leading-tight">Profesionales con diversas
                                        habilidades</p>
                                </section>
                            </div>

                            <div className="relative pt-6 mt-10">
                                <img src={Contratista} className="self-center relative h-[250px] mx-auto z-10" alt=""/>
                                <div
                                    className="bg-blue-300 p-10 absolute top-20 left-0 right-0 w-[250px] h-[250px] mx-auto rounded-full"/>
                                <div className="bg-white rounded-md p-6 text-center relative max-w-[500px]">
                                    <p className="text-black mb-4">¡Hacer realidad tus proyectos de <span
                                        className="text-blue-500">construcción, remodelación o instalación</span> no fue
                                        tan facil</p>
                                    <Link>
                                        <PrimaryButton className="font-normal">
                                            Buscar un contratistas
                                        </PrimaryButton>
                                    </Link>
                                </div>
                            </div>
                        </main>

                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}
