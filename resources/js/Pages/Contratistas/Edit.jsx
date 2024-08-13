import {Head, Link} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import EditContratistaLeft from "./Partials/Edit/EditLeft.tsx";
import EditContratistaRight from "@/Pages/Contratistas/Partials/Edit/EditRight.jsx";
import {EditContratistaProvider} from "../../../Contexts/EditContratistaContext.tsx";
import {EditServicesCoverageContratistaProvider} from '../../../Contexts/EditServicesCoverageContratistaContext.tsx';

export default function ContratistaEdit({profile, auth}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Perfil Contratista"/>
            <Link to="#" onClick={() => window.history.back()}>
                <PrimaryButton className="bg-transparent border-[0.5px] border-white gap-2 w-[100px] py-2 px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-4 h-4 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"/>
                    </svg>
                    <p className="text-white text-sm">Volver</p>
                </PrimaryButton>
            </Link>

            <p className="text-white text-2xl font-bold my-8">Ajustes de cuenta</p>

            <EditContratistaProvider>
                <EditServicesCoverageContratistaProvider>
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-10 lg:gap-x-32 mt-6">
                        <EditContratistaLeft profile={profile}/>
                        <EditContratistaRight profile={profile}/>
                    </div>
                </EditServicesCoverageContratistaProvider>
            </EditContratistaProvider>
        </AuthenticatedLayout>
    )
}
