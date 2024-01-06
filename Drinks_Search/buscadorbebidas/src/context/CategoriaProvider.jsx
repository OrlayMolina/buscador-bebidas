import { useState, useEffect, createContext } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const CategoriaContext = createContext();

const CategoriasProvider = ({ children }) => {

    const obtenerCategorias = async () => {
        try {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const { data } = await axios(url);
            console.log(data);
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        obtenerCategorias();
    }, [])

    return(
        <CategoriaContext.Provider
            value={{

            }}
        >
            {children}
        </CategoriaContext.Provider>
    );
}

CategoriasProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export {
    CategoriasProvider
}

export default CategoriaContext;