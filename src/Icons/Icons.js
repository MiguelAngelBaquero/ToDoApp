import React from "react";
import {
  ImCheckboxChecked,
  ImCheckboxUnchecked,
  ImCross,
} from "react-icons/im";

function CompleteIcon({ onClick }) {
  return (
    <ImCheckboxChecked
      className="Icon Icon-check Icon-check--active"
      onClick={onClick}
    />
  );
}

function UnchekedIcon({ onClick }) {
  return <ImCheckboxUnchecked className="Icon Icon-check" onClick={onClick} />;
}

function DeleteIcon({ onClick }) {
  return <ImCross className="Icon Icon-delete" onClick={onClick} />;
}

export { CompleteIcon, UnchekedIcon, DeleteIcon };
