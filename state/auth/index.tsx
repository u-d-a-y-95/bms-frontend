import {
  createContext,
  useContext,
  ReactNode,
  useReducer,
  Dispatch,
} from "react";
import { Auth, initialAuthState } from "./initialValue";
import { AuthAction, reducer } from "./reducer";

interface IUserContextValue {
  state: Auth;
  dispatch: Dispatch<AuthAction>;
}
export const UserContext = createContext<IUserContextValue>({
  state: initialAuthState,
  dispatch: () => {},
});

interface UserContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState);
  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useAuthContext = (): IUserContextValue => useContext(UserContext);
