import React, { useState } from "react";
import classes from "./Profile.module.css";
import { connect } from "react-redux";
import { fetchImage } from "../../store/Actions/auth";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Buton/Button";

const Profile = (props) => {
  let userId = localStorage.getItem("userId");
  const noname = "/images/noname.jpg";
  const [img, setImg] = useState();
  // eslint-disable-next-line no-unused-vars
  const [file, setFile] = useState({
    img: {
      type: "file",
      name: "file",
      label: "Загрузить фото",
    },
  });

  const onChangeHandler = (event) => {
      setImg(event.target.files[0]);
  };

  const fileHandler = () => {
    props.createAvatar(userId, false, img);
  };
console.log(props.isAuthenticated)
  const renderInputs = () => {
    return Object.keys(file).map((item, idx) => {
      const field = file[item];
      return (
        <Input
          ref={field.ref}
          type={field.type}
          name={field.name}
          label={field.label}
          key={field + idx}
          onChange={onChangeHandler}
        />
      );
    });
  };

  return (
    <div className={classes.Profile}>
      <div>
        {!props.avatar ? (
          <img src={process.env.PUBLIC_URL + `${noname}`} alt="noname" />
        ) : (
          // eslint-disable-next-line no-useless-concat
          <img
            src={`http://localhost:5000/` + `${props.avatar}`}
            alt={props.avatar}
          />
        )}
      </div>
      <form
        className={classes.Upload}
        encType="multipart/form-data"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1>Профиль</h1>
        <p>Ваш email: {props.email} </p>
        {renderInputs()}
        <Button onClick={fileHandler}>Изменить</Button>
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    email: state.auth.email,
    avatar: state.auth.avatar,
    isAuthenticated: !!state.auth.token,
  };
}

function mapDispatchToPtops(dispatch) {
  return {
    createAvatar: (userId, req, img) => dispatch(fetchImage(userId, req, img)),
  };
}

export default connect(mapStateToProps, mapDispatchToPtops)(Profile);
