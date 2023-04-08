import { Auth } from "./initialValue";

interface IAction {
  type: string;
  payload?: any;
}

export type AuthAction = { type: "SET_TOKEN"; payload: string };

export const reducer = (state: Auth, action: AuthAction): Auth => {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state };
  }
};
