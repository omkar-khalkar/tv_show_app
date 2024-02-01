import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setShow(response.data);
      } catch (error) {
        console.error('Error fetching show details', error);
      }
    };

    fetchShowDetails();
  }, [id]);

  const handleClick = () => {
    console.log(id);
    navigate(`/book/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{show.name}</h1>
      <div
        className="mb-4"
        dangerouslySetInnerHTML={{ __html: show.summary }}
      />

      {Object.keys(show).length !== 0 && (
        <div>
          <img
            className="mb-4"
            src={show.image && show.image.medium}
            alt={show.name}
          />
          <p className="mb-2">
            <span className="font-bold">Type:</span> {show.type}
          </p>
          <p className="mb-2">
            <span className="font-bold">Language:</span> {show.language}
          </p>
          <p className="mb-2">
            <span className="font-bold">Genres:</span>{' '}
            {show.genres && show.genres.join(', ')}
          </p>
          <p className="mb-2">
            <span className="font-bold">Status:</span> {show.status}
          </p>
          <p className="mb-2">
            <span className="font-bold">Runtime:</span> {show.runtime} minutes
          </p>
          <p className="mb-2">
            <span className="font-bold">Rating:</span>{' '}
            {show.rating && show.rating.average}
          </p>
          {show.officialSite && (
            <p className="mb-2">
              <span className="font-bold">Official Site:</span>{' '}
              <a
                href={show.officialSite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {show.officialSite}
              </a>
            </p>
          )}
          <button
            onClick={handleClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Book Ticket
          </button>
        </div>
      )}
    </div>
  );
};

export default ShowDetails;
