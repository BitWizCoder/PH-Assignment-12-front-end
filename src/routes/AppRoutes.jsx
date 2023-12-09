import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../home/HomePage";
import AllPropertiesPage from "../properties/AllPropertiesPage";
import Login from "../auth/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import UserProfile from "../user/UserProfile";
import Wishlist from "../user/Wishlist";
import PropertyBought from "../user/PropertyBought";
import MyReviews from "../user/MyReviews";
import DashboardHome from "../user/DashboardHome";
import WishlistOffer from "../user/WishlistOffer";
import Register from "../auth/Register";
import PropertyDetails from "../properties/PropertyDetails";
import AddProperty from "../agentDashboard/AddProperty";
import MyAddedProperties from "../agentDashboard/MyAddedProperties";
import MySoldProperties from "../agentDashboard/MySoldProperties";
import RequestedProperties from "../agentDashboard/RequestedProperties";
import ManageProperties from "../adminDashboard/ManageProperties";
import ManageUsers from "../adminDashboard/ManageUsers";
import ManageReviews from "../adminDashboard/ManageReviews";
import ErrorPage from "../common/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import UpdateProperty from "../agentDashboard/UpdateProperty";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="properties"
          element={
            <PrivateRoute>
              <AllPropertiesPage />
            </PrivateRoute>
          }
        />
        <Route path="properties/:id" element={<PropertyDetails />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<DashboardHome />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="wishlist-offer/:id" element={<WishlistOffer />} />
        <Route path="properties-bought" element={<PropertyBought />} />
        <Route path="my-reviews" element={<MyReviews />} />

        {/* Agent routes */}
        <Route path="add-property" element={<AddProperty />} />
        <Route path="my-added-properties" element={<MyAddedProperties />} />
        <Route path="my-sold-properties" element={<MySoldProperties />} />
        <Route path="requested-properties" element={<RequestedProperties />} />
        <Route path="update-properties/:id" element={<UpdateProperty />} />

        {/* Admin Routes */}
        <Route path="manage-properties" element={<ManageProperties />} />
        <Route path="manage-users" element={<ManageUsers />} />
        <Route path="manage-reviews" element={<ManageReviews />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
