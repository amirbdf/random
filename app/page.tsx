"use client"
import React, { useState, useEffect } from 'react';


const Home = () => {
  const [imageUrl, setImageUrl] = useState(null); // State to store the image URL
  const [loading, setLoading] = useState(false);  // Loading state for fetching
  const [error, setError] = useState('');       // Error state for handling errors
  const [animalChoice, setAnimalChoice] = useState('dog'); // 'dog' or 'duck'

  // Fetch dog image from the Random Dog API
  const fetchDogImage = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://random.dog/woof.json');
      const data = await response.json();
      setImageUrl(data.url);  // Set the dog image URL
    } catch (error) {
      setError('Failed to fetch dog image');
    } finally {
      setLoading(false);
    }
  };

  // Fetch duck image (you can use a different duck API if you prefer)
  const fetchDuckImage = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://random-ize.com/duck-api');  // Use your preferred API
      const data = await response.json();
      setImageUrl(data.image);  // Assuming the duck API returns the image URL as `image`
    } catch (error) {
      setError('Failed to fetch duck image');
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch the image based on the user's selection
  const fetchImage = () => {
    if (animalChoice === 'dog') {
      fetchDogImage(); // Fetch dog image
    } else if (animalChoice === 'duck') {
      fetchDuckImage(); // Fetch duck image
    }
  };

  useEffect(() => {
    fetchImage(); // Fetch the image when the component mounts or animalChoice changes
  }, [animalChoice]);

  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow flex justify-center items-center flex-col space-y-6">
        <h1 className="text-3xl font-bold text-center">Pick an Animal!</h1>
        <div className="space-x-4">
          <button
            onClick={() => setAnimalChoice('dog')}
            className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-400"
          >
            Show Dog 🐶
          </button>
          <button
            onClick={() => setAnimalChoice('duck')}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-400"
          >
            Show Duck 🦆
          </button>
        </div>

        {/* Show loading message if fetching */}
        {loading && <p>Loading...</p>}

        {/* Show error message if there is an error */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Display the image */}
        {imageUrl && (
          <div className="mt-4">
            <img
              src={imageUrl}
              alt={animalChoice === 'dog' ? 'Random Dog' : 'Random Duck'}
              className="w-96 h-auto rounded-lg shadow-lg"
            />
          </div>
        )}
      </main>
      
    </div>
  );
};

export default Home;
