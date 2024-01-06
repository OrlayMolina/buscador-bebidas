import { useState, useEffect, createContext } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const BebidasContext = createContext();

const BebidasProvider = ({ children }) => {

    const consultarBebida = async datos => {

        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`;

            const { data } = await axios(url);
            console.log(datos);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <BebidasContext.Provider
            value={{
                consultarBebida
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