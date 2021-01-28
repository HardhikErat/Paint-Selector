import React from "react";
import NewColorBox from "../NewColorBox/NewColorBox";
import { SortableContainer } from "react-sortable-hoc";

const NewPaletteList = SortableContainer(({ colors, removeColor }) => {
  return (
    <div style={{ height: "100%" }}>
      {colors.map((color, i) => (
        <NewColorBox
          index={i}
          key={color.name}
          backgroundColor={color.color}
          name={color.name}
          handleClick={() => removeColor(color.name)}
        />
      ))}
    </div>
  );
});
export default NewPaletteList;