import { useFormik } from "formik";
import React from "react";
import { useAppDispatch } from "../../hooks/hooksRedux";
import { authSignUp } from "../../redux/auth/authOperation";

const Signup: React.FC = () => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(authSignUp(values));
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
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
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
