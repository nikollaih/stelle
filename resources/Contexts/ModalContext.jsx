import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const [modalChildren, setModalChildren] = useState(null);

    return (
        <ModalContext.Provider value={{ showModal, setShowModal, modalChildren, setModalChildren }}>
            {children}
        </ModalContext.Provider>
    );
};
