import { useContext } from "react";

import { AccontFormContext } from "../contexts/AccountFromContexto";

export function useAccountForm() {
    const context = useContext(AccontFormContext)
    
    return context;
}