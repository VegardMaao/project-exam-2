import { create } from "zustand";

interface LoginState {
  loggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
}

const useLoggedInStore = create<LoginState>()((set) => ({
  loggedIn: false,
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
