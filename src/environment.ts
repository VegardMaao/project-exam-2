
export const bearerToken: string | null = localStorage.getItem("accessToken");
export const apiKey: string = "69a52450-a19a-44d8-9cce-2a94b341cd05";
export const baseUrl: string = "https://v2.api.noroff.dev";
export const authUrl: string = `${baseUrl}/auth`;
export const holidazeUrl: string = `${baseUrl}/holidaze`;
export const profilesUrl: string = `${holidazeUrl}/profiles`;