"use client";

import React from "react";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

/* styles */
import styles from "./styles";
import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  formatPrice,
  required,
  register,
  errors,
}) => {
  let isEmail = false;
  id == "email" ? (isEmail = true) : (isEmail = false);

  let registerInput: any;

  if (isEmail) {
    registerInput = register("email", {
      required: "Email is required",
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Please enter a valid email",
      },
    });
  } else {
    registerInput = register(id, { required });
  }

  return (
    <div className={styles.inputContainer}>
      {formatPrice && <BiDollar size={24} className={styles.currency} />}
      <input
        id={id}
        disabled={disabled}
        {...registerInput}
        placeholder=" "
        type={type}
        className={styles.input(formatPrice!, errors[id])}
      />
      <label className={styles.label(formatPrice!, errors[id])}>{label}</label>
    </div>
  );
};

export default Input;
