import { Col, Card, Button } from 'react-bootstrap';
import useBebidas from '../hooks/useBebidas';
import PropTypes from 'prop-types';

const Bebida = ({ bebida }) => {

    const { handleModalClick } = useBebidas();

    return (
        <Col md={6} lg={3}>
            <Card className='mb-4'>
                <Card.Img
                    variant='top'
                    src={bebida.strDrinkThumb}
                    alt={`Imgen de ${bebida.strDrinkThumb}`}
                />

                <Card.Body>
                    <Card.Title>
                        {bebida.strDrink}
                    </Card.Title>

                    <Button
                        variant='danger'
                        className='w-100 text-uppercase mt-2'
                        onClick={() => {
                            handleModalClick();
                        }}
                    >
                        Ver Receta
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

Bebida.propTypes = {
    bebida: PropTypes.shape({
        strDrinkThumb: PropTypes.string.isRequired,
        strDrink: PropTypes.string.isRequired,
    }).isRequired,
};

export default Bebida;