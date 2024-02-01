import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ShowList = () => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();

  const fetchShowDetails = async (showId) => {
    try {
      navigate(`/show/${showId}`);
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {shows.map((show) => (
          <div key={show.show.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative">
              {show.show.image && show.show.image.medium && (
                <img
                  src={show.show.image.medium}
                  alt={show.show.name}
                  className=" object-cover"
                />
              )}
            </div>

            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{show.show.name}</h3>

              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => fetchShowDetails(show.show.id)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
