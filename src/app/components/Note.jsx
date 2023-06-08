import Link from "next/link";

const Note = ({ note }) => {
  const { id, title, content, created } = note;

  return (
    <Link
      className="flex flex-col gap-24 bg-amber-200 rounded-lg w-72 p-5"
      href={`/notes/${id}`}
    >
      <h2 className="text-2xl">{title}</h2>
      <h5 className="text-xl">{content}</h5>
      <p>{created}</p>
    </Link>
  );
};

export default Note;
