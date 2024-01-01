//single selection
//multiple selection

import { useState } from "react";
import data from "./data";
const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMulti, setEnableMulti] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const handleSingleSelection = (selectedId: any) => {
    setSelected(selectedId == selected ? null : selectedId);
  };

  const handleMultiSelection = (selectedId: number) => {
    if (multiple.includes(selectedId)) {
      setMultiple(multiple.filter((item) => item !== selectedId));
    } else {
      setMultiple([...multiple, selectedId]);
    }
  };
  return (
    <div
      id="wrapper"
      className="flex flex-col gap-3 justify-center items-center"
      style={{ height: "100vh", width: "100vw" }}
    >
      <button
        className="bg-gray-700 text-white p-2 rounded-lg"
        onClick={() => {
          enableMulti ? setMultiple([]) : setSelected(null);
          setEnableMulti(!enableMulti);
        }}
      >
        {enableMulti ? "Disable Multi Selection" : "Enable Multi Selection"}
      </button>
      <div id="accordion" className="w-[500px]">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              key={dataItem.id}
              className="mb-[10px] px-[20px] py-[10px]"
              style={{ background: "#614101" }}
            >
              <div
                id="title"
                className="text-white flex justify-between items-center cursor-pointer"
                onClick={() => {
                  enableMulti
                    ? handleMultiSelection(dataItem.id)
                    : handleSingleSelection(dataItem.id);
                }}
              >
                <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {dataItem.question}
                </h3>
                <span>
                  {selected == dataItem.id || multiple.includes(dataItem.id)
                    ? "-"
                    : "+"}
                </span>
              </div>
              {(selected == dataItem.id || multiple.includes(dataItem.id)) && (
                <div
                  style={{
                    fontWeight: "bold",
                    height: "auto",
                    fontSize: "15px",
                  }}
                  className="text-white"
                >
                  {dataItem.answer}
                </div>
              )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
