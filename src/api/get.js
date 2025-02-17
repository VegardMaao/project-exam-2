import {useState, useEffect} from "react";

export default function useGetAPI(urlParam) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function getData() {
            try {
                setIsError(false);   
                setIsLoading(true); 
                const response = await fetch(urlParam);
                const json = await response.json();
                setData(json.data);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        getData();
    }, [urlParam])

    return { data, isLoading, isError };
}