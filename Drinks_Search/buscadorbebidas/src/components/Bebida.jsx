import React from 'react';
import PropTypes from 'prop-types';

const Bebida = ({ bebida }) => {
    return (
        <div>
            {bebida.strDrink}
        </div>
    );
};

Bebida.propTypes = {
    bebida: PropTypes.shape({
        strDrink: PropTypes.string.isRequired,
    }).isRequired,
};

export default Bebida;
