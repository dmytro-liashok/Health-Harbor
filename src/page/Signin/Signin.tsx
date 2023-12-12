import { useFormik } from "formik";
import React from "react";
import { useAppDispatch } from "../../hooks/hooksRedux";
import { authSignIn } from "../../redux/auth/authOperation";

const Signin = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      console.log(values);
      dispatch(authSignIn(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <input
        type="text"
        name="password"
        placeholder="Password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <button type="submit">Signin</button>
    </form>
  );
};

export default Signin;
