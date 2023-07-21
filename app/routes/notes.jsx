import { json, redirect } from '@remix-run/node';
import { Link } from '@remix-run/react';

import NewNote, { links as newNoteLinks } from '~/components/NewNote';
import NoteList, { links as noteListLinks } from '~/components/NoteList';
import { getStoredNotes, storeNotes } from '~/data/notes';
import myImage from '../../8810413.jpg';
export default function NotesPage() {
  return (
    <main>
      <NewNote />
     <button className='buto'> <Link to="/mylist" className='linkto'>Go to My List</Link> </button>{/* Added link to the new page */}
     <img className='image' src={myImage} alt="My Image" />
    </main>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);

  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updatedNotes = existingNotes.concat(noteData);
  await storeNotes(updatedNotes);
  return redirect('/notes');
}

export function links() {
  return [...newNoteLinks(),];
}

export function meta() {
  return {
    title: 'Notes',
  };
}
