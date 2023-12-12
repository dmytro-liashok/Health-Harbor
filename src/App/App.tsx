import { Routes, Route } from "react-router-dom";
import Layout from "../page/Layout/Layout";
import routes from "../routes/routes";
import NotFound from "../page/NotFound/NotFound";
import Diary from "../page/Diary/Diary";
import { useAppDispatch } from "../hooks/hooksRedux";
import { useEffect } from "react";
import { authRefresh } from "../redux/auth/authOperation";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authRefresh());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Diary />} />
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
