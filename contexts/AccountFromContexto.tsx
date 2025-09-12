import { createContext, useState } from "react";

export type AccountProps = {
    nome?: string;
    email?: string;
    birth?: string;
    password?: string;
    passwordConfirm?: string;
    phone?: string;
}

type AccountFormContextDataProps = {
    accountFormData: AccountProps;
    updateFormData: (formData: AccountProps) => void
}

type AccountFormContextProviderProps = {
    children: React.ReactNode;
}

const AccontFormContext = createContext<AccountFormContextDataProps>({} as AccountFormContextDataProps);

function AccountProvider({ children }: AccountFormContextProviderProps) {
    const [accountFormData, setAccountFormData] = useState<AccountProps>({} as AccountProps);

    function updateFormData(data: AccountProps) {
        setAccountFormData(prevState => ({ ...prevState, ...data }));
    }

    return (
        <AccontFormContext.Provider value={{ 
            accountFormData,
            updateFormData
         }}>
            {children}
        </AccontFormContext.Provider>
    );
}

export { AccontFormContext, AccountProvider };

