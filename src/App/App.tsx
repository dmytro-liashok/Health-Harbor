import { Routes, Route, Outlet } from "react-router-dom";
import LayOutPrivate from "../page/LayoutPrivate/LayoutPrivate";
import { routesPrivate, routesRestrict } from "../routes/routes";
import NotFound from "../page/NotFound/NotFound";
import { useAppDispatch } from "../hooks/hooksRedux";
import { useEffect, useState } from "react";
import { authRefresh } from "../redux/auth/authOperation";
import useAuthSelectors from "../redux/auth/authSelectors";
import Welcome from "../page/Welcome/Welcome";
import LayoutPublic from "../page/LayoutPublic/LayoutPublic";
import RestrictedRoute from "../routes/RestrictedRoute/RestrictedRoute";

function App() {
  const dispatch = useAppDispatch();
  const { isLoading } = useAuthSelectors();
  const [authRequestComplete, setAuthRequestComplete] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(authRefresh());
      setAuthRequestComplete(true);
    };

    fetchData();
  }, [dispatch]);

  if (!authRequestComplete || isLoading) {
    return <div>Loading</div>;
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RestrictedRoute>
              <LayoutPublic />
            </RestrictedRoute>
          }
        >
          <Route index element={<Welcome />} />
          {routesRestrict.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="*" element={<Outlet />} />
        </Route>
        <Route path="/" element={<LayOutPrivate />}>
          {routesPrivate.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
