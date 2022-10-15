import { Elderly, PhotoCamera } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import "../styles/form.css";
const Educationaldetails = () => {
  const [edu, setedu] = useState({
    tenth: 0,
    afterten: "",
    aftertenpercent: 0,
    school: "",
    college: "",
  });

  const handlenewchange = (e) => {
    e.preventDefault();
    setedu({ ...edu, [e.target.name]: e.target.value });
  };

  const submitnewme = () => {
    console.log(edu);
  };
  return (
    <>
      <div className="cutme">
        <h1>Educational Details</h1>
      </div>
      <div className="edufirstrow">
        <TextField
          required
          label="School Name"
          autoComplete="given-name"
          name="school"
          id="school"
          value={edu.school}
          onChange={handlenewchange}
          sx={{ width: 400 }}
        />
      </div>
      <div className="edufirstrow">
        <TextField
          required
          type="number"
          label="tenth percentage"
          autoComplete="given-name"
          name="tenth"
          id="tenth"
          value={edu.tenth}
          onChange={handlenewchange}
        />
      </div>
      <div className="edusecondrow">
        <FormControl fullWidth>
          <InputLabel id="labelafterten">Past Qualification</InputLabel>
          <Select
            labelId="labelafterten"
            id="afterten"
            value={edu.afterten}
            label="afterten"
            name="afterten"
            onChange={handlenewchange}
          >
            <MenuItem value="XII">XII</MenuItem>
            <MenuItem value="Diploma">Diploma</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="eduthirdrow">
        <TextField
          required
          label="College Name"
          autoComplete="given-name"
          name="college"
          id="college"
          value={edu.college}
          onChange={handlenewchange}
          sx={{ width: 400 }}
        />
      </div>
      <div className="eduthirdrow">
        <TextField
          required
          type="number"
          label="aftertenpercent"
          autoComplete="given-name"
          name="aftertenpercent"
          id="aftertenpercent"
          value={edu.aftertenpercent}
          onChange={handlenewchange}
        />
      </div>
      <div>
        <Button variant="contained" onClick={submitnewme}>
          Submit
        </Button>
      </div>
    </>
  );
};

export default Educationaldetails;
