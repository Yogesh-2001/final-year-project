import React, { useState } from "react";
import Educationaldetails from "./Educationaldetails";
import Personaldetails from "./Personaldetails";
const Form = () => {
  return (
    <>
      <div>
        <Personaldetails />
        <Educationaldetails />
      </div>
    </>
  );
};

export default Form;
