import { getAuth } from "firebase/auth";
import app from "./Firebase.ini";

const auth = getAuth(app)

export default auth;