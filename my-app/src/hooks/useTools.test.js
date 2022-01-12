import {avg} from "./useTools";

describe("avg function", () => {
  it ("calculates the average of an array of scores in character format", ()=> {
    const scores = ["97", "98", "99"];
    const actualResult = avg(scores); 
    const expectedResult = "98%"; 
    expect(actualResult).toEqual(expectedResult); 
  }); 

  it ("calculates the average of an array of scores in character format and show three decimals if it is needed", ()=> {
    const scores = ["78", "100", "92","86", "89", "88","91", "87"];
    const actualResult = avg(scores); 
    const expectedResult = "88.875%"; 
    expect(actualResult).toEqual(expectedResult); 
  }); 

  it ("calculates the average of an array of scores in number format", ()=> {
    const scores = [97, 98, 99, 100];
    const actualResult = avg(scores); 
    const expectedResult = "98.5%"; 
    expect(actualResult).toEqual(expectedResult); 
  }); 

  it ("return null if the array is empty or it is not an array ", ()=> {
    const scores1 = [];
    const scores2 = "abc";
    const actualResult1 = avg(scores1); 
    const actualResult2 = avg(scores2); 
    const expectedResult = null;
    expect(actualResult1).toEqual(expectedResult); 
    expect(actualResult2).toEqual(expectedResult); 
  }); 

});
