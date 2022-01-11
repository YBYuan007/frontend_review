import Test from "../Test"
import { useState } from "react";


export default function StudentListItem(props) {
  const [expandedStudentIds, setExpandedStudentIds] = useState([]);
  const [inputValue, setInputValue] = useState({});
  const [students, setStudents] = useState(props.students);
  

  const student = props.student;
  const avg = props.avg;
  
  function addTag(studentId, event) {
    if (event.key === "Enter") {
      const copy = [...students];
      const newStudents = copy.map((student) => {
        if (student.id === studentId && event.target.value.length > 0) {
          student.tags.push(event.target.value);
        }
        return student;
      });
      setStudents(newStudents);
      setInputValue[studentId] = "";
      event.target.value = "";
    }
  }


  function toggleSymbol(studentId) {
    if (expandedStudentIds.includes(studentId)) {
      const copy = [...expandedStudentIds];
      const newExpandedStudentIds = copy.filter((id) => {
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
          <img src={student.pic} alt={student.firstName.concat(" " , student.lastName)} />
        </div>

        <div className="about--profile-corewrapper">
          <div className="about--profile-blurb-top-wrapper">
            <p className="about--profile-blurb-top-name">
              <b>
                {student.firstName.toUpperCase()}{" "}
                {student.lastName.toUpperCase()}
              </b>
            </p>

            <button
              className="about--profile-blurb-sign"
              onClick={() => toggleSymbol(student.id)}
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

            <Test student={student} expandedStudentIds={expandedStudentIds} />
          </div>

       
          <div>
            <ul className="about--profile-tags">
              {student.tags.map((tag, index) => (
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
              onKeyDown={(event) => addTag(student.id, event)}
            />

          </div>
        </div>
      </article>
      <hr />
    </div>
  );
}
