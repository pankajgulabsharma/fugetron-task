import { TextField as TextFieldBase } from "@material-ui/core";
import React from "react";

const TextField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  variant,
  size,
  isFullWidth,
  multiline,
  rows,
  required = false,
  type,
  disabled,
  error,
}) => {
  // console.log(error);
  return (
    <TextFieldBase
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      variant={variant}
      required={required}
      type={type}
      size={size}
      fullWidth={isFullWidth}
      multiline={multiline || false}
      rows={rows || undefined}
      disabled={false || disabled}
      error={false || Boolean(error)}
      helperText={undefined || error}
    />
  );
};

export default TextField;
