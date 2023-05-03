import React, { useState, useEffect, ReactNode } from "react";
import "./Modal.css";

interface ModalProps {
    show: boolean;
    children: ReactNode;
    title: ReactNode | string;
    onClose: () => void;
    onSubmit: () => void;
    submitText?: undefined | string;
    size: undefined | string;
}


const Modal: React.FC<ModalProps> = ({children, onClose, onSubmit, size, show, submitText, title}) => {

    if(submitText === undefined){
        submitText = "Submit";
    }

    const GetSizeInPixels = () => {
        switch(size){
            case "m": 
                return "modal-content-m";
            case "l":
                return "modal-content-l";
            default: 
            case "s":
                return "modal-content-s";
            
        }
        
    }

    return(
        <div className = {`modal ${show ? "show" : ""}`} onClick = {onClose}>
            <div className = {`modal-content ${GetSizeInPixels()}`} onClick = {(e)=>{e.stopPropagation();}}>
                <div className="modal-header">
                    <div className = "modal-title">{title}</div>
                    <div className = "modal-close-button" onClick = {onClose}>&#128473;</div>
                </div>
                <div className="modal-body">
                    {children}
                </div>
                <div className="modal-footer">
                    <button className="button close" onClick = {onClose}>Close</button>
                    <button className = "button submit" onClick = {onSubmit}>{submitText}</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;