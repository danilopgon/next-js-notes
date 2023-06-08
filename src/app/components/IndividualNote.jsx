const IndividualNote = ({ note }) => {
  const { title, content, created } = note;

  return (
    <div className="flex flex-col gap-24 bg-amber-200 rounded-lg w-5/6 md:w-4/5 lg:w-2/5 p-5">
      <h1 className="text-2xl">{title}</h1>
      <h5 className="text-xl">{content}</h5>
      <p>{created}</p>
    </div>
  );
};

export default IndividualNote;
