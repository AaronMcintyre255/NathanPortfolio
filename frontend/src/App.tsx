import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import VideoPortfolio from "./pages/VideoPortfolio";
import TeachingResources from "./pages/TeachingResources";
import ImagePortfolio from "./pages/ImagePortfolio";
import Contact from "./pages/Contact";
import "./variables.css";
import "./App.css";

const App: React.FC = () => {
  const [lines, setLines] = useState<string>("");

  useEffect(() => {
    const NUM_SCRATCHES = 100;
    const SVG_WIDTH = 1000;
    const SVG_HEIGHT = 1000;
    const MIN_DISTANCE = 75;
    const MIN_LENGTH = 60;

    type Line = {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
    };

    const calculateDistance = (
      x1: number,
      y1: number,
      x2: number,
      y2: number
    ): number => {
      return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    };

    const isLineFarEnough = (newLine: Line, existingLines: Line[]): boolean => {
      return existingLines.every(({ x1, y1, x2, y2 }) => {
        const d1 = calculateDistance(newLine.x1, newLine.y1, x1, y1);
        const d2 = calculateDistance(newLine.x2, newLine.y2, x2, y2);
        return d1 >= MIN_DISTANCE && d2 >= MIN_DISTANCE;
      });
    };

    const isLineLongEnough = (newLine: Line): boolean => {
      const length = calculateDistance(
        newLine.x1,
        newLine.y1,
        newLine.x2,
        newLine.y2
      );
      return length >= MIN_LENGTH;
    };

    const createRandomLine = (existingLines: Line[]): Line | null => {
      for (let attempt = 0; attempt < 100; attempt++) {
        const x1 = Math.random() * SVG_WIDTH;
        const y1 = Math.random() * SVG_HEIGHT;
        const isVertical = Math.random() < 0.5;

        const x2 = isVertical ? x1 : x1 + (Math.random() * 200 - 100);
        const y2 = isVertical ? y1 + (Math.random() * 200 - 100) : y1;

        const newLine = { x1, y1, x2, y2 };

        if (
          isLineFarEnough(newLine, existingLines) &&
          isLineLongEnough(newLine)
        ) {
          return newLine;
        }
      }
      return null;
    };

    const generateSvgLines = (): string => {
      const existingLines: Line[] = [];
      let scratches = "";

      for (let i = 0; i < NUM_SCRATCHES; i++) {
        const newLine = createRandomLine(existingLines);
        if (newLine) {
          existingLines.push(newLine);
          scratches += `<line x1="${newLine.x1}" y1="${newLine.y1}" x2="${newLine.x2}" y2="${newLine.y2}" stroke="var(--line-color)" stroke-width="6" opacity="1" stroke-linecap="round" />`;
        }
      }

      return scratches;
    };

    const linesContent = generateSvgLines();
    setLines(linesContent);
  }, []);

  return (
    <div
      id="page-container"
      style={{
        backgroundColor: "var(--off-white)",
      }}
    >
      <div
        id="svg-background"
        dangerouslySetInnerHTML={{
          __html: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="none">
              ${lines}
            </svg>
          `,
        }}
      ></div>
      <div id="content-wrap">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/portfolio/video-gallery"
              element={<VideoPortfolio />}
            />
            <Route path="/teaching_resources" element={<TeachingResources />} />
            <Route
              path="/portfolio/image-gallery"
              element={<ImagePortfolio />}
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default App;
