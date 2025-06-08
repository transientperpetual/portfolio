// app/work/ProjectCard.js
'use client';

import { useState } from 'react';


// Map canvas types to their respective components
const canvasMap = {
  A: ProjectACanvas,
  B: ProjectBCanvas,
  C: ProjectCCanvas,
  // Add more mappings if needed
};

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  // Extract project properties (adjust based on your Notion schema)
  const title = project.properties.Name.title[0]?.plain_text;
  const description = project.properties.Description.rich_text[0]?.plain_text;
  const canvasType = project.properties.CanvasType?.select?.name; // e.g., "A", "B", "C"
  const details = project.properties.Details?.rich_text[0]?.plain_text; // Extra info for hover

  const CanvasComponent = canvasMap[canvasType] || null;

  return (
    <div
      className="w-[320px] h-[240px] relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {CanvasComponent ? (
        <CanvasComponent />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          No canvas available
        </div>
      )}
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
      {isHovered && details && (
        <div className="absolute top-0 left-0 w-full h-full bg-white/80 p-4 rounded-lg shadow-lg flex items-center justify-center">
          <p className="text-gray-700">{details}</p>
        </div>
      )}
    </div>
  );
}