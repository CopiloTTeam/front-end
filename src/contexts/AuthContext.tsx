import { ReactNode, createContext, useState } from "react";

type AuthContextProps = {
  children: ReactNode
}

type Funcionario = {
  id: number;
  cargo: string;
  cpf: string;
  email: string;
  nome: string;
  senha: string;
}

export const FuncionarioInicio: Funcionario = {
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
  funcionario: Funcionario;
  setFuncionario: (newState: Funcionario) => void;
  logout: () => void;
}

const funcionarioStorage = localStorage.getItem("funcionario");
let values: { isLogged: boolean, funcionario: Funcionario } | null = null
if (funcionarioStorage !== null) {
  values = JSON.parse(funcionarioStorage)
} 

const initialValue: AuthContextType = {
  isLogged: (values == null)? false : values.isLogged,
  setIsLogged: () => {},
  funcionario: (values == null)? FuncionarioInicio : values.funcionario,
  setFuncionario: () => {},
  logout: () => {}
};

export const AuthContext = createContext<AuthContextType>(initialValue);

export const AuthContextProvider = ({children} : AuthContextProps) => {
  const [isLogged, setIsLogged] = useState(initialValue.isLogged);
  const [funcionario, setFuncionario] = useState(initialValue.funcionario);

  const logout = () => {
    setIsLogged(false);
    setFuncionario(FuncionarioInicio);
    localStorage.removeItem("funcionario");
  }

  return(
    <AuthContext.Provider value={{ isLogged, setIsLogged, funcionario, setFuncionario, logout }}>
      {children}
    </AuthContext.Provider>
  )
}


// import { ReactNode, createContext, useState } from "react";
// type AuthContextProps = {
//   children: ReactNode
// }
// type funcionario = {
//   id: number;
//   cargo: string;
//   cpf: string;
//   email: string;
//   nome: string;
//   senha: string;

// }
// export const FuncionarioInicio = {
//   id: -1,
//   cargo: '',
//   cpf: '',
//   email: '',
//   nome: '',
//   senha: '',
// }
// type AuthContextType = {
//   isLogged: boolean;
//   setIsLogged: (newState: boolean) => void;
//   funcionario: funcionario;
//   setFuncionario: (newState: funcionario) => void
//   // logout: () => void;
// }
// const funcionarioStorage = localStorage.getItem("funcionario");
// let values = null
// if (funcionarioStorage !== null) {
//   values = JSON.parse(funcionarioStorage)
// } 

// const InicialValue = {
//   isLogged: (values == null)? false : values.isLogged,
//   setIsLogged: () => {},
//   funcionario: (values == null)? FuncionarioInicio : values.funcionario,
//   setFuncionario: () => {}
// };

// export const AuthContext = createContext<AuthContextType>(InicialValue);

// export const AuthContextProvider = ({children} : AuthContextProps) => {
//   const [isLogged, setIsLogged] = useState(InicialValue.isLogged);
//   const [funcionario, setFuncionario] = useState(InicialValue.funcionario);

//   return(
//     <AuthContext.Provider value={{ isLogged, setIsLogged, funcionario, setFuncionario }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// import { ReactNode, createContext, useState } from "react";

// type AuthContextProps = {
//   children: ReactNode
// }

// type Funcionario = {
//   id: number;
//   cargo: string;
//   cpf: string;
//   email: string;
//   nome: string;
//   senha: string;
// }

// const FuncionarioInicio: Funcionario = {
//   id: -1,
//   cargo: '',
//   cpf: '',
//   email: '',
//   nome: '',
//   senha: '',
// }

// type AuthContextType = {
//   isLogged: boolean;
//   setIsLogged: (newState: boolean) => void;
//   funcionario: Funcionario;
//   setFuncionario: (newState: Funcionario) => void;
//   logout: () => void;
// }

// const funcionarioStorage = localStorage.getItem("funcionario");
// let values: { isLogged: boolean, funcionario: Funcionario } | null = null
// if (funcionarioStorage !== null) {
//   values = JSON.parse(funcionarioStorage)
// } 

// const initialValue: AuthContextType = {
//   isLogged: (values == null)? false : values.isLogged,
//   setIsLogged: () => {},
//   funcionario: (values == null)? FuncionarioInicio : values.funcionario,
//   setFuncionario: () => {},
//   logout: () => {}
// };

// export const AuthContext = createContext<AuthContextType>(initialValue);

// export const AuthContextProvider = ({children} : AuthContextProps) => {
//   const [isLogged, setIsLogged] = useState(initialValue.isLogged);
//   const [funcionario, setFuncionario] = useState(initialValue.funcionario);

//   const logout = () => {
//     setIsLogged(false);
//     setFuncionario(FuncionarioInicio);
//     localStorage.removeItem("funcionario");
//   }

//   return(
//     <AuthContext.Provider value={{ isLogged, setIsLogged, funcionario, setFuncionario, logout }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

