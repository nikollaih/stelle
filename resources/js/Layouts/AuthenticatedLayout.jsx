import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, usePage } from '@inertiajs/react';
import {styles} from "../../css/Style.js";
import Footer from "@/Components/Footer.jsx";

export default function Authenticated({ children, showMenu = true }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const { props} = usePage();

    return (
        <div className="min-h-screen" style={styles.container}>
            <nav className="px-6 flex top-0 justify-between items-center h-[80px] absolute w-full">
                <Link href="/">
                    <ApplicationLogo className="h-[20px] fill-current text-gray-500"/>
                </Link>

                {
                    (props.auth?.user?.role_id === 1 && showMenu) &&
                    <ol className="hidden list-none gap-4 text-white text-xl  md:flex">
                        <li className="">
                            <a href={route('dashboard')}
                                  className={(route().current() === "dashboard" || !route().current()) ? `text-blue-300 font-bold` : ``}>Inicio</a>
                        </li>
                        <li>
                            <Link href={route('contratista.index')}
                                  className={(route().current() === "contratista.index") ? `text-blue-300 font-bold` : ``}>Contratistas</Link>
                        </li>
                        <li>
                            <Link href={route('partner')}
                                  className={(route().current() === "partner") ? `text-blue-300 font-bold` : ``}>Aliados</Link>
                        </li>
                    </ol>
                }

                <div className="flex gap-4">
                    <Link href={route('logout')} method="post" as="button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-7 h-7 text-white cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"/>
                        </svg>
                    </Link>
                </div>
            </nav>

            <main className="px-6 pt-32 pb-60 min-h-screen w-full lg:max-w-[1300px] mx-auto">{children}</main>
            <Footer />
        </div>
    );
}
