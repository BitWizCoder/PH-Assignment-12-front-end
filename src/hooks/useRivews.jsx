import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchUsers = async () => {
  const { data } = await axios.get("http://localhost:3000/review");
  return data;
};

const useRivews = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["reviws"],
    queryFn: fetchUsers,
  });

  return { "reviewData": data, error, isLoading };
};

export default useRivews;
