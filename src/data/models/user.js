import { ref, push, get } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { database, app } from "../connect_db.js";
import { toast } from "sonner";

const userRef = ref(database, "user");
const auth = getAuth(app);

async function registerUser({
  name,
  email,
  birthday,
  password,
  abilities,
  residence,
  availability,
}) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const userData = {
        name,
        email,
        birthday,
        abilities,
        availability,
        residence,
      };

      push(userRef, userData);
      toast.success(`!Bienvenido ${name}!`);
      return userData;
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.error(errorMessage);
      toast.error(
        `Hubo un problema al registrarte, por favor intenta de nuevo.`
      );
      return null;
    });
}

async function getUser(usuarioId) {
  const userRef = ref(database, `user/${usuarioId}`);
  const snapshot = await get(userRef);

  if (snapshot.exists()) {
    const userData = snapshot.val();
    return userData;
  } else {
    toast.error("No se encontró el usuario.");
  }
}

async function getUsers() {
  const usersRef = ref(database, "user");
  const snapshot = await get(usersRef);

  if (snapshot.exists()) {
    const usersData = snapshot.val();
    return usersData;
  } else {
    toast.message("No se encontraron usuarios");
  }
}

export { getUser, getUsers, registerUser };
