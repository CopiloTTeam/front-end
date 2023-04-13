import { ReactNode, createContext, useState } from "react";
type AuthContextProps = {
  children: ReactNode
}
type funcionario = {
  id: number;
  cargo: string;
  cpf: string;
  email: string;
  nome: string;
  senha: string;

}
export const FuncionarioInicio = {
  id: -1,
  cargo: '',
  cpf: '',
  email: '',
  nome: '',
  senha: '',
}
type AuthContextType = {
  isLogged: boolean;
  setIsLogged: (newState: boolean) => void;
  funcionario: funcionario;
  setFuncionario: (newState: funcionario) => void
}
const InicialValue = {
  isLogged: false,
  setIsLogged: () => {},
  funcionario: FuncionarioInicio,
  setFuncionario: () => {}
};

export const AuthContext = createContext<AuthContextType>(InicialValue);

export const AuthContextProvider = ({children} : AuthContextProps) => {
  const [isLogged, setIsLogged] = useState(InicialValue.isLogged);
  const [funcionario, setFuncionario] = useState(InicialValue.funcionario);

  return(
    <AuthContext.Provider value={{ isLogged, setIsLogged, funcionario, setFuncionario }}>
      {children}
    </AuthContext.Provider>
  )
}