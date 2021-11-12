import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import s from "./RegisterForm.module.css";
import PropTypes from "prop-types";
// import actions from "../../redux/contacts/contacts-actions";
// import { getContacts } from "../../redux/contacts/contacts-selectors";
import { authOperations } from "../../redux/auth";

function RegisterForm() {
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={s.lableContact}>
        Name
        <input
          className={s.inputContact}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>

      <label className={s.lableContact}>
        Email
        <input
          className={s.inputContact}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
      </label>

      <label className={s.lableContact}>
        Password
        <input
          className={s.inputContact}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
      </label>

      <button className={s.button} type="submit">
        Register
      </button>
    </form>
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

////////////////////////////////////////////////
//  return (
//     <form onSubmit={handleSubmit}>
//       <label className={s.lableContact}>
//         Name
//         <input
//           className={s.inputContact}
//           type="text"
//           name="name"
//           value={name}
//           onChange={handleChange}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//           required
//         />
//       </label>

//       <label className={s.lableContact}>
//         Number
//         <input
//           className={s.inputContact}
//           type="tel"
//           name="number"
//           value={number}
//           onChange={handleChange}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//           required
//         />
//       </label>

//       <button className={s.button} type="submit">
//         Add contact
//       </button>
//     </form>
///////////////////////////////////////////

// Без toolkit

// import { useState } from "react";
// import { connect} from "react-redux";
// import s from "./ContactForm.module.css";
// import PropTypes from "prop-types";
// import actions from "../../redux/actions";

// function ContactForm({ addContact, contacts }) {
//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");

//   const handleChange = (e) => {

//     if (e.currentTarget.name === "name") {
//       setName(e.currentTarget.value);
//     }

//     if (e.currentTarget.name === "number") {
//       setNumber(e.currentTarget.value);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const isContactsIncludes = contacts.find(
//       (contact) => contact.name === name
//     );

//     if (isContactsIncludes) {
//       return alert(`${name} is alredy in contacts`);
//     } else {
//       addContact(name, number);
//       setName("");
//       setNumber("");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label className={s.lableContact}>
//         Name
//         <input
//           className={s.inputContact}
//           type="text"
//           name="name"
//           value={name}
//           onChange={handleChange}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//           required
//         />
//       </label>

//       <label className={s.lableContact}>
//         Number
//         <input
//           className={s.inputContact}
//           type="tel"
//           name="number"
//           value={number}
//           onChange={handleChange}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//           required
//         />
//       </label>

//       <button className={s.button} type="submit">
//         Add contact
//       </button>
//     </form>
//   );
// }

// const mapStateToProps = (state) => ({
//   contacts: state.contacts.items,
// });

// const mapDispatchToProps = (dispatch) => ({
//   addContact: (name, number) => dispatch(actions.addContact(name, number)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

// ContactForm.prototype = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.number.isRequired,
//     }).isRequired
//   ),
//   addContact: PropTypes.func.isRequired,
// };
