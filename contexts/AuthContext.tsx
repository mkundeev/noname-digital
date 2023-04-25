import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface IAuthContext {
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;
}

export const AuthContext = createContext<IAuthContext>({
  userId: "",
  setUserId: () => {},
});

export const AuthState = ({ children }: { children: React.ReactNode }) => {
  const [userId, setUserId] = useState("");

  return (
    <AuthContext.Provider value={{ userId, setUserId }}>
      {children}
    </AuthContext.Provider>
  );
};
