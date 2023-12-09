import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchUsers = async () => {
  const { data } = await axios.get(
    "http://localhost:3000/property/656471a5cf98570a260f5214"
  );
  return data;
};

const useSingleProperty = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["singleProperty"],
    queryFn: fetchUsers,
  });

  return { singlePropertyData: data, error, isLoading };
};

export default useSingleProperty;
