export default ({ text, id }) => {
  return (
    <h2 id={id} className="font-semibold text-2xl text-title mb-4">
      {text}
    </h2>
  );
};
