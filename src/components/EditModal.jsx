import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useAppContext } from "../context/appContext";
import { useState,useEffect } from "react";

function EditModal({ show, onClose, product }) {
  const { updateProduct } = useAppContext();

  const { name, stock } = product;

  const [formData, setFormData] = useState({name:'',stock:0});
    
 

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(formData)
    onClose()
  };

  useEffect(() => {
    setFormData(product)
  }, [product])
  

  return (
    <>
      <Form>
        <Modal show={show} onHide={onClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FloatingLabel
              controlId="floatingInput"
              label="Nombre"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Nombre del producto"
                defaultValue={name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                }}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Stock">
              <Form.Control
                type="number"
                placeholder="Stock"
                defaultValue={stock}
                onChange={(e) => {
                  setFormData({ ...formData, stock: e.target.value });
                }}
              />
            </FloatingLabel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Actualizar
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </>
  );
}

export default EditModal;
