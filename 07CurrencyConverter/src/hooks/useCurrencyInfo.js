import { useState, useEffect } from "react";

// Custom hook to fetch currency information
// Usage: const currencyInfo = useCurrencyInfo('USD'); 

function useCurrencyInfo(currency){ 
    const [data, setData] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res) => setData(res[currency]))
    }
    ,[currency]);
    console.log(data);
    return data;
} 

export default useCurrencyInfo;
