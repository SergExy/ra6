import { ChangeEvent, FormEvent } from "react"
import Form from "../form/Form";
import Textarea from "../textarea/Textarea";
import Button from "../button/Button";
import MaterialIcon from "../materialIcon/MaterialIcon";

interface Props {
  content: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const NotesNew = ({ content, onChange, onSubmit }: Props) => {
  return (
    <div className="notes__new">
      <Form className={'notes__form'} onSubmit={onSubmit}>
        <Textarea name={'content'} value={content} onChange={onChange} placeholder="Введите текст заметки" />
        <Button variant="icon" type="submit">
          <MaterialIcon icon='send' />
        </Button>
      </Form>
    </div>
  )
}

export default NotesNew