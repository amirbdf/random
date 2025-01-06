import React, { useEffect, useState } from 'react';

const Api = () => {
  const [imageUrl, setImageUrl] = useState(null);  // State for storing the image URL
  const [loading, setLoading] = useState(true);    // State for loading status
  const [error, setError] = useState(null);        // State for error messages
  const [animalChoice, setAnimalChoice] = useState('dog'); // State for animal choice (dog or fox)

  // Function to fetch dog image
  const fetchDogImage = async () => {
    try {
      const response = await fetch('https://random-d.uk/api');
      const data = await response.json();
      setImageUrl(data.url);  // Set dog image URL from API response
    } catch (error) {
      setError('Failed to load dog image.');
    }
  };

  // Function to fetch fox image
  const fetchFoxImage = async () => {
    try {
      const response = await fetch('https://randomfox.ca/floof/');
      const data = await response.json();
      setImageUrl(data.image);  // Set fox image URL from API response
    } catch (error) {
      setError('Failed to load fox image.');
    }
  };

  // Function to switch between dog or fox image fetching
  const fetchImage = () => {
    setLoading(true);
    if (animalChoice === 'dog') {
      fetchDogImage();  // Fetch dog image
    } else if (animalChoice === 'fox') {
      fetchFoxImage();  // Fetch fox image
    }
  };

  useEffect(() => {
    fetchImage();  // Call fetch image when animalChoice changes
  }, [animalChoice]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex justify-center items-center flex-col space-y-4">
      <h2 className="text-xl font-semibold text-center">Random Animal Image</h2>

      {/* Buttons to select between Dog or Fox */}
      <div>
        <button
          onClick={() => setAnimalChoice('dog')}
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-400"
        >
          Show Dog 🐶
        </button>
        <button
          onClick={() => setAnimalChoice('fox')}
          className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-400"
        >
          Show Fox 🦊
        </button>
      </div>

      {/* Display Image */}
      {imageUrl && (
        <div className="mt-4">
          <img
            src={imageUrl}
            alt="Random Animal"
            className="w-96 h-auto rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Api;
