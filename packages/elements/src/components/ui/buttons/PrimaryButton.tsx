import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonElementProps } from "@stenajs-webui/core";
import cx from "classnames";
import * as React from "react";
import { InputSpinner } from "../spinner/InputSpinner";
import styles from "./Button.module.css";
import { CommonButtonProps } from "./ButtonCommon";
import { getButtonLabel } from "./util/ButtonLabelFactory";

export interface PrimaryButtonProps
  extends CommonButtonProps,
    ButtonElementProps {}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  className,
  size = "normal",
  loadingLabel,
  loading = false,
  success = false,
  successLabel,
  leftIcon,
  left,
  rightIcon,
  right,
  variant = "normal",
  disabled,
  onClick,
  innerRef,
  ...buttonProps
}) => {
  const buttonLabel = getButtonLabel(
    label,
    success,
    successLabel,
    loading,
    loadingLabel
  );

  const hasLabel = Boolean(
    (label && !success && !loading) ||
      (success && successLabel) ||
      (loading && loadingLabel)
  );

  return (
    <button
      ref={innerRef}
      onClick={disabled || success || loading ? undefined : onClick}
      className={cx(
        styles.button,
        styles[size],
        styles[variant],
        !hasLabel && styles.iconButton,
        className
      )}
      disabled={disabled}
      {...buttonProps}
    >
      {success ? (
        <FontAwesomeIcon icon={faCheck} className={styles.iconLeft} />
      ) : loading ? (
        <div className={styles.iconLeft}>
          <InputSpinner />
        </div>
      ) : left ? (
        left
      ) : leftIcon ? (
        <FontAwesomeIcon icon={leftIcon} className={styles.iconLeft} />
      ) : null}

      {buttonLabel && <span>{buttonLabel}</span>}

      {right ? (
        right
      ) : rightIcon ? (
        <FontAwesomeIcon icon={rightIcon} className={styles.iconRight} />
      ) : null}
    </button>
  );
};
