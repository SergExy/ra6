import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import Button from '../../components/button/Button'
import MaterialIcon from '../../components/materialIcon/MaterialIcon'
import Notes from '../../components/notes/Notes'
import NotesNew from '../../components/notesNew/NotesNew'
import './crudRoute.scss'

interface Note {
  id: number;
  content: string;
}

const CrudRoute = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [content, setContent] = useState<string>('');

  const handleValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setContent(value);
  }

  const getNotes = async () => {
    const res = fetch('http://localhost:7070/notes');
    const data = (await res).json();
    setNotes(await data);
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!content) return;

    const data = {
      id: 0,
      content
    };

    fetch('http://localhost:7070/notes', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        getNotes();
        setContent('');
      });
  }

  const deleteNote = (id: number) => {
    fetch(`http://localhost:7070/notes/${id}`, {
      method: 'DELETE',
    }).then(() => getNotes())
  }

  const updateNotes = () => {
    getNotes();
  }

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="crud">
      <header>
        <h1>Notes</h1>
        <Button variant='icon' onClick={updateNotes}>
          <MaterialIcon icon='autorenew' />
        </Button>
      </header>
      <section>
        {notes.length ? (
          <Notes
            notes={notes}
            onDelete={deleteNote}
          />
        ) : (<div>Loading...</div>)}
        <NotesNew 
          content={content}
          onChange={handleValue}
          onSubmit={onSubmit}
        />
      </section>
    </div>
  )
}

export default CrudRoute