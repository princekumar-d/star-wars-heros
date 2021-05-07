import React, { FunctionComponent, ReactNode } from 'react';
import style from './style.module.css';

type ButtonProps = {
  children?: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: any;
  disabled?: boolean;
};

export const Button: FunctionComponent<ButtonProps> = ({
  children = 'Button',
  type = 'button',
  onClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      data-testid="button"
      className={style.button}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
