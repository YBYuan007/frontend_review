import StudentList from '../StudentList/Index'; 
import "@testing-library/jest-dom";
import {render} from '@testing-library/react'; 

describe ("test StudentList", () => {
  it ("renders without crashing", ()=> {
   render(<StudentList />)
  })
})