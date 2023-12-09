import axios from "axios";
import { useState, useEffect, createContext } from "react";

export const ApiDataContext = createContext();

function ApiDataProvider({ children }) {
  const [propertyData, setPropertyData] = useState(null);
  const [propertyDataSingle, setPropertyDataSingle] = useState(null);
  const [review, setReview] = useState(null);
  const [user, setUser] = useState(null);

  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    // Fetching data for API 1
    // axios
    //   .get("http://localhost:3000/property", {
    //     headers: {
    //       Authorization: `Bearer ${token}`, // Include the token in the Authorization header
    //       "Content-Type": "application/json", // Set Content-Type if needed
    //     },
    //   })
    //   .then((response) => {
    //     setPropertyData(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching API data:", error);
    //   });

    // Fetching data for API 2
    // fetch("http://localhost:3000/property/656471a5cf98570a260f5216")
    //   .then((response) => response.json())
    //   .then((data) => setPropertyDataSingle(data))
    //   .catch((error) => console.error("Error fetching API 2 data:", error));

    // Fetching data for API 3
    // fetch("http://localhost:3000/review")
    //   .then((response) => response.json())
    //   .then((data) => setReview(data))
    //   .catch((error) => console.error("Error fetching API 2 data:", error));

    axios
      .get(`/review`)
      .then((data) => setReview(data))
      .catch((error) => console.error("Error fetching API 2 data:", error));

    // Fetching data for API 4
    // fetch("http://localhost:3000/users")
    //   .then((response) => response.json())
    //   .then((data) => setUser(data))
    //   .catch((error) => console.error("Error fetching API 2 data:", error));
  }, [token]);

  return (
    <ApiDataContext.Provider
      value={{ propertyData, propertyDataSingle, review, user }}
    >
      {children}
    </ApiDataContext.Provider>
  );
}

export default ApiDataProvider;
