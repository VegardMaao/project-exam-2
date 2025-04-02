import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LoginState {
  loggedIn: boolean;
  accessToken: string | undefined;
  logIn: () => void;
  logOut: () => void;
  getToken: () => void;
}

const useLoggedInStore = create<LoginState>()(persist(
  (set, get) => ({
    loggedIn: false,
    accessToken: undefined,
    logIn: () =>
      set(() => {
        return {
          loggedIn: true,
          accessToken: localStorage.getItem("accessToken") || undefined
        };
      }),
    logOut: () =>
      set(() => {
        localStorage.clear();
        return {
          loggedIn: false,
          accessToken: undefined
        };
      }),
    getToken: () => {
      const token = get().accessToken;
      return token; 
    }
  }),
  {
    name: 'login-storage'
  }
)
);

export default useLoggedInStore;


// const useCartStore = create(persist(
//   (set) => ({
//     loggedIn: false,
//   accessToken: undefined,
//   logIn: () =>
//     set(() => {
//       return {
//         loggedIn: true,
//         accessToken: localStorage.getItem("accessToken") || undefined
//       };
//     }),
//   logOut: () =>
//     set(() => {
//       return {
//         loggedIn: false,
//         accessToken: undefined
//       };
//     })
//   }),
//   {
//     name: 'cart-storage',
//   }
// )
// )

// console.log(useCartStore);
