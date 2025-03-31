
export interface LoginUserData {
    password: string;
    email: string;
}


export interface RegisterUserData extends LoginUserData {
    name: string;
}
  