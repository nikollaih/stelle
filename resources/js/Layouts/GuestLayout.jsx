import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import Footer from "@/Components/Footer.jsx";
import {styles} from "../../css/Style.js";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

export default function Guest({ children, auth }) {
    return (
        <div className="min-h-screen" style={styles.container}>
            <nav className="px-6 flex top-0 justify-between items-center h-[80px] absolute w-full">
                <Link href="/">
                    <ApplicationLogo className="h-[20px] fill-current text-gray-500"/>
                </Link>

                <div className="hidden lg:block">
                    {
                        !auth?.user && <>
                            <Link
                                href={route('login')}
                                className="rounded-md px-3 py-2 text-white ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Inicio de sesión
                            </Link>
                            <Link
                                href={route('register')}
                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                <PrimaryButton>
                                    Registrarme
                                </PrimaryButton>
                            </Link>
                        </>
                    }
                </div>
                <div className="flex gap-4 lg:hidden">
                    <Link href={route('login')} as="button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-7 h-7 text-white cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"/>
                        </svg>

                    </Link>
                    <Link href={route('register')} as="button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-7 h-7 text-white cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"/>
                        </svg>
                    </Link>
                </div>
            </nav>

            <main className="px-6 pt-32 pb-60 min-h-screen w-full lg:max-w-[1300px] mx-auto">{children}</main>
            <Footer/>
        </div>
    );
}
