import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const AddUser = () => {
  //initial schema of formic
  const defaultValue = {
    name: "",
    email: "",
  };
  // validation schema
  const validationSchema = yup.object().shape({
    name: yup.string().required("please enter name"),
    email: yup.string().required().email("please enter your email"),
  });
  //after handle submit
  const handleSubmit = (values) => {
    console.log("Values :", values);
  };
  return (
    <>
      <div className="container bg-info">
        {" "}
        <br></br>
        <div className="col-md-12 text center">
          <h2 className="text-danger">sign up page by using formic</h2>
          <br></br>
          <Formik
            initialValues={defaultValue}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="col-md-10">
                <Field
                  type="text"
                  name="name"
                  placeholder="enter your name"
                  className="form-control"
                />
                <p className="text-danger">
                  <ErrorMessage name="name" />
                </p>
              </div>
              <div className="col-md-10">
                <Field
                  type="text"
                  name="email"
                  placeholder="enter your email"
                  className="form-control"
                />
                <p className="text-danger">
                  <ErrorMessage name="name" />
                </p>
              </div>
              <button className="btn btn-primary mt-4" type="submit">
                submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};
export default AddUser;
