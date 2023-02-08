import storage from '../config/firebase';
import { ref, listAll, getDownloadURL } from "firebase/storage";

export default async function getAll() {
    const imagesRef = ref(storage, 'images');
    const allImages = await listAll(imagesRef);

    const urls = [];
    for await (const item of allImages.items) {
        var url = await getDownloadURL(item);
        urls.push(url);
    }
    
    return urls;
}