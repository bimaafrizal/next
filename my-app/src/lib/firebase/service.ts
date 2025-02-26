import { getFirestore, getDocs, collection } from "firebase/firestore";
import app from './init';

const firestore = getFirestore(app);

export async function retrieveData(collectionName: string) {
    const snapshot = await getDocs(collection(firestore, collectionName));
     const data = snapshot.docs.map((doc) => {
       console.log("Doc Data:", doc.id, doc.data()); // Debugging log
       return { id: doc.id, ...doc.data() };
     });
    return data;
}