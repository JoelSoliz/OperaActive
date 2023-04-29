import { app } from "../connect_db.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(`Usuario autenticado: ${user.email}`);
            return user;  
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`Error al autenticar usuario: ${errorMessage}`);
            return null; 
        });
}


export{login, auth}
// login('mauroriverasss@gmail.com', 'mauropascual').then(resultado => {
//     console.log(resultado);
//   }).catch(error => {
//     console.log(error);
//   });

  
