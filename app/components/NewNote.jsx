import {
  Form,
  useActionData,
  useTransition as useNavigation,
} from '@remix-run/react';

import styles from './NewNote.css';

function NewNote() {
  const data = useActionData();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  return (
    <Form method="post" id="note-form" className={styles.form}>
      {data?.message && <p>{data.message}</p>}
      <p>
        <label htmlFor="title">Task's Title</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          className={styles.input}
          placeholder="title" // Add the defaultValue attribute
        />
      </p>
      <p>
        <label htmlFor="content">task</label>
        <textarea
          id="content"
          name="content"
          rows="5"
          required
          className={styles.textarea}
          placeholder="your task" // Add the defaultValue attribute
        />
      </p>
      <div className={styles.actions}>
        <button className={`goto-button ${styles.button}`} disabled={isSubmitting}>
          {isSubmitting ? 'Adding...' : 'Add Task'}
        </button>
      </div>
    </Form>
  );
}

export default NewNote;

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}
