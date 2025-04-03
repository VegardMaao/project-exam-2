import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LoginState {
  loggedIn: boolean;
  accessToken: string | undefined;
  userName: string | undefined;
  logIn: () => void;
  logOut: () => void;
  getToken: () => void;
  getName: () => void;
}

const useLoggedInStore = create<LoginState>()(persist(
  (set, get) => ({
    loggedIn: false,
    accessToken: undefined,
    userName: undefined,
    logIn: () =>
      set(() => {
        return {
          loggedIn: true,
          accessToken: localStorage.getItem("accessToken") || undefined,
          userName: localStorage.getItem("userName") || undefined
        };
      }),
    logOut: () =>
      set(() => {
        localStorage.clear();
        return {
          loggedIn: false,
          accessToken: undefined,
          userName: undefined
        };
      }),
    getToken: () => {
      const token = get().accessToken;
      return token;
    },
    getName: () => {
      const name = get().userName;
      return name;
    }
  }),
  {
    name: 'login-storage'
  }
)
);

export default useLoggedInStore;