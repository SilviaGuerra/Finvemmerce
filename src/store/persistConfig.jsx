import storage from "redux-persist/lib/storage"; // Importa el almacenamiento que deseas utilizar

const persistConfig = {
  key: "root",
  storage, // Puedes usar storage local o sessionStorage
  whitelist: ["showProducts", "login", "cart"],
};

export default persistConfig;
