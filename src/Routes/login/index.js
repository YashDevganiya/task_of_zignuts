import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { TextField } from "../TextField";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import formValidation from "../../Validation/form";

const Login = () => {
  let navigate = useNavigate();

  const handleSubmit = async (values) => {
    const login = await axios.get("./users.json");
    const length = login.data.users.length;
    for (var j = 0; j < length; j++) {
      if (
        login.data.users[j].email == values.email ||
        login.data.users[j].password == values.password
      ) {
        alert("Logged in Successfully !");
        setTimeout(() => {
          navigate("/invitation-page");
        }, 2000);
        const password = localStorage.setItem("password", values.password);
        const userID = localStorage.setItem(
          "user_id",
          login.data.users[j].user_id
        );
        break;
      } else {
        alert("Invalid Id or Password");
      }
    }
    // if (
    //   login.data.users[j].email == values.email ||
    //   login.data.users[j].password == values.password
    // ) {
    //   alert("Logged in Successfully !");
    //   setTimeout(() => {
    //     navigate("/invitation-page");
    //   }, 5000);
    // } else {
    //   alert("Invalid Id or Password");
    // }

    // console.log(login.data.users[0].email)
    // console.log(login.data.users[0].password)
  };
  return (
    <>
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <div className="container-fluid text-center">
        <div className="container">
          <h3 className="m-4">Login Form</h3>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={formValidation}
            onSubmit={(values) => {
              console.log(values);
              handleSubmit(values);
            }}
          >
            <Form>
              <div className="form-group ">
                <TextField
                  label="Email*"
                  name="email"
                  placeholder="enter your email"
                />
                <TextField
                  label="Password*"
                  name="password"
                  placeholder="enter your Password"
                />
              </div>
              <button type="submit" className="btn btn-primary mt-3">
                Login
              </button>
            </Form>
          </Formik>
          <p className="mt-3">(NOTE : * is required fields ,, if not navigate use "route = /invitation-page")</p>
        </div>
      </div>
    </>
  );
};

export default Login;
