import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CodeBlock, dracula } from "react-code-blocks";
import { BsFillClipboardFill, BsFillClipboardCheckFill } from "react-icons/bs";
import ColorPalette from "./ColorPalette";

let desiredWeights = [0, 20, 40, 60, 80];

const ExportModal = ({ showModal, setShowModal, colors, exportTitle }) => {
  let desiredColors = [];
  const makeCodeBlock = (desiredWeights) => {
    desiredWeights.forEach((weight) => {
      let desiredColor = colors.filter((color) => color.weight === weight);
      desiredColors.push(...desiredColor);
    });

    const baseColor = desiredColors.filter(
      (desiredColor) => desiredColor.type == "base"
    );
    const shadeColors = desiredColors.filter(
      (desiredColor) => desiredColor.type == "shade"
    );
    const tintColors = desiredColors.filter(
      (desiredColor) => desiredColor.type == "tint"
    );

    let desiredString = `
    /* tinted colors */
    --${exportTitle}-100: #${tintColors[3].hex};
    --${exportTitle}-200: #${tintColors[2].hex};
    --${exportTitle}-300: #${tintColors[1].hex};
    --${exportTitle}-400: #${tintColors[0].hex};
    /* base */
    --${exportTitle}-500: #${baseColor[0].hex};
    /* shaded colors */
    --${exportTitle}-600: #${shadeColors[0].hex};
    --${exportTitle}-700: #${shadeColors[1].hex};
    --${exportTitle}-800: #${shadeColors[2].hex};
    --${exportTitle}-900: #${shadeColors[3].hex};`;

    return { desiredString, baseColor, shadeColors, tintColors };
  };

  const { desiredString, baseColor, shadeColors, tintColors } =
    makeCodeBlock(desiredWeights);

  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = (desiredString) => {
    setIsCopied(true);
    return navigator.clipboard.writeText(desiredString);
  };

  return (
    <div className="modal-container">
      <IoMdClose
        onClick={() => setShowModal(!showModal)}
        className="btn-close"
      />
      <div className="export-items-container">
        <ColorPalette shadeColors={shadeColors} tintColors={tintColors} />
        <div className="code-container">
          <div className="codeblock">
            {isCopied ? (
              <BsFillClipboardCheckFill className="clipboard-icon" />
            ) : (
              <BsFillClipboardFill
                onClick={() => handleCopy(desiredString)}
                className="clipboard-icon"
              />
            )}
            <CodeBlock
              theme={dracula}
              language="css"
              text={desiredString}
              showLineNumbers={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportModal;
