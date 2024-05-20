import React, { useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import "@/../css/Components.css";
import { styles } from "../../css/Style.js";

export default function OverlayContainer({ isOpen, children }) {
    return (
        <div className={"overlay" + (isOpen ? " active" : "")} style={styles.container}>
            {children}
        </div>
    );
}
