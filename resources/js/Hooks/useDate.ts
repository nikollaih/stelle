import moment from "moment";

const useDate = () => {
    const toInputFormat = (date: string) => {
        return moment(date).format("YYYY-MM-DD");
    }

    return {
        toInputFormat
    }
}

export default useDate;
