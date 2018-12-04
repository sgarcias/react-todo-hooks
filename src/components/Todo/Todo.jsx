import React from 'react';
import CheckBox from '../CheckBox';
import Input from '../Input';

import './Todo.scss';
import Delete from '../Icons/Delete';

export default function Todo({ todo: { content, checked }, onComplete, onChange, onRemove }) {
  return (
    <div className="Todo">
      <CheckBox checked={checked} onClick={onComplete} />
      <Input value={content} checked={checked} onChange={onChange} disabled={checked} />
      <Delete width="30" height="30" className="Todo__delete__icon" onClick={onRemove} />
    </div>
  );
}
