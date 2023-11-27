import Diary from "../page/Diary/Diary";
import Exercises from "../page/Exercises/Exercises";
import Products from "../page/Products/Products";
import Profile from "../page/Profile/Profile";
import Signin from "../page/Signin/Signin";
import Signup from "../page/Signup/Signup";
import Welcome from "../page/Welcome/Welcome";
import {
  DIARY_ROUTE,
  EXERCISES_ROUTE,
  PRODUCTS_ROUTE,
  PROFILE_ROUTE,
  SIGNIN,
  SIGNUP,
  WELCOME_ROUTE,
} from "../utils/constantes";

const routes = [
  {
    path: WELCOME_ROUTE,
    element: <Welcome />,
  },
  {
    path: SIGNUP,
    element: <Signup />,
  },
  {
    path: SIGNIN,
    element: <Signin />,
  },
  {
    path: PROFILE_ROUTE,
    element: <Profile />,
  },
  {
    path: DIARY_ROUTE,
    element: <Diary />,
  },
  {
    path: PRODUCTS_ROUTE,
    element: <Products />,
  },
  {
    path: EXERCISES_ROUTE,
    element: <Exercises />,
  },
];

export default routes;
