import { ChangeEvent, FormEvent, useState } from 'react'
import Form from '../../components/form/Form'
import Input from '../../components/input/Input'
import Watch from '../../components/watch/Watch'
import Button from '../../components/button/Button';

import './watchesRoute.scss'

interface Form {
  watchName: string;
  watchZone: number | undefined;
}

const WatchesRoute = () => {
  const [watches, setWatches] = useState<Form[]>([]);
  const [form, setForm] = useState<Form>({
    watchName: '',
    watchZone: undefined
  });

  const handleWatcheZone = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (+value > 14 || +value < -12) return;

    setForm({
      ...form,
      [name]: value
    });
  }

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  }

  const handleWatches = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.watchName || !form.watchZone) return;

    const currWatches = [...watches];
    currWatches.push(form);

    const target = e.target as HTMLFormElement;
    target.reset();
    setForm({
      watchName: '',
      watchZone: undefined
    });
    setWatches(currWatches);
  }

  const deleteWatches = (i: number) => {
    const watchesClone = [...watches];
    watchesClone.splice(i, 1);
    setWatches(watchesClone);
  }

  return (
    <>
      <Form className='watches__form' onSubmit={handleWatches}>
        <Input name='watchName' value={form.watchName} onChange={handleInputValue} label='Название' />
        <Input name='watchZone' type='number' value={form.watchZone} onChange={handleWatcheZone} label='Временная зона' placeholder='Введите от -12 до 14' />
        <Button type='submit' disabled={!form.watchName || !form.watchZone}>submit</Button>
      </Form>
      {watches && (
        <div className="watches">
        {watches.map((item, i) => (
          <Watch key={i} i={i} name={item.watchName} timezone={item.watchZone} onDelete={deleteWatches} />
          ))}
        </div>)}
    </>
  )
}

export default WatchesRoute