import "@testing-library/jest-dom";
import {render, fireEvent} from '@testing-library/react'; 

import StudentListItem from "../StudentList/StudentListItem";

// describe("tests result display interaction", () => {

//   it ("renders without crashing", ()=> {
//     render(<StudentListItem />)
//    })

//   it ("should have default state of symbol: + ", () => {
//     const { getByText} = render(<StudentListItem />)
//     expect(getByText('+')).toBeInTheDocument()
//   })

//   it ("should have change to another state of symbol: - after the click", () => {


//     const {getByText} = render (<StudentListItem />)
//     const symbolTest = getByText("+"); 
//     fireEvent.click(symbolTest)
//     expect(symbolTest).toHaveValue("-")

//   })

//   it ("should change back to the default state of symbol: +  after click again", () => {
//     // const {} = render (<StudentListItem />)

//   })
// })