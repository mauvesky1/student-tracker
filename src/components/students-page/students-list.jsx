import React from "react";

function StudentList(props) {
  return (
    <ul className="studentsGrid">
      <div className="studentGrid studentGridHeader">
        <h2>Id</h2>
        <h2>Name</h2>
        <h2>block</h2>
        <h2>Cohort</h2>
      </div>
      {props.studentData.map(student => {
        return (
          <li key={student._id} className="studentGrid">
            <p> {student._id}</p>
            <p>{student.name}</p>
            <p>{student.currentBlock}</p>
            <p>{student.startingCohort}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default StudentList;
