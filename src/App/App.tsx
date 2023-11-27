import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "../page/Layout/Layout";
import routes from "../routes/routes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
