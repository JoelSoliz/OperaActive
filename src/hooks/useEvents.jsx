import { getEvents } from "@/data/models/events";
import { create } from "zustand";

const useEvents = create((set) => ({
  loading: false,
  events: [],
  selectedEvent: undefined,
  loadEvents: async () => {
    set({ loading: true });
    const events = await getEvents();
    set({ events: events || [] });
    set({ loading: false });
  },
  selectEvent: (event) => set({ selectedEvent: event }),
}));

export default useEvents;
