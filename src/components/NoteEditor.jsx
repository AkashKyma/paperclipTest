import React, { useState } from 'react';
import './NoteEditor.css';

function NoteEditor() {
  const [note, setNote] = useState('');

  return (
    <div className="note-editor">
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your note here..."
      />
    </div>
  );
}

export default NoteEditor;