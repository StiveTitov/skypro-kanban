import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

export default function useUser() {// С помощью этого хука сможем получить login, exit, и user
return useContext(UserContext) 
}