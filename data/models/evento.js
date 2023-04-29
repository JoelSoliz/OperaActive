import { login } from "./auth.js";
import { ref, push } from "firebase/database";
import { database, auth } from "../connect_db.js";

const userRef = ref(database, "evento");

const email = "mauroriverasss@gmail.com";
const password = "mauropascual";

async function crear_evento(nombre, descripcion, fecha_hora, duracion, ubicacion, categoria, 
    organizador, contacto, benificio, cupo_disponible, imagen, estado) {
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
            creador: currentUser.uid
        };

        const eventoRef = push(userRef, userData);
        return eventoRef;
    } else {
        console.log("Debe iniciar sesión para crear un evento");
    }
}

async function agregarEvento() {
    try {
        const currentUser = await login(email, password);
        if (currentUser) {
            console.log(`Usuario autenticado: ${currentUser.email}`);
            const nuevoEventoRef = await crear_evento("Mauro", "descripcion", "Fecha hora", "duracion",
             "ubicacion", "categoria", "organizador", "contacto", "costo", "cupo_disponible", "imagen", "estado");
            console.log(nuevoEventoRef);
        } else {
            console.log("Debe iniciar sesión para crear un evento");
        }
    } catch (error) {
        console.error(error);
    }
}

agregarEvento();
