import EventCard from "@/components/EventCard";
import { useEffect } from "react";
import useEvents from "@/hooks/useEvents";
import Link from "next/link";

const Events = () => {
  const { events, loading, loadEvents } = useEvents((state) => state);

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <div id="eventos" className="py-8 px-20 flex flex-col gap-8">
      <h2 className="text-3xl font-serif font-bold">Eventos</h2>
      {loading && <span>Cargando eventos...</span>}
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {events.map((event, i) => (
          <EventCard value={event} key={i} />
        ))}
        <Link
          href="/"
          className="flex flex-col items-center justify-center font-serif border-solid border-[1px] border-black bg-slate-200 m-2 w-[220px] h-[280px] rounded-xl hover:scale-105 hover:cursor-pointer"
        >
          <img src="/assets/logistic.png" />
          <span className="text-xl font-bold text-slate-600">
            Ver más eventos...
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Events;
