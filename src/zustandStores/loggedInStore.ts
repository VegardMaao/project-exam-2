import { create } from "zustand";

interface LoginState {
  loggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
}

const useLoggedInStore = create<LoginState>()((set) => ({
  loggedIn: true,
  logIn: () =>
    set(() => {
      return {
        loggedIn: true,
      };
    }),
  logOut: () =>
    set(() => {
      return {
        loggedIn: false,
      };
    }),
}));

export default useLoggedInStore;
