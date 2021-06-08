import { createContext, useContext } from "react";

// create context
export const AuthContext = createContext();


// use context with hook
export function useAuth(){
   return useContext(AuthContext);
}