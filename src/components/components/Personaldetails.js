import { Elderly, PhotoCamera } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import "../styles/form.css";
const Personaldetails = () => {
  const [text, settext] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    stream: "",
    rollno: "",
    division: "",
  });
  const handlechange = (e) => {
    e.preventDefault();
    settext({ ...text, [e.target.name]: e.target.value });
  };
  const submitme = () => {
    console.log(text);
  };
  return (
    <>
      <div>
        <h1>Personal Details</h1>
      </div>
      <div className="firstrow">
        <TextField
          required
          label="First Name"
          autoComplete="given-name"
          name="firstname"
          id="firstname"
          value={text.firstname}
          onChange={handlechange}
        />
      </div>
      <div className="firstrow">
        <TextField
          required
          label="Middle Name"
          autoComplete="given-name"
          name="middlename"
          id="middlename"
          value={text.middlename}
          onChange={handlechange}
        />
      </div>
      <div className="firstrow">
        <TextField
          required
          label="Last Name"
          autoComplete="given-name"
          name="lastname"
          id="lastname"
          value={text.lastname}
          onChange={handlechange}
        />
      </div>

      <div className="secondrow">
        <TextField
          required
          label="Roll No"
          autoComplete="given-name"
          name="rollno"
          id="rollno"
          value={text.rollno}
          onChange={handlechange}
        />
      </div>
      <div className="secondrow">
        <FormControl fullWidth>
          <InputLabel id="labelstream">stream</InputLabel>
          <Select
            labelId="labelstream"
            id="stream"
            value={text.stream}
            label="stream"
            name="stream"
            onChange={handlechange}
            sx={{ width: 222 }}
          >
            <MenuItem value="Computer Engineering">
              Computer Engineering
            </MenuItem>
            <MenuItem value="Information Technology">
              Information Technology
            </MenuItem>
            <MenuItem value="Electrical Engineering">
              Electrical Engineering
            </MenuItem>
            <MenuItem value="Electronic and telecommunication Engineering">
              Electronic and telecommunication Engineering
            </MenuItem>
            <MenuItem value="Mechanical Engineering">
              Mechanical Engineering
            </MenuItem>
            <MenuItem value="Biomed Engineering">Biomed Engineering</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="secondrow">
        <FormControl>
          <InputLabel id="labeldivision">division</InputLabel>
          <Select
            labelId="labeldivision"
            id="division"
            value={text.division}
            label="division"
            name="division"
            onChange={handlechange}
            sx={{ width: 222 }}
          >
            <MenuItem value="A">A</MenuItem>
            <MenuItem value="B">B</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="resume">
        <h3>Upload resume*</h3>
      </div>
      <div className="resume">
        <Button variant="contained" component="label">
          Upload File
          <input type="file" hidden />
        </Button>
      </div>

      {/* <Button variant="contained" onClick={submitme}>
        Submit
      </Button> */}
    </>
  );
};

export default Personaldetails;
