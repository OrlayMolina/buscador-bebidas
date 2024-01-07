import { useState, useEffect, createContext } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const BebidasContext = createContext();

const BebidasProvider = ({ children }) => {

    const [ bebidas, setBebidas ] = useState([]);
    const [ modal, setModal] = useState(false);
    const [ bebidaId, setBebidaId] = useState(null);

    const consultarBebida = async datos => {

        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`;

            const { data } = await axios(url);
            setBebidas(data.drinks);
        } catch (error) {
            console.log(error);
        }
    }

    const handleModalClick = () => {
        setModal(!modal);
    }

    const handleBebidaIdClick = id => {
        setBebidaId(id);
    }

    return(
        <BebidasContext.Provider
            value={{
                consultarBebida,
                bebidas,
                handleModalClick,
                modal,
                handleBebidaIdClick
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