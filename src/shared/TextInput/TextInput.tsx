import React, { ChangeEvent } from 'react'
import { Input } from './TextInputStyled';

interface PropsTextInput{
    type: string;
    name: string;
    placeholder: string;
    value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: any;
}

const TextInput:React.FC<PropsTextInput> = ({ type, name, placeholder, value, onChange, onBlur }) => {
  return (
    <Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
  )
}

export default TextInput