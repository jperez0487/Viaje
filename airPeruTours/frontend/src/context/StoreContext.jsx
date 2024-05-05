import { createContext } from "react";
import { lista_paquete } from "../assets/datos";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const contextValue = {
    lista_paquete,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
