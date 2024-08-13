import {Head, Link, usePage} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import ContratistaItem from '@/Pages/Contratistas/Partials/ContratistaItem.jsx';
import { getService } from "../../../services/Services.ts";
import {useState} from "react";
import { useDebouncedCallback } from 'use-debounce';
import ContratistaItemSkeleton from '@/Skeletons/ContratistaItem.jsx';

export default function Contratistas() {
    const usePages = usePage();
    const [contratista, setContratista] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleInputEvent = useDebouncedCallback( (e) => {
        const value = e.target.value;
        setLoading(true);
        if(value !== "") {
            searchContratista(value);
        }
        else {
            setLoading(false);
            setContratista(null);
        }
    }, 500)

    const searchContratista = async (document) => {
        let response = await getService(route('contratista.search', { document }), usePages.props.csrfToken)
        if(response.status === 200){
            let jsonResponse = await response.json();
            setContratista(jsonResponse);
        }
        else
            setContratista(false);

        setLoading(false);
    }


return(
        <AuthenticatedLayout>
            <Head title="Contratistas"/>
            <div className="">
                <h1 className="text-white text-2xl font-bold">Contratistas</h1>
                <div className="flex justify-between gap-4 my-4">
                    <input onChange={handleInputEvent} type="number" placeholder="Número de documento" className="flex-1 rounded-lg max-w-[400px]" name="search-document" id="search-document"/>
                    <Link href={route('contratista.create')}>
                        <PrimaryButton>
                            Nuevo contratista
                        </PrimaryButton>
                    </Link>
                </div>
                <div>
                    { contratista && !loading && <ContratistaItem  contratista={contratista}/> }
                    { loading && <ContratistaItemSkeleton /> }
                    {
                        (!contratista && !loading) ?
                            <div
                                className="bg-whiterounded-lg flex gap-4 items-center justify-between skeleton-container">
                                <p className="my-6 text-center mx-auto text-lg text-gray-700">{(contratista === false) ? "No se han encontrado contratistas" : "Ingrese un número de documento para realizar la busqueda"}</p>
                            </div> : null
                    }
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
