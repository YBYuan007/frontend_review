import StudentListItem from "./StudentListItem";
import { useState, useEffect } from "react";
import axios from "axios";


export default function StudentList(props) {

  const URL = process.env.REACT_APP_API;
  
  const [students, setStudents] = useState([]);

  const filterTags = props.filterTags;
  const filterWords = props.filterWords;

  useEffect(() => {
    axios
      .get(URL)
      .then((original) => {
        for (let i of original.data.students) {
          i.tags = [];
        }
        setStudents(original.data.students);
      });
  }, [URL]);

  const eachStudent = students
    .filter((student) =>
      student.firstName
        .concat(" ", student.lastName)
        .toUpperCase()
        .includes(filterWords.toUpperCase())
    )
    .filter(function (student) {
      if (filterTags.length > 0) {
        if (
          student.tags.filter((tag) =>
            tag.toUpperCase().includes(filterTags.toUpperCase())
          ).length > 0
        ) {
          return student;
        } else {
          return null;
        }
      } else {
        return student;
      }
    })
    .map((student) => (
      <StudentListItem key={student.id} student={student} students={students} 
      avg = {props.avg}/>
    ));

  return <div>{eachStudent}</div>;
}
