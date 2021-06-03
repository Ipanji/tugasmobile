import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

export default function App() {
  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      password: "",
      confirm_password: ""
    },
    // validationSchema: Yup.object({
    //   full_name: Yup.string()
    //     .min(2, "Mininum 2 characters")
    //     .max(15, "Maximum 15 characters")
    //     .required("Required!"),
    //   email: Yup.string()
    //     .email("Invalid email format")
    //     .required("Required!"),
    //   password: Yup.string()
    //     .min(8, "Minimum 8 characters")
    //     .required("Required!"),
    //   confirm_password: Yup.string()
    //     .oneOf([Yup.ref("password")], "Password's not match")
    //     .required("Required!")
    // }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div className="App">
      <h1>UTS PemrogMobile</h1>

      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Npm</label>
          <input
            type="text"
            name="Npm"
            value={formik.values.Npm}
            onChange={formik.handleChange}
          />
          {formik.errors.Npm && formik.touched.Npm && (
            <p>{formik.errors.Npm}</p>
          )}
        </div>
        <div>
        <label>Nama</label>
          <input
            type="text"
            name="full_name"
            value={formik.values.full_name}
            onChange={formik.handleChange}
          />
          {formik.errors.full_name && formik.touched.full_name && (
            <p>{formik.errors.full_name}</p>
          )}
        </div>
        <div>
        <label>Kelas</label>
          <input
            type="text"
            name="Kelas"
            value={formik.values.Kelas}
            onChange={formik.handleChange}
          />
          {formik.errors.Kelas && formik.touched.Kelas && (
            <p>{formik.errors.Kelas}</p>
          )}
        </div>
        <div>
        <label>Alamat</label>
          <input
            type="text"
            name="Alamat"
            value={formik.values.Alamat}
            onChange={formik.handleChange}
          />
          {formik.errors.Alamat && formik.touched.Alamat && (
            <p>{formik.errors.Alamat}</p>
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
