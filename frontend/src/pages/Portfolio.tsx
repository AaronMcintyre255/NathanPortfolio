import React, { useState, useEffect } from "react";
import axios from "axios";

const Portfolio = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define an async function to fetch data
    const fetchVideos = async () => {
      try {
        const response = await axios.get("/api/videos/"); // Adjust URL if necessary
        setVideos(response.data); // Save fetched videos to state
      } catch (err) {
        setError("Error fetching videos");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []); // Empty dependency array ensures it runs once on component mount

  if (loading) return <p>Loading videos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="video-grid">
      {videos.map((video) => (
        <div key={video.id} className="video-card">
          <img
            src={video.thumbnail_url || "placeholder-thumbnail.jpg"}
            alt={video.title}
            className="video-thumbnail"
          />
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          <a href={video.video_url} target="_blank" rel="noopener noreferrer">
            Watch Video
          </a>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
