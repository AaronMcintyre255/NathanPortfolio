import React, { useState, useEffect } from "react";
import axios from "axios";
import "./video_portfolio.css";

// Define the type for a single video
interface VideoPortfolio {
  id: number;
  video_title: string;
  video_description: string;
  video_url: string;
  video_thumbnail: string | null;
}

const VideoPortfolio: React.FC = () => {
  const [videos, setVideos] = useState<VideoPortfolio[]>([]); // Array of VideoPortfolio objects
  const [loading, setLoading] = useState<boolean>(true); // Boolean to track loading state
  const [error, setError] = useState<string | null>(null); // Error state for handling any issues

  // Fetch video data when the component mounts
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // Use the full URL if React and Django are on different ports
        const response = await axios.get<VideoPortfolio[]>(
          `http://localhost:8000/api/videos/`
        );
        console.log("API Response:", response.data);
        if (Array.isArray(response.data)) {
          setVideos(response.data); // Set the fetched videos data
        } else {
          setError("Fetched data is not in the expected format.");
        }
      } catch (err) {
        setError("Error fetching videos");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []); // Empty dependency array ensures this runs once on component mount

  // Show loading message while fetching data
  if (loading) return <p>Loading videos...</p>;

  // Show error message if something goes wrong
  if (error) return <p>{error}</p>;

  return (
    <div className="video-grid">
      {videos.length > 0 ? (
        videos.map((video) => (
          <div key={video.id} className="video-card">
            <img
              src={video.video_thumbnail || "/thumbnail-placeholder.jpg"} // Use placeholder if no thumbnail
              alt={video.video_title}
              className="video-thumbnail"
            />
            <h3>{video.video_title}</h3>
            <p>{video.video_description}</p>
            <a href={video.video_url} target="_blank" rel="noopener noreferrer">
              Watch Video
            </a>
          </div>
        ))
      ) : (
        <p>No videos available.</p> // Show this if there are no videos
      )}
    </div>
  );
};

export default VideoPortfolio;
