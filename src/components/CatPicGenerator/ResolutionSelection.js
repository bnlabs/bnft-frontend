import React, { useState } from "react";

const ResolutionSelection = () => {
  const [resolution, setResolution] = useState(100);

  const handleResolutionChange = (event) => {
    setResolution(parseInt(event.target.value));
  };

  const options = [100, 200, 300, 400, 500, 600];

  const style = {
    margin: "1vh"
  }

  return (
    <div>
      <select id="resolution" value={resolution} onChange={handleResolutionChange} style={style}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option} x {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ResolutionSelection;