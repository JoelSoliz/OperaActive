import { login } from "./auth.js";
import { ref, push, get } from "firebase/database";
import { database, auth } from "../connect_db.js";
import { toast } from "sonner";

const userRef = ref(database, "evento");

async function createEvents(
  name,
  description,
  date_time,
  duration,
  location,
  category,
  organizer,
  contact,
  benefits,
  spaces_available,
  image,
  state
) {
  const currentUser = auth.currentUser;
  if (currentUser) {
    const eventData = {
      name,
      description,
      date_time,
      duration,
      location,
      category,
      organizer,
      contact,
      benefits,
      spaces_available,
      image,
      state,
      created_by: currentUser.uid,
    };

    const eventoRef = push(userRef, eventData);
    toast.success("Evento creado satisfactoriamente.");
    return eventoRef;
  } else {
    toast.error("Debe iniciar sesión para crear un evento.");
  }
}

async function getEvent(eventId) {
  const eventRef = ref(database, `evento/${eventId}`);
  const snapshot = await get(eventRef);

  if (snapshot.exists()) {
    const eventData = snapshot.val();
    return eventData;
  } else {
    toast.error("No se encontró el evento.");
  }
}

async function getEvents() {
  const eventsRef = ref(database, "evento");
  const snapshot = await get(eventsRef);

  if (snapshot.exists()) {
    const eventsData = snapshot.val();
    const events = Object.values(eventsData);
    return events;
  } else {
    toast.message("No se encontraron eventos.");
  }
}

export { createEvents, getEvent, getEvents };
