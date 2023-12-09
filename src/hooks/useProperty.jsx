// http://localhost:3000/property

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProperty = async () => {
  const { data } = await axios.get("http://localhost:3000/property");
  return data;
};

const useProperty = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["property"],
    queryFn: fetchProperty,
  });

  return { propertyData: data, error, isLoading };
};

export default useProperty;
