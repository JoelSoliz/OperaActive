import { login } from "./auth.js";
import { ref, push, get, child, update } from "firebase/database";
import { database, auth } from "../connect_db.js";

const userRef = ref(database, "evento");

const email = "mauroriverasss@gmail.com";
const password = "mauropascual";

async function crear_evento(nombre, descripcion, fecha_hora, duracion, ubicacion, categoria, 
    organizador, contacto, benificio, cupo_disponible, imagen, estado, inscripcion=[]) {
    const currentUser = auth.currentUser;
    if (currentUser) {
        const userData = {
            nombre: nombre,
            descripcion: descripcion,
            fecha_hora: fecha_hora,
            duracion: duracion,
            ubicacion: ubicacion,
            categoria: categoria,
            organizador: organizador,
            contacto: contacto,
            benificio: benificio,
            cupo_disponible: cupo_disponible,
            imagen: imagen,
            estado: estado,
            inscripcion: inscripcion,
            creador: currentUser.uid
        };

        const eventoRef = push(userRef, userData);
        return eventoRef;
    } else {
        console.log("Debe iniciar sesión para crear un evento");
    }
}


async function obtenerEvento(eventoId) {
    const eventoRef = ref(database, `evento/${eventoId}`);
    const snapshot = await get(eventoRef);

    if (snapshot.exists()) {
        const eventoData = snapshot.val();
        return eventoData;
    } else {
        throw new Error("No se encontró el evento");
    }
}


async function obtenerEventos() {
    const eventosRef = ref(database, "evento");
    const snapshot = await get(eventosRef);
    
    if (snapshot.exists()) {
      const eventosData = snapshot.val();
      const eventos = Object.values(eventosData);
      return eventos;
    } else {
      throw new Error("No se encontraron eventos");
    }
  }


async function inscribirse(eventoId) {
  const currentUser = auth.currentUser;
  if (currentUser) {
    const eventoRef = ref(database, `evento/${eventoId}`);
    const inscripcionesRef = child(eventoRef, 'inscripcion');
  
    const userData = {
      id: currentUser.uid,
      nombre: currentUser.displayName,
      email: currentUser.email
    };
  
    await update(inscripcionesRef, {
      [currentUser.uid]: userData
    });
  
    console.log(`El usuario ${currentUser.displayName} se ha inscrito al evento.`);
  } else {
    console.log("Debe iniciar sesión para inscribirse en un evento");
  }
}
  
async function probarInscripcion(eventoId) {
  try {
    const currentUser = await login("nuevo4@gmail.com", "mauropascual");
    if (currentUser) {
      await inscribirse(eventoId);
      console.log(`El usuario ${currentUser.nombre} se ha inscrito al evento ${eventoId}.`);
    } else {
      console.log("Debe iniciar sesión para inscribirse en un evento");
    }
  } catch (error) {
    console.error(error);
  }
}


probarInscripcion("-NUDJ-xKA2_eLeREgiOP");


// async function main() {
//     const evento = await obtenerEventos();
//     console.log(evento);
//   }
  
//   main();
  


// async function agregarEvento() {
//     try {
//         const currentUser = await login(email, password);
//         if (currentUser) {
//             console.log(`Usuario autenticado: ${currentUser.email}`);
//             const nuevoEventoRef = await crear_evento("Mauro1", "descripcion", "Fecha hora", "duracion",
//              "ubicacion", "categoria", "organizador", "contacto", "costo", "cupo_disponible", "imagen", "estado");
//             console.log(nuevoEventoRef);
//         } else {
//             console.log("Debe iniciar sesión para crear un evento");
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }

// agregarEvento();
