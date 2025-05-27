import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router'
function Home() {
    const [characters, setCharacters] = useState([])

    useEffect(()=> {
        axios.get('https://655127797d203ab6626e943b.mockapi.io/Character_fahad')
        .then(response =>{
            setCharacters(response.data)
        })
    })
  return (
    <div className="bg-orange-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div>
        <h1 className=' font-bold text-3xl text-center m-4'>
    🚀 Explore Characters from Space & Time!
  </h1>
  <p className='text-xl text-center text-gray-500 px-10'>
    Discover powerful characters from different universes, learn their traits, and dive into amazing stories from space and beyond.
  </p>
        </div>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5'>
{characters.map(character => (
 <div className='bg-white rounded-lg  shadow-md overflow-hidden transform transition duration-400 hover:scale-105 hover:shadow-xl'

 key={character.id}>
    <div className=' '>
    <Link to={`/details/${character.id}`} className=''>
    <img
              src={character.image}
              alt=''
              className="w-full h-full object-contain p-4 "
            />
            <p className='text-center text-sm font-semibold'> {character.name} </p>
 
        </Link>
  
    </div>



</div>


))}

</div>

    </div>
  )
}

export default Home