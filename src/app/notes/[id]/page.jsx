import IndividualNote from "@/app/components/IndividualNote";

const getNote = async (noteID) => {
  const response = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteID}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await response.json();
  return data;
};

const NoteView = async ({ params }) => {
  const note = await getNote(params.id);
  console.log(note);

  return (
    <div>
      <h1>notes/{note.id}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <IndividualNote note={note} />
      </div>
    </div>
  );
};

export default NoteView;
