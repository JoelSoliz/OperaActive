import EventCard from "@/components/EventCard";
import { useEffect } from "react";
import useEvents from "@/hooks/useEvents";

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
      </div>
    </div>
  );
};

export default Events;
