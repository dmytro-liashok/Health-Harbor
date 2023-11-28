import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";

const Layout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default Layout;
