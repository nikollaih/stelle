import {getService} from "../../services/Services";

export const useCoverage = () => {

    const getCities =  async (token: string, state: number) => {
        let response = await getService(`/state/${state}/cities`, token);
        return await response.json();
    }

    return {
        getCities
    }
}

export default useCoverage();
