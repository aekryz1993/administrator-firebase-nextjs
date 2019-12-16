// import { useState, useEffect } from "react";
import { Field } from "redux-form";
import section1Style from "../../../stylesheet/components/landingPage/section1.css";

const InputTitle = ({
  input,
  label,
  type,
}) => (
    <div className={section1Style.titleContainer}>
      <label className={section1Style.labelTitle} htmlFor={input.name}>{label}</label>
      <input className={section1Style.inputTitle} {...input} type={type} />
    </div>
  )

const Section1 = ({ onSubmit, handleSubmit }) => {
  return (
    <div className={section1Style.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field name="title" component={InputTitle} placeholder="Title" type="text" label="Title" required />
        <button type="submit">Edit</button>
      </form>
    </div>
  )
}

export default Section1