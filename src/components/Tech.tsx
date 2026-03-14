export default ({ text, icon }) => {
  return (
    <div className="border text-title min-w-max gap-2 flex-1 rounded-xl px-2 py-1 flex items-center">
      {icon && <img src={`/svgs/${icon}.svg`} alt={text} className="size-4" />}
      <span className="font-semibold">{text}</span>
    </div>
  );
};
