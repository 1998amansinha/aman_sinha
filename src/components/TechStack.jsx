import { techStack } from "../constants/assets/images";

const TechStack = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center px-4 md:px-6 py-4 gap-4 md:gap-0">
      <h1 className="font-bold text-lg md:mr-5 text-center md:text-left">
        Tech Stacks
      </h1>

      <div className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-8">
        {techStack.map((logo, index) => (
          <div
            key={index}
            className="relative group flex flex-col items-center"
          >
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 whitespace-nowrap">
              {logo.name}
            </span>
            <img
              src={logo.src}
              alt={logo.name}
              className="w-8 object-contain cursor-pointer transition-transform duration-200 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
