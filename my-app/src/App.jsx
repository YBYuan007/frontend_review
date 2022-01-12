
import { useState } from "react";
import "./App.scss";
import StudentList from "./components/StudentList/Index";
import {avg} from "./hooks/useTools";

function App(props) {
  const [filterTags, setFilterTags] = useState("");
  const [filterWords, setFilterWords] = useState("");


  return (
    <div>
      <p>
        <input
          placeholder="Search by name"
          className="filter"
          type="text"
          value={filterWords}
          onChange={(event) => setFilterWords(event.target.value)}
        />
      </p>

      <p>
        <input
          placeholder="Search by tag"
          className="filter"
          type="text"
          value={filterTags}
          onChange={(event) => setFilterTags(event.target.value)}
        />
      </p>

      {/* <section className="page--wrapper">{eachStudent}</section> */}
      <section className="page--wrapper">
        <StudentList filterWords={filterWords} filterTags={filterTags} avg = {avg}  />
      </section>
    </div>
  );
}

export default App;
