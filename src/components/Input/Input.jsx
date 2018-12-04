import React from 'react';
import cx from 'classnames';

import './Input.scss';

export default function Input({ className, value, checked, onChange, disabled, ...rest }) {
  return (
    <input
      className={cx('Input', className, { 'Input--completed': checked })}
      type="text"
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...rest}
    />
  );
}
