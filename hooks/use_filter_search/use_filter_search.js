import { useEffect, useState } from "react";


export function useFilteredSearch(data, query, key = "login") {
    const transformQuery = query.toLowerCase();
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        if (!!query) {
            setFilteredData(data.filter(item => item[key].includes(transformQuery)))
        } else {
            setFilteredData(data)
        }
    }, [data, query])
  return { filteredData };
}
