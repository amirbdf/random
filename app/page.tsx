"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image"; // Import Image component from Next.js

const Home = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null); // State to store image URL
  const [loading, setLoading] = useState<boolean>(false); // Loading state for fetching
  const [animalChoice, setAnimalChoice] = useState<string>("dog"); // 'dog' or 'duck'

  // Fetch dog image from the Random Dog API
  const fetchDogImage = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://random.dog/woof.json");
      const data = await response.json();
      setImageUrl(data.url); // Set the dog image URL
    } catch {
      console.error("Failed to fetch dog image");
    } finally {
      setLoading(false);
    }
  };
  
  const fetchDuckImage = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://random-ize.com/duck-api");
      const data = await response.json();
      setImageUrl(data.image); // Assuming the duck API returns the image URL as `image`
    } catch {
      console.error("Failed to fetch duck image");
    } finally {
      setLoading(false);
    }
  };
  
  // Function to fetch the image based on the user's selection
  const fetchImage = useCallback(() => {
    if (animalChoice === "dog") {
      fetchDogImage(); // Fetch dog image
    } else if (animalChoice === "duck") {
      fetchDuckImage(); // Fetch duck image
    }
  }, [animalChoice]);

  // useEffect hook to trigger image fetch when the component mounts or animalChoice changes
  useEffect(() => {
    fetchImage(); // Fetch the image when the component mounts or animalChoice changes
  }, [animalChoice, fetchImage]);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex justify-center items-center flex-col space-y-6">
        <h1 className="text-3xl font-bold text-center">Pick an Animal!</h1>
        <div className="space-x-4">
          <button
            onClick={() => setAnimalChoice("dog")}
            className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-400"
          >
            Show Dog 🐶
          </button>
          <button
            onClick={() => setAnimalChoice("duck")}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-400"
          >
            Show Duck 🦆
          </button>
        </div>

        {/* Show loading message if fetching */}
        {loading && <p>Loading...</p>}

        {/* Display the image */}
        {imageUrl && (
          <div className="mt-4">
            <Image
              src={imageUrl}
              alt={animalChoice === "dog" ? "Random Dog" : "Random Duck"}
              width={400} // Set a width for the image
              height={400} // Set a height for the image
              className="rounded-lg shadow-lg"
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
