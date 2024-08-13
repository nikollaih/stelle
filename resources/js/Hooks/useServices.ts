import {getService} from "../../services/Services";

export const useServices = () => {

    const getServices =  async (token: string) => {
        let response = await getService('/types/all', token);
        return await response.json();
    }

    return {
        getServices
    }
}

export default useServices();
