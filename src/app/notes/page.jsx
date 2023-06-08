import Note from "../components/Note";

const getNotes = async () => {
  try {
    const response = await fetch(
      "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30",
      { cache: "no-store" }
    );
    const items = await response.json();
    return items.items;
  } catch (error) {
    console.log(error);
  }
};

const NotesPage = async () => {
  const notes = await getNotes();

  return (
    <div>
      <h1>Notes</h1>
      {notes?.map((note) => {
        return <Note key={note.id} note={note} />;
      })}
    </div>
  );
};

export default NotesPage;
