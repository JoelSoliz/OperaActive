const EventCard = ({ value }) => {
  const description =
    value?.description.length > 100
      ? `${value.description.substring(0, 100)}...`
      : value.description;
  return (
    <div className="flex flex-col items-center font-serif border-solid border-[1px] border-black bg-slate-100 m-2 w-[220px] rounded-xl hover:scale-105 hover:cursor-pointer">
      <img
        src={value?.image}
        alt={value?.name}
        className="h-32 w-32 object-cover"
      />
      <div className="flex flex-col px-4 py-2 bg-slate-200 w-full rounded-b-xl">
        <span className="text-lg font-bold text-slate-900">{value?.name}</span>
        <span className="text-sm text-slate-600">{description}</span>
      </div>
    </div>
  );
};

export default EventCard;
