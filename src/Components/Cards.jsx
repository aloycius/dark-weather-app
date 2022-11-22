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
      <div className="flex justify-center h-fit w-fit absolute top-80 left-28   items-center rounded-md bg-slate-400 p-2">
        <form>
          <input
            className="rounded p-1 w-fit bg-slate-500 text-white"
            type="text"
            placeholder="Search Here"
            name="search"
          ></input>
        </form>
      </div>
      <div className="flex flex-row justify-center   absolute top-80 right-28 w-fit p-1 rounded-md bg-slate-400">
        <div className="flex flex-row space-x-4 justify-center w-fit bg-white rounded p-1">
          <div>Filters</div>
          <div className="flex flex-row">
            <Select
              options={aquaticCreatures}
              onChange={(opt) => console.log(opt.label, opt.value)}
            />
          </div>
          <div>
          <Select
              options={aquaticCreatures}
              onChange={(opt) => console.log(opt.label, opt.value)}
            />
          </div>
          <div>
          <Select
              options={aquaticCreatures}
              onChange={(opt) => console.log(opt.label, opt.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
