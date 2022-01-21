import "@testing-library/jest-dom";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { avg } from "../../hooks/useTools";
import StudentListItem from "../StudentList/StudentListItem";

afterEach(cleanup);

describe("each student", () => {


  const student = {
    email: "test@test.org",
    firstName: "ttfirstname",
    grades: ["71", "81", "72", "51", "79", "82", "91", "90"],
    id: "999",
    lastName: "ttlastname",
    pic: "https://media.istockphoto.com/photos/kitten-exploring-domestic-setting-picture-id1335433001?s=612x612",
    skill: "testing skill",
  };

  it("renders with student name", () => {
    const { getByTestId } = render(
      <StudentListItem student={student} />
    );
    // console.log(getByTestId("student-name"));
    expect(getByTestId("student-name")).toHaveTextContent("TTFIRSTNAME") // comparing object with text... wrong!!
    //expect can receive html as parameter 
    // call getByTest --> return html 
    // toEqual ?? to compare number  / string , or normal object {"abc":123}, not html object 
    // deep Equal 
    //toHaveTextContent -- compare html object? 
  });

  it ("should have default state of symbol: + ", () => {
    const { getByText} = render(<StudentListItem   student={student}/>)
    expect(getByText('+')).toBeInTheDocument()
  })

  // it ("should have change to another state of symbol: - after the click", () => {

  //   const {getByText} = render (<StudentListItem />)
  //   const symbolTest = getByText("+");
  //   fireEvent.click(symbolTest)
  //   expect(symbolTest).toHaveValue("-")

  // })

  // it ("should change back to the default state of symbol: +  after click again", () => {
  //   // const {} = render (<StudentListItem />)

  // })
});
