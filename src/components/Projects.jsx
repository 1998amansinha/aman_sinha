import React from "react";
import GradientBorder from "./shared/ui/GradientBorder";
import projectData from "../constants/projectsData";
import { Link as LinkIcon } from "lucide-react";

const Projects = () => {
  return (
    <div className="px-6 py-4">
      <GradientBorder Title={"Projects"} />

      {/* Section header and description */}
      <div className="flex flex-col lg:flex-row justify-center items-center  py-10 gap-4">
        <div className="section-header">
          <h1>Explore my portfolio of</h1>
          <h1>creative solutions</h1>
        </div>
        <p className="text-lg text-gray-400 md:w-1/2 md:mt-24 md:ml-56 text-start">
          Explore my portfolio full of creative solutions
        </p>
      </div>

      {/* Project cards */}
      <div className="mt-10 space-y-20">
        {projectData.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row justify-between hover:bg-gray-100 hover:rounded-lg p-4 gap-6">
              {/* Image */}
              <img
                src={item.projectImage}
                alt={item.name}
                className="w-full md:w-1/3 rounded-lg shadow-md shadow-black object-cover"
              />

              {/* Title, Description, Tech Stack, Buttons */}
              <div className="w-full md:w-1/3 space-y-4">
                <h1 className="text-xl md:text-4xl font-medium">{item.name}</h1>
                <p className="text-neutral-400 font-dm-sans">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  {item.Tech_Stack.map((tech, ind) => (
                    <img
                      src={tech.src}
                      alt={tech.name}
                      key={ind}
                      className="w-6"
                    />
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  <a
                    href={item.demoUrl}
                    target="_blank"
                    className="flex button items-center gap-x-1"
                  >
                    Live Demo <LinkIcon size={18} />
                  </a>
                  <a
                    href={item.gitHubUrl}
                    target="_blank"
                    className="flex button items-center gap-x-1"
                  >
                    GitHub
                    <img
                      src="https://res.cloudinary.com/do5xzpecm/image/upload/v1752654602/GitHub_eoyljm.svg"
                      alt="Github"
                      className="w-6 bg-white rounded-full"
                    />
                  </a>
                </div>
              </div>
            </div>
            <hr className="mt-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
