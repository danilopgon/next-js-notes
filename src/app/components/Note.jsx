import Link from "next/link";

const Note = ({ note }) => {
  const { id, title, content, created } = note;

  return (
    <Link href={`/notes/${id}`}>
      <h2>{title}</h2>
      <h5>{content}</h5>
      <p>{created}</p>
    </Link>
  );
};

export default Note;
