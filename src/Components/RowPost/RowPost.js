import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constants'

function RowPost() {
    const [movies, setmovies] = useState([])
    useEffect(() => {
       axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then(response =>{
           console.log(response.data)
           setmovies(response.data.results)
       })
    }, [])
    return (
        <div className='row'>
            <h2>Netflix Originals</h2>
            <div className='posters'>
                {movies.map((obj)=>
                <img className='poster' alt='poster' src={`${imageUrl+obj.backdrop_path}`}></img>
                )}
                
            </div>
        </div>
    )
}

export default RowPost
