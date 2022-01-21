import Test from "../Test";
import { useState } from "react";
import PropTypes from "prop-types";
import { avg } from "../../hooks/useTools";

export default function StudentListItem(props) {
  const [expandedStudentIds, setExpandedStudentIds] = useState([]);
  const [inputValue, setInputValue] = useState({});
  // const [students, setStudents] = useState(props.students);

  const student = props.student;



  function toggleSymbol(studentId) {
    if (expandedStudentIds.includes(studentId)) {
      const newExpandedStudentIds = expandedStudentIds.filter((id) => {
        return id !== studentId;
      });
      setExpandedStudentIds(newExpandedStudentIds);
    } else {
      setExpandedStudentIds([...expandedStudentIds, studentId]);
    }
  }

  const handleUserInput = (studentId, e) => {
    setInputValue[studentId] = e.target.value;
  };

  return (
    <div className="about--wrapper" key={student.id}>
      <article className="about--main">
        <div className="about--profile-pic">
          <img
            src={student.pic}
            alt={student.firstName.concat(" ", student.lastName)}
          />
        </div>

        <div className="about--profile-corewrapper">
          <div className="about--profile-blurb-top-wrapper">
            <p
              className="about--profile-blurb-top-name"
              // data-testid="student-name"
            >
              <b data-testid="student-name" value={student.firstName}>
                {student.firstName.toUpperCase()}{" "}
                {student.lastName.toUpperCase()}
              </b>
            </p>

            <button
              className="about--profile-blurb-sign"
              onClick={() => toggleSymbol(student.id)}
              data-testid="symbol-name"
            >
              {expandedStudentIds.includes(student.id) ? "-" : "+"}
            </button>
          </div>

          <div className="about--profile-blurb">
            <ul className="about--profile-blurb-main">
              <li>Email: {student.email} </li>
              <li>Company: {student.company}</li>
              <li>Skill: {student.skill}</li>
              <li>Average: {avg(student.grades)}</li>
            </ul>

            <Test
              student={student}
              expandedStudentIds={expandedStudentIds}
              key={Test.index}
            />
          </div>

          <div>
            <ul className="about--profile-tags">
              {student.tags && student.tags.map((tag, index) => (
                <li key={index} className="about--profile-tag">
                  <span className="about--profile-tag-title">{tag}</span>
                </li>
              ))}
            </ul>

            <input
              className="about--profile-add-tag"
              type="text"
              placeholder="add tags"
              onChange={(event) => handleUserInput(student.id, event)}
              value={inputValue[student.id]}
              onKeyDown={(event) => props.addTag(student.id, event)}
            />
          </div>
        </div>
      </article>
      <hr />
    </div>
  );
}


