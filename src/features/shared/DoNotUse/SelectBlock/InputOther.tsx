import React, { useState } from "react";
import { Box, FormControl } from "@mui/material";
import { Input } from "../../Input/Input";

export const InputOther = () => {

  return (
    <FormControl>
      <Input type="text" placeholder="Enter your platform here"/>
    </FormControl>
  );
};