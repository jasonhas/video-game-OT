import axios from "axios"

const key="c2fee8c6ed4b4bf8b18755f90c88fa03"
const axiosCreate=axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getGenreList=axiosCreate.get('/genres?key='+key)
const getAllGames=axiosCreate.get('/games?key='+key)
const getGameListByGenreID=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id)

export default{
    getGenreList,
    getAllGames,
    getGameListByGenreID
}