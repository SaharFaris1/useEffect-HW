import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { useParams } from 'react-router';

function Details() {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(
          "https://655127797d203ab6626e943b.mockapi.io/Character_fahad "
        );
        const allCharacters = response.data;
        const found = allCharacters.find(char => char.id == id);

        if (found) {
          setCharacter(found);
        } else {
          setCharacter(null);
        }
      } catch (error) {
        console.error( error);
      }
    };

    fetchCharacter();
  }, [id]);

  if (!character) {
    return <div className="text-center py-10">Loading </div>;
  }

  return (
  
    <div className="p-6">
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-6">
      <div className="md:flex">
        <div className="md:shrink-0">
          
          <img
            src={character.image}
        alt=''
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="p-8">
        <div>
          <p className='text-lg text-orange-300 font-semibold'>{character.species}</p> 
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
            {character.name}
          </h1>
          <p className="mt-2 font-bold text-gray-500">Status: {character.status}</p>
          <p className="mt-2 font-bold text-gray-500">Gender:  {character.gender}</p>
          <p className="mt-2 font-bold text-gray-500">Hair: {character.hair}</p>
          <p className="mt-2 font-bold text-gray-500">Origin: {character.origin}</p>
</div>
<Link
            to="/"
            className="mt-4 inline-block bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Back
          </Link>
        </div>
     
      </div>
    </div>
  </div>
)
}
export default Details;