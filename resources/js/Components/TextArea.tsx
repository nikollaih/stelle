import {forwardRef, InputHTMLAttributes, useEffect, useRef} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string,
    isFocused?: boolean,
    ref: any
}
export default forwardRef(function TextArea({ type = 'text', className = '', isFocused = false, ...props }: InputProps, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            // @ts-ignore
            input.current.focus();
        }
    }, []);

    return (
        <textarea
            {...props}
            className={
                'h-40 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm' +
                className
            }
            // @ts-ignore
            ref={input}
        />
    );
});
