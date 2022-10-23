import { createContext, useContext, useReducer } from "react";
import { CREATE, DELETE, UPDATE } from "./actions";
import {reducer} from './reducer'

export const AppContext = createContext();

const initialState = {
  products: [
   
  ],
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const createProduct = (product) =>
    dispatch({ type: CREATE, payload: product });
  const updateProduct = (product) =>
    dispatch({ type: UPDATE, payload: product });
  const deleteProduct = (product) =>
    dispatch({ type: DELETE, payload: product });

  return (
    <AppContext.Provider
      value={{
        products: state.products,
        createProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
