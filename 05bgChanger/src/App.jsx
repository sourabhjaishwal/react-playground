import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#edede9");

  function changeColor(color) {
    setColor(color);
  }

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="h-screen flex flex-wrap items-center justify-center shadow-lg">
          <div className="mb-10 text-3xl text-white font-bold">
            Background Changer
          </div>
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-4 rounded-full">
              <button
                onClick={() => setColor("red")}
                className="outline-none px-8 shadow-lg py-2 rounded-full bg-red-500 text-white hover:cursor-pointer"
              >
                Red
              </button>
              <button
                onClick={() => setColor("blue")}
                className="outline-none px-8 shadow-lg py-2 rounded-full bg-blue-500 text-white hover:cursor-pointer"
              >
                Blue
              </button>
              <button
                onClick={() => setColor("green")}
                className="outline-none px-8 shadow-lg py-2 rounded-full bg-green-500 text-white hover:cursor-pointer"
              >
                Green
              </button>
              <button
                onClick={() => setColor("purple")}
                className="outline-none px-8 shadow-lg py-2 rounded-full bg-purple-500 text-white hover:cursor-pointer"
              >
                Purple
              </button>
              <button
                onClick={() => setColor("orange")}
                className="outline-none px-8 shadow-lg py-2 rounded-full bg-orange-500 text-white hover:cursor-pointer"
              >
                Orange
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
