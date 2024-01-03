import axios from 'axios';

export const requestImagesByQuery = async (query, page) => {
    const { data } = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=40663790-7e95e5f30e8cc12ce8787ce9f&image_type=photo&orientation=horizontal&per_page=12`
    );
    return data;
}