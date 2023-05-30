import axios from 'axios';
import React from 'react'
import {Formik} from 'formik'
import * as Yup from "yup"
const Add = () => {
  return (
    <div className="formik">
        <Formik
       initialValues={{ name: '', price: '' }}
       validationSchema={Yup.object({
        name : Yup.string().required("Name is required"),
        price: Yup.number().required("Price is required")
       })}
       onSubmit={(values, { setSubmitting, resetForm }) => {
         axios.post(`http://localhost:8080/`, values).then((res)=>{
            console.log(res.data)
            setSubmitting(false)
            resetForm(true)
         })
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="name"
             name="name"
             placeholder='Name'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.name}
           />
           {errors.name && touched.name && errors.name}
           <input
             type="price"
             name="price"
             placeholder='Price'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.price}
           />
           {errors.price && touched.price && errors.price}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
    </div>
  )
}

export default Add