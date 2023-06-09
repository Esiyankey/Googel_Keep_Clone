import React, { useState } from "react";
import { MdOutlineArchive } from "react-icons/md";
import "../styles/archives.scss";

export const Archive = () => {
  const [archived, setArchived] = useState([]);
  useEffect(() => {
    const fetchArchivedNotes = async () => {
      const notesRef = collection(db, "noteTodos");

      const ArchivedNotesQuery = query(notesRef, where("archived", "==", true));

      // Get the deleted notes
      const querySnapshot = await getDocs(ArchivedNotesQuery);

      const archivedNotes = [];
      querySnapshot.forEach((doc) => {
        const note = doc.data();
        note.id = doc.id;
        archivedNotes.push(note);
        setArchived(archiveNotes);
      });
    };
    fetchArchivedNotes();
  }, []);

  return (
    <>
      <div className="archiveNotes">
        {archived.map((item) => {
          return (
            <div className="archived-notes">
              <div className="">
                <div className="title">{item.Title}</div>
              </div>
              <div className="text">{item.Text}</div>
            </div>
          );
        })}
      </div>
      <div className="archive">
        <div className="archive-background">
          <MdOutlineArchive className="archive-icon" />
          <h3 className="archive-text">Your archives show here</h3>
        </div>
      </div>
    </>
  );
};
