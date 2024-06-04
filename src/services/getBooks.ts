import { IBook, IGoogleBooksResponse } from '../interfaces/books';
import axios, { AxiosResponse } from 'axios';

const API_KEY = "AIzaSyC_bcTrAR1nVpt-AxOoQ7LsK3cTjJDhxWA"
const API_URL = `https://www.googleapis.com/books/v1/volumes?q=bestsellers+brasil&orderBy=relevance&langRestrict=pt&key=${API_KEY}`

export const getBooks = async (): Promise<IBook[]> => {
    const response: AxiosResponse<IGoogleBooksResponse> = await axios.get(API_URL)
    // console.log(response.data.items)
    return response.data.items;
}