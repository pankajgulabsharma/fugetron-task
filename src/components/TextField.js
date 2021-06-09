import { TextField as TextFieldBase } from "@material-ui/core";
import React from "react";

const TextField = ({
  label,
  name,
  value,
  placeholder,
  variant,
  size,
  isFullWidth,
  multiline,
  rows,
  required = false,
  type,
}) => {
  return (
    <TextFieldBase
      label={label}
      name={name}
      value={value}
      placeholder={placeholder}
      variant={variant}
      required={required}
      type={type}
      size={size}
      fullWidth={isFullWidth}
      multiline={multiline || false}
      rows={rows || undefined}
    />
  );
};

export default TextField;
