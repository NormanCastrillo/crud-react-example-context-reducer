import { useState } from "react";
import { useAppContext } from "../context/appContext";
import EditModal from "./EditModal";

function Show() {
  const { products,deleteProduct } = useAppContext();

  const [show, setShow] = useState(false);
  const [product, setProduct] = useState({})

  const handleClose = () => setShow(false);
  const handleShow = (rowData) => {
    setProduct(rowData)
    setShow(true);
}

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Producto</th>
            <th scope="col">Stock</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <th scope="row">{product.id}</th>
              <td>{product.name}</td>
              <td>{product.stock}</td>
              <td>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button type="button" className="btn btn-primary" onClick={()=>handleShow(product)}>
                    <i className="fa-regular fa-pen-to-square"></i>
                  </button>
                  <button type="button" className="btn btn-danger" onClick={()=>deleteProduct(product)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <EditModal show={show} onClose={handleClose} product={product}/>
    </>
  );
}

export default Show;
