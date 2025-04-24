import { render, screen } from "@testing-library/react";
import React from "react";
import MissionVision from "./mission-vision";

describe("MissionVision Component", () => {
  test("renders without crashing", () => {
    render(<MissionVision />);
  });

  test("renders the heading", () => {
    render(<MissionVision />);
    const heading = screen.getByRole("heading", { name: /our vision & mission/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders vision and mission paragraphs", () => {
    render(<MissionVision />);
    const visionText = screen.getByText(/HUMB’s vision/i);
    const missionText = screen.getByText(/our mission/i);
    expect(visionText).toBeInTheDocument();
    expect(missionText).toBeInTheDocument();
  });

  test("renders the mission/vision image", () => {
    render(<MissionVision />);
    const image = screen.getByAltText(""); // alt is empty
    expect(image).toBeInTheDocument();

    // Decode the image.src to match original path string
    const decodedSrc = decodeURIComponent(image.src);
    expect(decodedSrc).toContain("image of mission and vision-01.png");
  });
});
