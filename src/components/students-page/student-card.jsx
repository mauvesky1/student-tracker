import React from "react";
import styles from "./student-card.module.css";

function StudentCard(props) {
  console.log("loading", props);

  return (
    <div className={styles.body}>
      <p>
        Student ID: {props.student.id}, name:{props.student.name},
        startingCohort:{props.student.startingCohort},
      </p>
      <ul>
        {props.student.blockHistory.map((block, index) => {
          return <li key={index + block.name}>{block.name} </li>;
        })}
      </ul>
      <button onClick={props.updateStudent}>Update block</button>
    </div>
  );
}

export default StudentCard;
