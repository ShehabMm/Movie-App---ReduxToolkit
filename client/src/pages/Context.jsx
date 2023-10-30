import { createContext,useState, useContext } from "react";

 const Store = createContext()

// eslint-disable-next-line react/prop-types
export const Auu = ({children})=>{
const [userName, setUserName] = useState(localStorage.name);
return  (<Store.Provider value={{userName, setUserName}}>{children}</Store.Provider>)


}

export const Auth = ()=>{

return useContext(Store)


}


export default Store







