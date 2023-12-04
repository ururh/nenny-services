import React, { FC } from 'react'
import { Button } from './ButtonAuthStyled';

interface PropsButtonAuth{
    buttonText: string;
}

const ButtonAuth: FC<PropsButtonAuth> = ({ buttonText }) => {
  return <Button type='submit'>{buttonText}</Button>;
}

export default ButtonAuth