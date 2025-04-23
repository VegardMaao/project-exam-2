import { useState, useEffect } from "react";
import { getHeaders } from "./getHeaders";

/**
 * @description a simple get which can be destructured into loading, error and finished state
 * @param { string } urlParam - the url of the fetch request
 * @param {object } body - the body of my fetch request
 * @returns
 */
export default function useGetAPI(urlParam, body) {
  const req = {
    method: `GET`,
    body: JSON.stringify(body),
    headers: getHeaders(),
  };
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(urlParam, req);
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
  }, [urlParam]);

  return { data, isLoading, isError };
}
