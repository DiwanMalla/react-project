import { useState } from "react";
const RandomColor = () => {
  const [typeOfColor, settypeOfColor] = useState(`hex`);
  const [color, setColor] = useState("#000000");
  const handleCreateRandomHexColor = () => {
    console.log("yes");
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let newColor = "#";

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * hex.length);
      newColor += hex[randomIndex];
    }
    setColor(newColor);
  };
  const handleCreateRandomRgbColor = () => {
    console.log("ye");
    const getRandomColor = () => Math.floor(Math.random() * 256);
    const red = getRandomColor();
    const green = getRandomColor();
    const blue = getRandomColor();

    const newColor = `rgb(${red},${green},${blue})`;
    setColor(newColor);
  };
  return (
    <div
      id="wrapper"
      className="text-center text-black"
      style={{ width: "100vw", height: "100vh", background: color }}
    >
      <button
        className="bg-gray-300 m-2"
        onClick={() => {
          settypeOfColor("hex");
        }}
      >
        Create HEX color
      </button>
      <button
        className="bg-gray-300 m-2"
        onClick={() => {
          settypeOfColor("rgb");
        }}
      >
        Create RGB color
      </button>
      <button
        className="bg-gray-300 m-2"
        onClick={() => {
          typeOfColor == "hex"
            ? handleCreateRandomHexColor()
            : handleCreateRandomRgbColor();
        }}
      >
        Generate Random color
      </button>
      <div className="flex justify-center items-center h-[450px] text-white">
        <div>{color ? color : `Generate random color`}</div>
      </div>
    </div>
  );
};

export default RandomColor;
