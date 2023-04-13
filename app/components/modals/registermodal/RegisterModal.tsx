"use client";

import axios from "axios";

/* hooks */
import React, { useCallback, useState } from "react";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

/* components */
import { FcGoogle } from "react-icons/fc";
import Heading from "../../heading/Heading";
import Input from "../../inputs/input/Input";
import Modal from "../modal/Modal";
import Button from "../../button/Button";

/* styles */
import styles from "./styles";

const RegisterModal = () => {
  const { isOpen, onClose } = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);
  const {
    formState,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/register", data)
      .then(() => {
        onClose();
      })
      .catch((err) => {
        toast.error("Failed to sign up");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className={styles.modalBody}>
      <Heading
        title="Welcome to Airbnb clone"
        subtitle="Create an account"
        center
      />
      <Input
        id="email"
        type="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      {formState.errors.email?.message && (
        <span className={styles.errorMsg}>
          Please input valid email address
        </span>
      )}
      <Input
        id="name"
        type="text"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      {formState.errors.name && (
        <span className={styles.errorMsg}>
          This field is required
        </span>
      )}
      <Input
        id="password"
        type="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      {formState.errors.password && (
        <span className={styles.errorMsg}>
          This field is required
        </span>
      )}
    </div>
  );

  const footerContent = (
    <div className={styles.modalFooter}>
      <hr />
      <Button
        outline
        label="Continue with google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <div className={styles.modalFooterTextContainer}>
        <p onClick={onClose}>
          Already have an account?{" "}
          <a className={styles.modalFooterLink}>login</a>
        </p>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
