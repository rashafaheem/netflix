import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl} from '../../constants/constants'

function RowPost(props) {
    const [movies, setmovies] = useState([])
    useEffect(() => {
       axios.get(props.url).then(response =>{
           console.log(response.data)
           setmovies(response.data.results)
       })
    }, [])
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj)=>
                <img className={props.isSmall ? 'smallPoster':'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`}></img>
                )}
                
            </div>
        </div>
    )
}

export default RowPost
