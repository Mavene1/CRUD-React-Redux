import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";

const AddUser = () => {
  const [state, setState] = useState({
    name: "",
    address: "",
    email: "",
    contact: "",
  });

  const [error, setError] = useState("");

  const { name, address, email, contact } = state;
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !email || !contact) {
      setError("Please enter all the information!");
    } else {
      dispatch(addUser(state));
      navigate("/");
      setError("");
    }
  };

  return (
    <div style={{ margin: "30px", marginTop: "150px" }}>
      <div>
        <Button onClick={() => navigate("/")}>
          <ArrowBackIcon />
        </Button>
      </div>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "45ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="filled-basic"
          label="Name"
          variant="filled"
          value={name}
          name="name"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="filled-basic"
          label="Address"
          variant="filled"
          name="address"
          value={address}
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="filled-basic"
          label="Email"
          variant="filled"
          value={email}
          name="email"
          type="email"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="filled-basic"
          label="Contact"
          variant="filled"
          value={contact}
          name="contact"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <Button
          variant="contained"
          type="submit"
          style={{
            margin: "30px",
            color: "white",
            backgroundColor: "blue",
            borderRadius: "10px",
          }}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default AddUser;
