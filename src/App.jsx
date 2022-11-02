import { useRef, useState } from "react";
import Dialog from "./components/Dialog";
import dataJson from "./data/data.json";

const data = dataJson.data;

export default function App() {

  const [products, setProducts] = useState(data);
  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
    nameProduct: "",
  })

  const idProductRef = useRef();

  const handleDialog = (message, isLoading, nameProduct) => {
    setDialog({message, isLoading, nameProduct})
  }

  const handleDelete = (id) => {
    const index = data.findIndex((product) => product.id === id);
    handleDialog("Are you sure you want to delete?", true, data[index].name);
    idProductRef.current = id;
  }

  const areUSureDelete = (choose) => {
    if (choose){
      setProducts(products.filter((product) => product.id !== idProductRef.current));
      handleDialog("", false);
    } else {
      handleDialog("", false);
    }
  }

  return (
    <div>
      {products.map((product) => (
        <div
          key={product.id}
        >
          <h3>{product.name}</h3>
          <button
            onClick={() => handleDelete(product.id)}
          >
            Delete
          </button>
        </div>
      ))}
      {dialog.isLoading && (
        <Dialog
          nameProduct={dialog.nameProduct}
          onDialog={areUSureDelete}
          message={dialog.message}
        />
      )}
    </div>
  )
}
