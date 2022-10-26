import { useEffect, useState } from "react";

import axios from "axios";
import { Alert } from "react-native";

export function useGetData() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
 

  async function fetchData() {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.github.com/users`);
      if (response.status === 200) {
        setData(response.data);
        setLoading(false);
      } else {
        Alert.alert("Something went wrong. Try again later");
      }
       
    } catch (err) {
      setError(err);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return { data, error, isLoading };
}
