import { Navigate } from 'react-router-dom';

interface RouteProtectorProps {
  children: React.ReactNode;
}

const RouteProtector = ({ children }: RouteProtectorProps) => {
  // For now, all protected routes should redirect to 404
  // In the future, this can be enhanced with authentication logic
  return <Navigate to="/404" replace />;
};

export default RouteProtector;