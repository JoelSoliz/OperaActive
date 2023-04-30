import EventCard from "@/components/EventCard";
import { useEffect } from "react";
import useEvents from "@/hooks/useEvents";

const events = [
  {
    id: "as1",
    name: "Hola",
    image: "/assets/logistic.png",
    description: "Una descripción super larga",
  },
  {
    id: "as2",
    name: "Hola2",
    image: "/assets/logistic.png",
    description: "Una descripción super larga",
  },
  {
    id: "as3",
    name: "Hola3",
    image: "/assets/logistic.png",
    description: "Una descripción super larga",
  },
  {
    id: "as4",
    name: "Hola4",
    image: "/assets/logistic.png",
    description: "Una descripción super larga",
  },
];

const Events = () => {
  const { events: ee, loading, loadEvents } = useEvents((state) => state);
  console.log(ee);
  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <div id="eventos" className="py-8 px-20 flex flex-col gap-8">
      <h2 className="text-3xl font-serif font-bold">Eventos</h2>
      {loading && <span>Cargando eventos...</span>}
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {events.map((event) => (
          <EventCard value={event} key={event.id} />
        ))}
      </div>
    </div>
  );
};

export default Events;
