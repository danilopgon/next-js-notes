const IndividualNote = ({ note }) => {
  const { title, content, created } = note;

  return (
    <div>
      <h1>{title}</h1>
      <h5>{content}</h5>
      <p>{created}</p>
    </div>
  );
};

export default IndividualNote;
