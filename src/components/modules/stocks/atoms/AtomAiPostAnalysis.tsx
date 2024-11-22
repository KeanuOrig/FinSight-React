import React from "react";

const AtomAiPostAnalysis: React.FC<{ analysis: string }> = ({ analysis }) => {

  const renderAnalysis = (text: string) => {
    
    const sections = text.split("\n\n");

    return sections.map((section, index) => (
      <div key={index} className="mb-4">
        {/* Replace ** with strong tags */}
        <p
          className="text-gray-700 leading-relaxed text-justify"
          dangerouslySetInnerHTML={{
            __html: section.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
          }}
        />
      </div>
    ));
  };

  return (
    <div className="p-4 bg-gray-100 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        AI Post Analysis
      </h2>
      {renderAnalysis(analysis)}
    </div>
  );
};

export default AtomAiPostAnalysis;
