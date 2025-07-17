"use client";

import * as motion from "motion/react-client";
import { useState } from "react";

export default function LayoutAnimation() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <button
      className="toggle-container"
      style={{
        ...container,
        justifyContent: "flex-" + (isOn ? "start" : "end"),
        backgroundColor: !isOn ? "black" : "white",
      }}
      onClick={toggleSwitch}
    >
      <motion.div
        className="toggle-handle"
        style={{ ...handle, backgroundColor: isOn ? "black" : "white" }}
        layout
        transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2,
        }}
      />
    </button>
  );
}

/**
 * ==============   Styles   ================
 */

const container = {
  width: 60,
  height: 35,

  borderRadius: 50,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  padding: 10,
};

const handle = {
  width: 20,
  height: 20,
  borderRadius: "50%",
};
