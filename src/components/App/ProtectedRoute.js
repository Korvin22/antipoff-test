import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ loggedIn, children }) => {

  if (!localStorage.loggedIn) {
    return <Navigate to="/signup" replace />;
  }
  return children;
};
export default ProtectedRoute;
