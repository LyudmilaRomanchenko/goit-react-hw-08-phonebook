import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import s from "./RegisterForm.module.css";
import PropTypes from "prop-types";
import { authOperations, authSelectors } from "../../redux/auth";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import styles from "../../styles/styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

console.log(styles);

function RegisterForm() {
  const error = useSelector(authSelectors.getError);
  console.log("error", error);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
    // if (error) {
    //   notify();
    // }
  };

  const notify = () =>
    toast("Maybe this email is taken!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  if (error) {
    notify();
  }

  return (
    <>
      {/* {error && notify()} */}
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <TextField
            // className={classes.input}
            label="Name"
            color="primary"
            size="small"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
            sx={styles.input}
          />
          <TextField
            // classes={classes.input}
            label="Email"
            color="primary"
            size="small"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
            sx={styles.input}
          />
          <TextField
            // classes={classes.input}
            label="Password"
            color="primary"
            size="small"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
            sx={styles.input}
          />

          <Button
            // classes={classes}
            type="submit"
            variant="contained"
            sx={styles.buttonStyles}
          >
            Register
          </Button>
        </form>
      </Container>
    </>
  );
}

export default RegisterForm;

// RegisterForm.prototype = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.number.isRequired,
//     }).isRequired
//   ),
//   addContact: PropTypes.func.isRequired,
// };

///////////////////////////////////////////////////////////////////////////////////////
// import { makeStyles } from "@mui/styles";
// const useStyles = makeStyles({
//   // ":focus": {
//   //   borderColor: "#009665",
//   // },
//   input: {
//     color: "red",
//     margin: "30px 0",
//     display: "block",
//   },
// });
////////////////////////////////////////////////
//  <label className={s.lableContact}>
//   Name
//   <input
//     className={s.inputContact}
//     type="text"
//     name="name"
//     value={name}
//     onChange={handleChange}
//     required
//   />
// </label>
// <label className={s.lableContact}>
//   Email
//   <input
//     className={s.inputContact}
//     type="email"
//     name="email"
//     value={email}
//     onChange={handleChange}
//     required
//   />
// </label>
// <label className={s.lableContact}>
//   Password
//   <input
//     className={s.inputContact}
//     type="password"
//     name="password"
//     value={password}
//     onChange={handleChange}
//     required
//   />
// </label>
// {/* <InputLabel
//   variant="standard"
//   children={<Input type="password" />}
//   password
// ></InputLabel>

// <button className={s.button} type="submit">
//   Register
// </button>;
