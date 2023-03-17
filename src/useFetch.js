import { useState } from "react";

function useFetch(baseUrl) {
    const [loading, setLoading] = useState(true);
    
    function get(url) {
        return new Promise((resolve, reject) => {
            fetch(baseUrl + url)
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                console.log(data)
                resolve(data)})
            .catch(error => {
                console.log(error);
                reject(error);
                setLoading(false);
            })

        })
    }
    
    return { get, loading }
}

export default useFetch;