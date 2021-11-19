import s from "./ContactElement.module.css";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function ContactElement({ id, name, number, deleteContact }) {
  return (
    <p>
      <span>{name}:</span>
      <span className={s.number}>{number}</span>
      {/* <button
        className={s.button}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button> */}

      <Button
        onClick={() => deleteContact(id)}
        startIcon={<DeleteIcon />}
        type="button"
        // className={s.button}
        variant="contained"
        size="small"
        sx={{ bgcolor: "#009688" }}
      >
        Delete
      </Button>
    </p>
  );
}

ContactElement.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

PropTypes.checkPropTypes(ContactElement);

export default ContactElement;
