import { useState, useEffect, createContext } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const BebidasContext = createContext();

const BebidasProvider = ({ children }) => {

    return(
        <BebidasContext.Provider
            value={{
                
            }}
        >
            {children}
        </BebidasContext.Provider>
    );
}

BebidasProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export {
    BebidasProvider
}

export default BebidasContext;