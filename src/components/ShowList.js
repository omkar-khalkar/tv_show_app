import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ShowList = () => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();

  const fetchShowDetails = async (showId) => {
    try {
      const response = await axios.get(`https://api.tvmaze.com/shows/${showId}`);
      const showDetails = response.data;
      navigate(`/show/${showId}`, { state: { showDetails } });
    } catch (error) {
      console.error('Error fetching show details', error);
    }
  };

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setShows(response.data);
      } catch (error) {
        console.error('Error fetching shows', error);
      }
    };

    fetchShows();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">TV Shows</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 ">
        {shows.map((show) => (
          <div key={show.show.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className='flex justify-center align-items items-center'>
            {show.show.image && show.show.image.medium && (
              
              <img
                className="w-1/2   mb-4 rounded-md"
                src={show.show.image.medium}
                alt={show.show.name}
              />
            )}
            </div>
            

            <h3 className="text-xl font-semibold mb-2">{show.show.name}</h3>
            <p
              className="text-gray-600"
              dangerouslySetInnerHTML={{ __html: show.show.summary }}
            />

            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline"
              onClick={() => fetchShowDetails(show.show.id)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
