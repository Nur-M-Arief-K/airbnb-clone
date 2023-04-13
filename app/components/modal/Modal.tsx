"use client";

import React, { useState, useEffect, useCallback } from "react";

/* react component */
import { IoMdClose } from "react-icons/io";

/* components */
import Button from "../button/Button";

/* styles */
import styles from "./styles";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen = false,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className={styles.backdrop}>
        <div className={styles.wrapper}>
          <div className={styles.modal(showModal)}>
            <div className={styles.modalContent}>
              <div className={styles.header}>
                <button className={styles.button} onClick={handleClose}>
                  <IoMdClose />
                </button>
                <div className={styles.title}>{title}</div>
              </div>
              <div className={styles.body}>{body}</div>
              <div className={styles.footer}>
                <div className={styles.footerContent}>
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      outline
                      label={secondaryActionLabel}
                      disabled={disabled}
                      onClick={handleSecondaryAction}
                    />
                  )}
                  <Button
                    label={actionLabel!}
                    disabled={disabled}
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
