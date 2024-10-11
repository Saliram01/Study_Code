import React from "react";

function ProjectList(props) {
  return (
    <button className="py-2 px-8 rounded-full border-2 text-gray-800 font-semibold active:bg-amber-300 hover:bg-amber-400 hover:text-white">
      {props.value}
    </button>
  );
}

export default ProjectList;
