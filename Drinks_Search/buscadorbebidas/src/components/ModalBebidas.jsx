import { Modal, Image } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

const ModalBebidas = () => {

    const { modal, handleModalClick, receta } = useBebidas();

    const mostrarIngredientes = () => {
        let ingredientes = [];

        for(let i = 1; i < 16; i++){
            if(receta[`strIngredient${i}`]){
                /// .push modifica la variable original, en un useState esta opcion no debe aplicarse
                ingredientes.push(
                    <li>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
                )
            }
        }

        return ingredientes;
    }


    return (
        <Modal
            show={modal}
            onHide={handleModalClick}
        >
            <Image
                src={receta.strDrinkThumb}
                alt={`Imágen receta ${receta.strDrink}`}
            />

            <Modal.Header>
                <Modal.Title>
                    {receta.strDrink}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="p-3">
                    <h2>Instrucciones</h2>
                    {receta.strInstructions}
                    <h2>Ingredientes y Cantidades</h2>
                    {mostrarIngredientes()}
                </div>
            </Modal.Body>

        </Modal>
    )
}

export default ModalBebidas
