import React, { forwardRef, useEffect, useRef } from 'react';
import {InputHTMLAttributes} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string,
    isFocused?: boolean
}

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }: InputProps, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            // @ts-ignore
            input?.current?.focus();
        }
    }, []);


    return (
        <input
            {...props}
            type={type}
            className={
                'h-12 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm' +
                className
            }
            // @ts-ignore
            ref={input}
        />
    );
});
