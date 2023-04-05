import { createContext, useState } from 'react';

interface AuthContextProps {
  cpf: string;
  setCpf: (cpf: string) => void;
  children?: React.ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({
  cpf: '',
  setCpf: () => {},
});

interface AuthProviderProps extends React.PropsWithChildren<{}> {}
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [cpf, setCpf] = useState('');

  return (
    <AuthContext.Provider value={{ cpf, setCpf }}>
      {children}
    </AuthContext.Provider>
  );
};
