import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnchorProps, ButtonProps } from "@stenajs-webui/core";
import cx from "classnames";
import * as React from "react";
import { ReactNode } from "react";
import { InputSpinner } from "../spinner/InputSpinner";
import styles from "./PrimaryButton.module.css";

export type ButtonSize = "normal" | "small" | "large";
export type ButtonVariant = "normal" | "danger" | "success";

interface CommonPrimaryButtonProps {
  /** The text on the button. */
  label?: string;
  /** The variant to use. */
  variant?: ButtonVariant;
  /** The content to show when loading. */
  loadingLabel?: string;
  /** The size of the button, can be 'small', 'normal' or 'large' */
  size?: ButtonSize;
  /** Render loading spinner instead of button. */
  loading?: boolean;
  /** Render success check icon instead of button. */
  success?: boolean;
  /** The content to show on success. */
  successLabel?: string;
  /** FontAwesome icon to place to the left of the text. */
  leftIcon?: IconDefinition;
  /** React element to place to the left of the text. */
  left?: ReactNode;
  /** FontAwesome icon to place to the right of the text. */
  rightIcon?: IconDefinition;
  /** React element to place to the right of the text. */
  right?: ReactNode;
}

interface PrimaryButtonButtonProps
  extends CommonPrimaryButtonProps,
    ButtonProps {
  /** Disables the button. Changes to disabled color and clicks are disabled. */
  disabled?: boolean;
  as?: "button";
}

interface PrimaryButtonAnchorProps
  extends CommonPrimaryButtonProps,
    Omit<AnchorProps, "onClick"> {
  as: "a";
}

export type PrimaryButtonProps =
  | PrimaryButtonButtonProps
  | PrimaryButtonAnchorProps;

const getButtonLabel = (
  label: string | undefined,
  success: boolean,
  successLabel: string | undefined,
  loading: boolean,
  loadingLabel: string | undefined
): string | null => {
  if (success) {
    return successLabel || null;
  } else if (loading) {
    return loadingLabel || null;
  } else {
    return label || null;
  }
};

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

  if (buttonProps.as === "a") {
    const { as, innerRef, ...restProps } = buttonProps;

    return (
      <a
        ref={innerRef}
        className={cx(
          styles.button,
          styles[size],
          styles[variant],
          !hasLabel && styles.iconButton,
          className
        )}
        {...restProps}
      >
        {success ? (
          <FontAwesomeIcon icon={faCheck} className={styles.iconLeft} />
        ) : loading ? (
          <div className={styles.iconLeft}>
            <InputSpinner size={"100%"} />
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
      </a>
    );
  }

  const { as, innerRef, ...restProps } = buttonProps;

  return (
    <button
      ref={innerRef}
      onClick={
        buttonProps.disabled || success || loading
          ? undefined
          : buttonProps.onClick
      }
      className={cx(
        styles.button,
        styles[size],
        styles[variant],
        !hasLabel && styles.iconButton,
        className
      )}
      disabled={buttonProps.disabled}
      {...restProps}
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
