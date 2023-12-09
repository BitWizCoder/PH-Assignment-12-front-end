import { Navigate } from "react-router-dom";

const PrivateRoute = ({ redirectPath = "/login", children }) => {
  const user = localStorage.getItem("userRole");

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default PrivateRoute;
