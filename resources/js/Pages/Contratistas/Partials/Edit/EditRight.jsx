import EditPersonalInformation from "@/Pages/Contratistas/Partials/Edit/PersonalInformation.tsx";
import EditServices from "@/Pages/Contratistas/Partials/Edit/Services.tsx";
import EditCoverage from "@/Pages/Contratistas/Partials/Edit/Coverage.tsx";
import {useEditServicesCoverageContratista} from "../../../../../Contexts/EditServicesCoverageContratistaContext.tsx";
import {usePage} from "@inertiajs/react";
import {useEffect} from "react";

const EditContratistaRight = () => {
    const {props} = usePage();
    const {setInitialData} = useEditServicesCoverageContratista();

    useEffect(() => {
        let profile = props.profile;
        setInitialData({
            user_id: profile.id,
            ...profile.services
        })
    }, [props]);


    return <div className="col-span-3 md:col-span-2">
        <EditPersonalInformation/>
        <hr className="my-8"/>
        <EditServices/>
        <hr className="my-8"/>
        <EditCoverage/>
    </div>
}

export default EditContratistaRight;
