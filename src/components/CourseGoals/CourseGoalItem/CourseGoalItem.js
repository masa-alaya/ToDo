import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

import "./CourseGoalItem.css";

const CourseGoalItem = (props) => {
  // const [deleteText, setDeleteText] = useState('');
  let [clicked, setClicked] = useState("");
  const deleteHandler = () => {
    setClicked("clicked");
    setTimeout(() => {
      props.onDelete(props.id);
    }, 400);
    // setDeleteText('(Deleted!)');
  };

  return (
    <li className={`goal-item ${clicked}`}>
      <AiOutlineCheck onClick={deleteHandler} className={`icon ${clicked}`} />
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
