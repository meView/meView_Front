import { userAccessTokenState } from "recoil/UserAtom";
import { useRecoilValue } from "recoil";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isLogin = useRecoilValue(userAccessTokenState);
  if (isLogin) {
    return <Outlet />;
  }
  return <Navigate to="/" />;
};

export default ProtectedRoute;
