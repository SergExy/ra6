/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import moment, { Moment } from 'moment-timezone';
import { useEffect, useState } from 'react';
import Button from '../button/Button';
import MaterialIcon from '../materialIcon/MaterialIcon';

interface Props {
  i: number;
  name: string;
  timezone: number | undefined;
  onDelete: (i: number) => void;
}

const Watch = ({ i, name, timezone, onDelete }: Props) => {
  const [date, setDate] = useState<Moment>();

  if (!timezone) return;

  const tz = timezone < 0 ? `Etc/GMT+${timezone * -1}` : `Etc/GMT-${+timezone}`;

  const handleDate = () => {
    setDate(moment().tz(tz));
  }

  useEffect(() => {
    handleDate();

    const interId = setInterval(() => {
        handleDate()
        console.log(i);
      }, 400);
    
    return () => clearInterval(interId);
  }, [])
  return (
    <div className='watch'>
      <div className="watch__title">
        {name}
      </div>
      <div className="watch__time">
        {date && date.format('HH:mm:ss')}
      </div>
      <Button variant='icon' onClick={() => onDelete(i)}>
        <MaterialIcon icon='close' />
      </Button>
    </div>
  )
}

export default Watch