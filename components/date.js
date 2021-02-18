import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  const date = parseISO(dateString);

  const dateFormat = "MMMM d, yyyy";

  return <p>{format(date, dateFormat)}</p>
}