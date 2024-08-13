export default function PrimaryButton({ className = '', disabled = false, children, processing = false, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-3 bg-blue-300 border border-transparent justify-center rounded-md font-normal text-black hover:bg-gray-700  active:bg-gray-900  transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
            autoFocus={false}
        >
            {
                processing && <div className="flex justify-between items-center">
                    <svg className="w-8 h-8 text-blue-300 animate-spin mr-2" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#fff" strokeWidth="4"
                                strokeDasharray="4 4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 16 0A8 8 0 0 1 4 12z"></path>
                    </svg>
                     <span className="text-gray-500">Cargando</span>
                </div>
            }

            {!processing && children}
        </button>
    );
}
