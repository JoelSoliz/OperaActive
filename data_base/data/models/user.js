import { ref, push, get } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { database, app } from "../connect_db.js";

const userRef = ref(database, "user");
const auth = getAuth(app);


function crear_usuario(nombre, email, edad, contraseña, habilidad, ubicación, disponible, notificacion) {
    return createUserWithEmailAndPassword(auth, email, contraseña)
        .then((userCredential) => {
            const user = userCredential.user;
            const userData = {
                name: nombre,
                email: email,
                habilidad: habilidad,
                hora_disponible: disponible,
                notificacion: notificacion,
                ubicación: ubicación,
                age: edad
            };

            push(userRef, userData);
            return userData;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`Error al crear usuario: ${errorMessage}`);
            return null;
        });
}

async function obtenerUsuario(usuarioId) {
    const usuarioRef = ref(database, `user/${usuarioId}`);
    const snapshot = await get(usuarioRef);

    if (snapshot.exists()) {
        const usuarioData = snapshot.val();
        return usuarioData;
    } else {
        throw new Error("No se encontró el usuario");
    }
}

async function obtenerUsuarios() {
    const usuariosRef = ref(database, "user");
    const snapshot = await get(usuariosRef);
  
    if (snapshot.exists()) {
      const usuariosData = snapshot.val();
      return usuariosData;
    } else {
      throw new Error("No se encontraron usuarios");
    }
  }
  

// async function main() {
//     const usuarios = await obtenerUsuarios();
//     console.log(usuarios);
//   }
// main();


crear_usuario("mauro", "nuevo3@gmail.com", 22, "mauropascual", "nada", "casa", "false", "Email")
