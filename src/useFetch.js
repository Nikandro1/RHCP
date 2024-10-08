import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState()

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok")
                }
                return response.json();
            })
            .then((data) => setData(data))
            .catch(error => console.error("error", error));
    }, [url])
    return data;
}