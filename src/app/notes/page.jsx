import PocketBase from "pocketbase";
import Note from "../components/Note";
import CreateNote from "../components/CreateNote";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

const getNotes = async () => {
  const db = new PocketBase("http://127.0.0.1:8090/");
  const resultList = await db.collection("notes").getList();

  //   const response = await fetch(
  //     "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30",
  //     { cache: "no-store" }
  //   );
  //   const items = await response.json();

  return resultList?.items;
};

const NotesPage = async () => {
  const notes = await getNotes();

  return (
    <div>
      <h1>Notes</h1>
      {notes?.map((note) => {
        return <Note key={note.id} note={note} />;
      })}
      <CreateNote />
    </div>
  );
};

export default NotesPage;
