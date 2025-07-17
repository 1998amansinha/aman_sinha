import experienceData from "../constants/experienceData";
import GradientBorder from "./shared/ui/GradientBorder";

export default function Experience() {
  return (
    <div className="px-4 md:px-6">
      <GradientBorder Title={"Experiece"} />

      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center mt-5 gap-4 md:gap-0">
        <div className="section-header w-full md:w-2/3 md:text-xl">
          <h1>A Yearly snapshot of my</h1>
          <h1>creative growth</h1>
        </div>
        <p className="text-base md:text-lg text-gray-400 w-full md:w-1/3 text-start md:text-end">
          An annual summary that summarizes my creative journey and development
          throughout the year.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="mt-10 space-y-6 md:space-y-0">
        {experienceData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-start py-10 px-4 rounded-md hover:bg-gray-100 transition duration-200"
          >
            {/* Description */}
            <div className="w-full md:w-2/3">
              <h2 className="text-xl font-inter font-semibold">
                {item.heading}
              </h2>
              <p className="text-gray-500 pt-4 max-w-xl font-dm-sans">
                {item.description}
              </p>
            </div>

            {/* Year */}
            <span className="w-full md:w-1/3 text-start md:text-end text-3xl md:text-4xl font-semibold text-gray-700 mt-4 md:mt-10  ">
              {item.year}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
