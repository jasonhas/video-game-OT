import React,{useEffect} from 'react'

function TrendingGames({gameList}) {
    useEffect(()=>{
        console.log('List:',gameList)
    },[])

  return (
    <div>
        <h2 className='text-2xl font-bold py-8'>Trending Games</h2>
        <div className='md:grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {/* {gameList.map((item,index)=>index<4&&(
                <div className='bg-[#76a8f75e] rounded-lg group hover:scale-110 transition-all duration-300 ease-in-out'>
                    <img src={item.background_image} className='h-[270px] rounded-t-lg object-cover'/>
                    <h3 className='dark:text-white text-[20px] font-bold mx-auto'>{item.name}</h3>
                </div>
            ))} */}
            {gameList.map((item,index)=>index<4&&(
                <div className='bg-slate-200 rounded-lg group hover:scale-110 transition-all duration-300 ease-in-out'>
                    <img src={item.background_image} className='h-[270px] rounded-t-lg object-cover'/>
                    <h3 className='text-2xl font-bold text-center p-4'>{item.name}</h3>
                </div>
            ))}
        </div>
    </div>

  )
}

export default TrendingGames