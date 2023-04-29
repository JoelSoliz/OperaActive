import { ref, push, get } from "firebase/database";
import { database, auth } from "../connect_db.js";

const userRef = ref(database, "inscripcion");