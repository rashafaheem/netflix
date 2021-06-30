import {API_KEY} from './constants/constants'
export const originals = `/trending/all/day?api_key=${API_KEY}`
export const action = `/discover/movie?api_key=${API_KEY}&with_genres=28`
export const comedy = `/discover/movie?api_key=${API_KEY}&with_genres=35`
export const horror = `/discover/movie?api_key=${API_KEY}&with_genres=27`
export const romance = `/discover/movie?api_key=${API_KEY}&with_genres=10749`
export const documentary = `/discover/movie?api_key=${API_KEY}&with_genres=99`
// /discover/tv?api_key=${API_KEY}&with_networks=213
