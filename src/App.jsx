import React, { useEffect, useRef, useState } from "react";
import Form from "./Components/Form";
import ColorList from "./Components/ColorList";
import ExportModal from "./components/ExportModal";
import Values from "values.js";

const App = () => {
  const [inputColor, setInputColor] = useState("#636bff");
  const [weight, setWeight] = useState(10);
  const [colors, setColors] = useState(new Values("#636bff").all(10));
  const [showModal, setShowModal] = useState(false);
  const [exportTitle, setExportTitle] = useState("primary");

  useEffect(() => {
    try {
      let colorShades = new Values(inputColor).all(weight);
      setColors(colorShades);
    } catch (error) {
      if (inputColor < 6) return;
      // TODO Toast about error
    }
  }, [inputColor]);

  return (
    <main>
      <Form
        colors={colors}
        inputColor={inputColor}
        setInputColor={setInputColor}
        showModal={showModal}
        setShowModal={setShowModal}
        setExportTitle={setExportTitle}
      />
      <ColorList colors={colors} />
      {showModal && (
        <ExportModal
          style={{ width: "2px" }}
          colors={colors}
          showModal={showModal}
          setShowModal={setShowModal}
          exportTitle={exportTitle}
        />
      )}
      {showModal && (
        <div onClick={() => setShowModal(!showModal)} className="overlay"></div>
      )}
    </main>
  );
};

export default App;
