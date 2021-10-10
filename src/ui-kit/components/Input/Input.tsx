import React from 'react';

import classNames from 'classnames';

import Icon from 'UiKit/components/Icon';

import styles from './Input.module.css';

export type InputProps = {
  className?: string;
  id?: string;
  isClearable?: boolean;
  isDisabled?: boolean;
  isReadonly?: boolean;
  isRequired?: boolean;
  name?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  onClear?: (e: React.SyntheticEvent) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  style?: React.CSSProperties;
  textAlign?: 'left' | 'right';
  type?: 'email' | 'number' | 'password' | 'text' | 'hidden' | 'search';
  value?: string;
}

const Input: React.FC<InputProps> = (props) => {
  const {
    className,
    id,
    isClearable = true,
    isDisabled = false,
    isReadonly = false,
    isRequired = false,
    name,
    onBlur = (e) => e,
    onChange = (e) => e,
    onClear = (e) => e,
    onFocus = (e) => e,
    placeholder = 'Введите значение',
    style = {},
    textAlign = 'left',
    type = 'text',
    value = '',
  } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(e, e.target.value);
  };

  const textAlignClassName = `input__control_text-align_${textAlign}`;

  return (
    <div className={classNames(styles.input, className)}>
      {(isClearable && !isDisabled && value) && (
        <button
          className={classNames(styles.inputClear)}
          onClick={onClear}
          type="button"
        >
          <Icon name="icon-clear" />
        </button>
      )}

      <input
        className={classNames(
          styles.inputControl,
          styles[textAlignClassName],
          {
            [styles.inputControlClearable]: isClearable,
          },
        )}
        disabled={isDisabled}
        id={id}
        name={name}
        onBlur={onBlur}
        onChange={handleChange}
        onFocus={onFocus}
        placeholder={placeholder}
        readOnly={isReadonly}
        required={isRequired}
        style={style}
        type={type}
        value={value}
      />
    </div>
  );
};

export default Input;
