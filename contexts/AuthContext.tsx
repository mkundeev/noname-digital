import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface IAuthContext {
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<IAuthContext>({
  isLogin: false,
  setIsLogin: () => {},
});

export const AuthState = ({ children }: { children: React.ReactNode }) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
