export default function Test(props) {
  const student = props.student;
  const expandedStudentIds = props.expandedStudentIds;

  const obtainScore = function (grades) {
    return grades.map(function (grade, index) {
      return (
        <li id="test_number">
          Test {index + 1}:     {grade}%
        </li>
      );
    });
  };

  return (
    <div>
      {expandedStudentIds.includes(student.id) ? (
        <ul className="about--profile-blurb-test_scores">
          {obtainScore(student.grades)}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}
