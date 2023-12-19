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
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
  WELCOME_ROUTE,
} from "../utils/constantes";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import RestrictedRoute from "./RestrictedRoute/RestrictedRoute";

export const routesPrivate = [
  {
    path: PROFILE_ROUTE,
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },
  {
    path: DIARY_ROUTE,
    element: (
      <PrivateRoute>
        <Diary />
      </PrivateRoute>
    ),
  },
  {
    path: PRODUCTS_ROUTE,
    element: (
      <PrivateRoute>
        <Products />
      </PrivateRoute>
    ),
  },
  {
    path: EXERCISES_ROUTE,
    element: (
      <PrivateRoute>
        <Exercises />,
      </PrivateRoute>
    ),
  },
];

export const routesRestrict = [
  {
    path: WELCOME_ROUTE,
    element: (
      <RestrictedRoute>
        <Welcome />
      </RestrictedRoute>
    ),
  },
  {
    path: SIGNUP_ROUTE,
    element: (
      <RestrictedRoute>
        <Signup />
      </RestrictedRoute>
    ),
  },
  {
    path: SIGNIN_ROUTE,
    element: (
      <RestrictedRoute>
        <Signin />
      </RestrictedRoute>
    ),
  },
];
