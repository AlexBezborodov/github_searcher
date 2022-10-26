import { useEffect, useState } from "react";


export function useFilteredSearch(data, query) {
    const transformQuery = query.toLowerCase();
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        if (!!query) {
            setFilteredData(data.filter(item => item.login.includes(transformQuery)))
        } else {
            setFilteredData(data)
        }
    }, [data, query])
  return { filteredData };
}
