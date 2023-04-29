import { ref, push } from "firebase/database";
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


crear_usuario("mauro", "nuevo2@gmail.com", 22, "mauropascual", "nada", "casa", "false", "Email")
