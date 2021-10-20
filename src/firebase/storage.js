import { storage } from "./config";
import { PRODUCTS } from "./const/storage";

export const uploadToStorage =(file) =>{
const fileRef = storage.ref(`${PRODUCTS}/${file.name}`);
return fileRef.put(file).then(res => res.ref.getDownloadURL());
}