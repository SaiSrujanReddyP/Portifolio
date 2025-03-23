import GithubCalendar from "./github.tsx";
import React from "react";
import '../styles/globals.css';

const Projects: React.FC = () => {
  return (
    <div className="projects ">
      
      <div className="mb-4">
        <h3 className="text-3xl mt-6 font-medium  lg:text-5xl tracking-tight text-primary ">Beat my hi-score</h3>
        <div className="iframe-container">
          <style>{`
            .iframe-container {
              width: 750px; /* Set the width you desire */
              height: 250px; /* Set the height you desire */
              overflow: hidden;
              position: relative;
            }  
          
            .iframe-container iframe {
              position: absolute;
              top: 0px; /* Adjust top position to crop the iframe */
              left: -74px; /* Adjust left position to crop the iframe */
              width: calc(80% + 200px); /* Adjust width to include the cropped area */
              height: calc(100% + 9570px); /* Adjust height to include the cropped area */
              border: none;
              touch-action: manipulation;
              
            }
          `}</style>
          <iframe
            id="omg"
            src="https://mhasbini.com/miscs/react-chrome-dino-demo/index.html"
            title="Dino Game"
            frameBorder="0"
            scrolling="no"
            width="100%"
            height="100%"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className=" w-full flex-1 overflow-x-auto ">
  <h3 className="text-3xl font-medium lg:text-4xl tracking-tight text-primary">Check Out My GitHub Contributions</h3>
  <br />
  
  <div className=" ">
  <GithubCalendar
    username="SaiSrujanReddyP"
    hideColorLegend
    hideTotalCount
    blockMargin={6}
    blockSize={26}
    blockRadius={7}
  />
  </div>
</div>

    </div>
  );
};

export default Projects;
