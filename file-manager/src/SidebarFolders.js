import React from 'react';

const SidebarFolders = ({ folders = [] }) => {
  return (
    <aside className="sidebar-folders">
      <h2>Folders</h2>
      <ul>
        {folders.map(folder => (
          <li key={folder.id}>{folder.name}</li>
        ))}
      </ul>
    </aside>
  );
};

export default SidebarFolders;