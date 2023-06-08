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
    <div className="flex flex-col gap-10">
      <h1 className="text-3xl text-center mt-5">Notes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
      <div className="flex justify-center bg-slate-200 border-gray-200 p-10">
        <CreateNote />
      </div>
    </div>
  );
};

export default NotesPage;
