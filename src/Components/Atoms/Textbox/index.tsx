import React, { FunctionComponent, forwardRef, SyntheticEvent } from 'react';
import style from './style.module.css';

type InputProps = {
  id: string;
  name: string;
  placeholder?: string;
  isValid?: boolean;
  validationMessage?: string;
  onChange?: any;
};

export const TextBox: FunctionComponent<InputProps> = forwardRef<
  HTMLInputElement,
  InputProps
>(
  (
    {
      id,
      name,
      placeholder = '',
      isValid = true,
      validationMessage = '',
      onChange,
    }: InputProps,
    ref
  ) => {
    return (
      <div
        className={`${style.input} ${isValid ? null : style.error}`}
        data-testid="textInputWrapper"
      >
        <div className="inputWrapper">
          <input
            ref={ref}
            type="text"
            placeholder={placeholder}
            id={id}
            name={name}
            onChange={onChange}
            data-testid="textInput"
          />
          {!isValid ? (
            <span className="errorIcon">
              <svg preserveAspectRatio="" viewBox="0 0 1024 1024">
                <path d="M512 1024c-282.453 0-512-229.547-512-512s229.547-512 512-512 512 229.547 512 512-229.547 512-512 512zM453.973 606.72c0 5.973 0.853 10.24 1.707 12.8 1.707 3.413 3.413 5.973 5.973 7.68 2.56 2.56 7.68 4.267 14.507 5.973s16.213 2.56 28.16 2.56c11.947 0 22.187-0.853 29.013-2.56s11.947-4.267 14.507-6.827c2.56-2.56 4.267-5.12 5.12-7.68s1.707-6.827 1.707-12.8v-368.64c0-5.973-0.853-10.24-1.707-12.8s-3.413-5.12-5.973-7.68c-2.56-2.56-7.68-4.267-14.507-5.12-6.827-1.707-16.213-1.707-29.013-1.707-11.947 0-21.333 0.853-28.16 1.707-6.827 1.707-11.947 3.413-14.507 5.973s-5.12 5.12-5.973 7.68c-1.707 3.413-1.707 7.68-1.707 13.653v367.787zM438.613 751.787c0 8.533 1.707 17.067 5.12 24.747s8.533 14.507 14.507 19.627c5.973 5.973 12.8 10.24 21.333 13.653 7.68 3.413 16.213 5.12 24.747 5.12s17.067-1.707 24.747-5.12c7.68-3.413 14.507-7.68 20.48-13.653s11.093-11.947 14.507-19.627c3.413-7.68 5.12-16.213 5.12-24.747s-1.707-17.067-5.973-24.747c-3.413-7.68-8.533-14.507-14.507-20.48s-13.653-10.24-21.333-13.653c-6.827-2.56-15.36-4.267-23.893-4.267s-17.067 1.707-24.747 5.12c-7.68 3.413-14.507 7.68-20.48 13.653s-10.24 12.8-13.653 20.48c-4.267 7.68-5.973 16.213-5.973 23.893z"></path>
              </svg>
            </span>
          ) : null}
        </div>
        {!isValid && validationMessage && (
          <span
            data-testid="textInputErrorMessage"
            className={style.validationMessage}
          >
            {validationMessage}
          </span>
        )}
      </div>
    );
  }
);

TextBox.displayName = 'TextBox';
