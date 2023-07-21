import { useLoaderData } from '@remix-run/react';
import NoteList from '~/components/NoteList';
import { getStoredNotes } from '~/data/notes';
import {links as noteListLinks} from '../components/NoteList';
import { Link } from '@remix-run/react';

export default function mylist() {
  const notes = useLoaderData();

  return (
    <main>
      <h1 className='last'>My List</h1>
      <button className='buto'> <Link to="/" className='linkto'>back home</Link> </button>{/* Added link to the new page */}
      <NoteList notes={notes} />
    </main>
  );
}

export async function loader() {
  const notes = await getStoredNotes();
  return notes;
}

export function meta() {
  return {
    title: 'My List',
  };
}
export function links() {
  return [...noteListLinks()];
} 