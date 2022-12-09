import firebaseConfig from "./FireBaseConfig";
import { initializeApp } from "firebase/app";

const Initialization = () => {
    initializeApp(firebaseConfig);
};

export default Initialization;