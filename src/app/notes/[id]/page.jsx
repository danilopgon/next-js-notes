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
    <div className="flex flex-col gap-10">
      <h1 className="text-3xl text-center mt-5">notes/{note.id}</h1>
      <div className="grid grid-cols-1 gap-4 place-items-center">
        <IndividualNote note={note} />
      </div>
    </div>
  );
};

export default NoteView;
