import { useContext } from "react";
import authContext from "./authContext";

const useAuth = ()=>{
    const context = useContext(authContext);
    return context
}

export default useAuth;
