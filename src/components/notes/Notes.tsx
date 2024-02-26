import NoteItem from "../noteItem/NoteItem";

interface Note {
  id: number;
  content: string;
}

interface Props {
  notes: Note[];
  onDelete: (id:number) => void;
}

const Notes = ({ notes, onDelete }: Props) => (
  <div className="notes">
    {notes.map((note) => (
      <NoteItem id={note.id} content={note.content} onDelete={onDelete} key={note.id} />
    ))}
  </div>
)

export default Notes