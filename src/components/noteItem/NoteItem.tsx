import Button from "../button/Button";
import MaterialIcon from "../materialIcon/MaterialIcon";

interface Props {
  id: number;
  content: string;
  onDelete: (id: number) => void;
}

const NoteItem = ({ id, content, onDelete }: Props) => (
  <div className="notes__item">
    <div className="notes__text">
      {content}
    </div>
    <div className="notes__btn">
      <Button variant='icon' onClick={() => onDelete(id)}>
        <MaterialIcon icon='close' />
      </Button>
    </div>
  </div>
)

export default NoteItem