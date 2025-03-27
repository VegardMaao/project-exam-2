//@ts-ignore
import { usePostAPI } from "../../api/index.js";

export function onSubmit(formData:any){
    console.log(formData);
    const { url } = formData;
    const userData = formData;
    delete userData.url;

    console.log(userData);
    console.log(url);   

    const { data, isLoading, isError } = usePostAPI(url, userData);

    if(isLoading){
    console.log("loading");
    }
    if (isError) {
        console.log("error");
        
    }

    console.log(data);
}