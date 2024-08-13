import {useForm} from "@inertiajs/react";
import {useEffect} from "react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {toast} from "sonner";
import Texts from "../../../../Texts.js";


export default function SetPartnersUserList ({partners, user_partners, user, onClose = () => {}}) {
    const {data, setData, post} = useForm([]);

    useEffect(() => {
        setData(user_partners);
    }, []);

    const onSubmit = () => {
        post(route('user_partners.update', { userId: user.id }), {
            onSuccess: () => toast.success(Texts.success_update),
            onError: () => toast.error(Texts.error_update)
        });

        onClose();
    }

    const handleClick = (partner) => {
        let copyData = [...data];
        const index = copyData.findIndex(p => p.id === partner.id);

        if (index !== -1) {
            copyData.splice(index, 1);
        } else {
            copyData.push(partner);
        }

        setData(copyData);
    }

    const partnerItem = (partner) => {
        let active = data.some((uPartner) => uPartner.id === partner.id)
        return <div onClick={() => handleClick(partner)} className={"p-4 rounded-md items-center flex flex-col justify-center cursor-pointer hover:bg-sky-200 " + (active ? "bg-sky-200" : "bg-gray-100")}>
            <img src={partner.logo} alt={partner.name} className="h-[50px] mx-auto mb-4"/>
            {partner.name}
        </div>
    }

    return <div className="p-4 text-center">
        <div
            className="bg-white gap-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 text-center mb-4">
            {
                partners && partners.length > 0 && partners.map((partner) => partnerItem(partner))
            }
        </div>
        <hr className="my-4"/>
        <PrimaryButton onClick={() => onSubmit()}>
            Guardar cambios
        </PrimaryButton>
    </div>
}
