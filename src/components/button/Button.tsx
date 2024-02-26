import clsx from "clsx";
import { MouseEvent, ReactNode } from "react";

interface Props {
  variant?: 'text' | 'icon';
  type?: HTMLButtonElement['type'];
  disabled?: boolean;
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({variant = 'text', type, disabled = false, children, onClick}: Props) => {
  return (
    <button type={type} disabled={disabled} onClick={onClick ? (e) => onClick(e) : undefined} className={clsx({'btn': variant === 'text'}, {'iconBtn': variant === 'icon'})}>
      {children}
    </button>
  )
}

export default Button