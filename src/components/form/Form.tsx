import { FormEvent, ReactNode } from 'react';

interface Props {
  className: string;
  onSubmit: (e:FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}

const Form = ({ className, onSubmit, children }: Props) => (
  <form className={className} onSubmit={(e) => onSubmit(e)} >
    {children}
  </form>
)

export default Form