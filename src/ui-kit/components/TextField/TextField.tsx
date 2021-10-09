import React from 'react';

import classNames from 'classnames';

import Input, { InputProps } from 'UiKit/components/Input';

import styles from './TextField.module.css';

type TextFieldProps = InputProps & {
  label?: string;
  labelPosition?: 'top' | 'left';
};

const TextField: React.FC<TextFieldProps> = (props) => {
  const {
    className,
    id,
    isRequired = false,
    label,
    labelPosition = 'top',
    ...inputProps
  } = props;

  return (
    <div className={classNames(
      styles.textField,
      {
        [styles.textFieldLabelPositionTop]: labelPosition === 'top',
        [styles.textFieldLabelPositionLeft]: labelPosition === 'left',
      },
      className,
    )}
    >
      {label && (
        <label
          className={classNames(
            styles.textFieldLabel,
            {
              [styles.textFieldLabelRequired]: isRequired,
            },
          )}
          htmlFor={id}
        >
          {label}
        </label>
      )}

      <Input
        {...inputProps}
        id={id}
        isRequired={isRequired}
      />
    </div>
  );
};

export default TextField;
