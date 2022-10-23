import { useState } from "react";
import { useAppContext } from "../context/appContext";


function Create() {
  const {createProduct} = useAppContext()

  const [product, setProduct] = useState({
    name:'',
    stock:0
  });

  const handleSubmit = (e)=>{
    e.preventDefault();
    
    createProduct({...product,id:Date.now()})
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input value={product.name} type="text" className="form-control" placeholder="nombre" onChange={e => setProduct({...product,name:e.target.value})}/>
        <label>Nombre</label>
      </div>
      <div className="form-floating">
        <input value={product.stock} type="number" className="form-control" placeholder="Cantidad" onChange={e=>setProduct({...product,stock:e.target.value})} />
        <label>Cantidad</label>
      </div>
      <div className="d-grid mt-3">
        <button className="btn btn-primary" type="submit">
          <i className="fa-solid fa-circle-plus fa-2x"></i>
        </button>
      </div>
    </form>
  );
}

export default Create;
