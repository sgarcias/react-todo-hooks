import React from 'react';
import cx from 'classnames';

import './CheckBox.scss';

export default function CheckBox({ checked, onClick }) {
  return <div className={cx('CheckBox', { 'CheckBox--checked': checked })} onClick={onClick} />;
}
