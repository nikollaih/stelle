const YesNoRadio = ({name = "active", active = 0, onChange=() => {}, ...props}) => {
    let isChecked = active === 1;

    const handleChange = (status) => {
        let response = {
            target: {
                name: name,
                value: status
            }
        }
        onChange(response);
    }

    return <div
        className="h-12 border-gray-300 bg-white focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm flex gap-4 px-4">
        <div className="flex items-center">
            <input onClick={() => handleChange(1)} {...props} checked={isChecked} type="radio" value={1}/><span className="ml-1">Si</span>
        </div>
        <div className="flex items-center">
            <input onClick={() => handleChange(0)} {...props} checked={!isChecked} type="radio" value={0}/><span className="ml-1">No</span>
        </div>
    </div>
}

export default YesNoRadio;
