import React,{ useState, useEffect } from 'react'
import TrendingGames from '../components/TrendingGames'
import GlobalApi from '../services/GlobalApi'

export default function Home() {
    const [allGameList,setAllGameList]=useState();
    const [gameListByGenres, setGameListbyGenres] = useState([])

    useEffect(()=>{
        getAllGamesList();
        getGameListByGenresId()
    },[])

    const getAllGamesList=()=>{
        GlobalApi.getAllGames.then((resp)=>{
            setAllGameList(resp.data.results)
            setGameListbyGenres(resp.data.results)
        })
    }

    const getGameListByGenresId=(id)=>{
        GlobalApi.getGameListByGenreID(4).then((resp)=>{
            console.log(resp.data.results)
        })
    }

  return (
    <>
        <div className='max-w-6xl mx-auto'>
            <TrendingGames gameList={allGameList}/>
        </div>
    </>
  )
}
