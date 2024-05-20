import {useId} from "react";

export default function Select({ className = '', data = [], onChange = (value) => {}, name="name", value="id", ...props }) {
    const selectId = useId();

    const dataOption = () => {
        return data.map((item) => {
            return <option key={item[value]} value={item[value]}>{item[name]}</option>
        })
    }

    return (
        <select
            onChange={(e) => {onChange(e.target.value)}}
            name="city"
            id={selectId}
            className={
                'h-12 w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
                className
            }
            {...props}
            >
            <option value="">- Seleccionar</option>
            {dataOption()}
        </select>
    );
}
