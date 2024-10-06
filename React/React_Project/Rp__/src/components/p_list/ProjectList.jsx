import React from "react";

function ProjectList(props) {
  return (
    <button className="py-2 px-8 rounded-full border-2 text-gray-800 font-semibold active:border-yellow-500 ">
      {props.value}
    </button>
  );
}

export default ProjectList;
