import { toast } from "sonner";
import { app } from "../connect_db.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

async function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      toast.success(`Usuario autenticado: ${user.email}`);
      return user;
    })
    .catch((error) => {
      const errorMessage = error.message;
      toast.error(`Error al autenticar usuario: ${errorMessage}`);
      return null;
    });
}

export { login, auth };
