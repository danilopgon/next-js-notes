"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  const createNote = async () => {
    await fetch("http://127.0.0.1:8090/api/collections/notes/records/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    setContent("");
    setTitle("");

    router.refresh();
  };

  return (
    <form
      className="bg-white flex flex-col place-items-center p-5 lg:w-1/3 rounded-lg gap-10"
      onSubmit={createNote}
    >
      <h3 className="text-2xl">Create a new note</h3>
      <input
        className="p-5 bg-amber-100 w-72 rounded-md"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="p-5 bg-amber-100 w-72 rounded-md"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        className="p-5 bg-amber-300 rounded-lg hover:translate-x-1 hover:translate-y-1 hover:border-1 hover:bg-amber-100"
        type="submit"
      >
        Create note
      </button>
    </form>
  );
};

export default CreateNote;
