import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link} from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

export default function PartnersPage ({auth, partners}) {
    const partnerItem = (partner) => {
        return<Link
            href={route('partner.edit', { partnerId: partner.id })}
            className="bg-gray-100 p-4 rounded-md cursor-pointer hover:bg-gradient-to-r hover:from-blue-200 hover:to-white">
                    <img src={partner.logo} alt={partner.name} className="h-[70px] mx-auto mb-4 hover:scale-105"/>
                    <p className="text-center text-gray-900">{partner.name}</p>
            </Link>
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Nuestros aliados</h2>}
        >
            <Head title="Contratistas"/>
            <p className="text-center text-white text-3xl font-bold mb-10 max-w-[300px] mx-auto">Nuestros <span
                className="text-blue-300">aliados</span></p>
            <div className="flex justify-between gap-4 my-4">
                <div></div>
                <Link href={route('partner.create')}>
                    <PrimaryButton>
                        Nuevo aliado
                    </PrimaryButton>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {
                    partners && partners.map((partner) => partnerItem(partner))
                }
            </div>
        </AuthenticatedLayout>
    );
}
