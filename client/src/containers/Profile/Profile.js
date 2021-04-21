import React from "react";
import classes from "./Profile.module.css";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Buton/Button";

const inputs = [
  { type: "file", label: "Выберите файл" },
  { type: "text", label: "Имя" },
];

const Profile = (props) => {
  const fileHandler = (event) => {
    console.log(event.target.value)
  }
  const renderInputs = () => {
    return inputs.map((item, idx) => {
      return <Input type={item.type} label={item.label} key={item + idx} />;
    });
  };

  return (
    <div className={classes.Download}>
      <form className={classes.Upload} onSubmit={e => e.preventDefault()}>
        <h1>Профиль</h1>
        <p>Ваш email: </p>
        {renderInputs()}
        <Button onClick={fileHandler}>
        Изменить
        </Button>
      </form>
    </div>
  );
};

export default Profile;
