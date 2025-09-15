import LoadingSpinner from "@/components/LoadingSpinner";
import { useGetUserProfileQuery } from "@/redux/feature/Authentication/auth.api";
import { type TRole } from "@/types";
import { type ComponentType } from "react";
import { Navigate, useLocation } from "react-router";

export const withAuth = (Component: ComponentType, requiredRole?: TRole) => {
  return function AuthWrapper() {
    const location = useLocation();
    const { data, isLoading } = useGetUserProfileQuery();

    if (isLoading) {
      return <LoadingSpinner></LoadingSpinner>;
    }

    if (!data?.data?.email) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (requiredRole && requiredRole !== data?.data?.role) {
      return <Navigate to="/unauthorized" replace />;
    }

    return <Component />;
  };
};
