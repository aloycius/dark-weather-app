import React from "react";
import Select from "react-select";

const aquaticCreatures = [
  { label: "Shark", value: "Shark" },
  { label: "Dolphin", value: "Dolphin" },
  { label: "Whale", value: "Whale" },
  { label: "Octopus", value: "Octopus" },
  { label: "Crab", value: "Crab" },
  { label: "Lobster", value: "Lobster" },
];

export default function Cards() {
  return (
    <div>
      <div className="flex justify-center h-2/6 w-fit ml-20 mt-12  items-center rounded-md bg-slate-400 p-1.5">
        <form>
          <input
            className="rounded p-1 w-fit bg-slate-500 text-white"
            type="text"
            placeholder="Search Here"
            name="search"
          ></input>
        </form>
      </div>
      <div className="flex flex-row justify-end  mr-64">
        <div className="flex flex-row justify-center w-2/5 bg-white">
          <div>Filters</div>
          <div className="flex">
            <Select
              options={aquaticCreatures}
              onChange={(opt) => console.log(opt.label, opt.value)}
            />
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
