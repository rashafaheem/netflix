import React, {useEffect} from 'react'
import {API_KEY} from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'

function Banner() {
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=> {
            console.log(response.data.results[0])
        })
    }, [])
    return (
        <div className='banner'>
            <div className='content'>
                <h1 className='title'>Movie Name</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='description'>Netflix is a subscription-based streaming service that allows our members to watch TV shows and movies without commercials on an internet-connected device. 
                You can also download TV shows and movies to your iOS, Android, or Windows 10 device and watch without an internet connection. 
                </h1>
            </div>  
            <div className='fade_bottom'></div>
        </div>
    )
}

export default Banner
