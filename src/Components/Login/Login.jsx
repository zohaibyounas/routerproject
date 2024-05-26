import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function Login() {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Simulate an API call
    setTimeout(() => {
      console.log("Form data", values);
      alert("Login successful!");
      setSubmitting(false);
      resetForm();
    }, 1000);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-700 "
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/20216428/pexels-photo-20216428/free-photo-of-decorative-cup-near-mouse-on-laptop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ touched, errors, isSubmitting }) => (
            <Form className="space-y-4 ">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <Field
                  type="text"
                  name="username"
                  id="username"
                  className={`mt-1 block w-full px-3 py-2 border ${
                    touched.username && errors.username
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
                />
                <ErrorMessage
                  component="div"
                  name="username"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className={`mt-1 block w-full px-3 py-2 border ${
                    touched.email && errors.email
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
                />
                <ErrorMessage
                  component="div"
                  name="email"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className={`mt-1 block w-full px-3 py-2 border ${
                    touched.password && errors.password
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
                />
                <ErrorMessage
                  component="div"
                  name="password"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
