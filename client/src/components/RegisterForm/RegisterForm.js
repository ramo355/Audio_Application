import React, { useState } from "react";
import classes from "./RegisterForm.module.css";
import Button from "../UI/Buton/Button";
import Input from "../UI/Input/Input";

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const RegisterForm = (props) => {
  const [formControls, setFormControl] = useState({
    email: {
      value: "",
      name: "email",
      type: "email",
      label: "Email",
      errorMessage: "Введите корректный email",
      valid: false,
      touched: false,
      validation: {
        required: true,
        email: true,
      },
    },
    password: {
      value: "",
      name: "password",
      type: "password",
      label: "Password",
      errorMessage: "Введите корректный пароль",
      valid: false,
      touched: false,
      validation: {
        required: true,
        minLenght: 6,
      },
    },
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const validateControl = (value, validation) => {
    if (!validation) {
      return true;
    }

    let isValid = true;
    if (validation.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (validation.email) {
      isValid = validateEmail(value) && isValid;
    }
    if (validation.minLenght) {
      isValid = value.length >= validation.minLenght && isValid;
    }
    return isValid;
  };

  const onChangeHandler = (event, controlName) => {
    const formControl = { ...formControls };
    const control = { ...formControl[controlName] };
    control.value = event.target.value;
    control.touched = true;
    control.valid = validateControl(control.value, control.validation);
    formControl[controlName] = control;
    let isFormValidation = true;
    Object.keys(formControl).forEach((name) => {
      isFormValidation = formControl[name].valid && isFormValidation;
    });
    setFormControl(formControl);
    setIsFormValid(isFormValidation);
  };

  const renderInputs = () => {
    return Object.keys(formControls).map((controlName, idx) => {
      const control = formControls[controlName];

      return (
        <Input
          name={control.name}
          key={controlName + idx}
          type={control.type}
          label={control.label}
          defaultValue={control.value}
          valid={control.valid}
          touched={control.touched}
          errorMessage={control.errorMessage}
          shouldValidate={!!control.validation}
          onChange={event=> onChangeHandler(event, controlName)}
        />
      );
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <form className={classes.Form} onSubmit={submitHandler}>
        <h2>{props.title}</h2>
        {renderInputs()}
        <Button
          type="success"
          disabled={!isFormValid}
        >
          {props.name}
        </Button>
      </form>
    </React.Fragment>
  );
};


export default RegisterForm;
