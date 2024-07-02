import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ProtectProps } from "./Protect.props";
import {} from "./Protect.style";
import { selectAccessToken } from "../../slices/authSlice";

const ProtectComponent = (props: ProtectProps): JSX.Element => {
  const {} = props;

  const location = useLocation();

  const accessToken = useSelector(selectAccessToken);

  return accessToken ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/sign-in" state={{ from: location }} replace />
  );
};

export default React.memo(ProtectComponent);
