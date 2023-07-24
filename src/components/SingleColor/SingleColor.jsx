import { AiFillStar } from "react-icons/ai";

const SingleColor = ({ color: { hex, weight, type }, brightness }) => {
  return (
    <div
      style={{
        background: `#${hex}`,
        color: brightness <= 50 ? "white" : "black",
      }}
      className="color-box"
    >
      <h4 className="title">#{hex}</h4>
      {weight === 0 && <AiFillStar className="base-color-icon" />}
      <p className="weight">{weight}%</p>
    </div>
  );
};
export default SingleColor;
