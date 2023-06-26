import "./App.css";
import Course from "./Course";
import {useState} from 'react'

function getRandomArray(){
  const courseArray = ['Angular' , 'Boostrap' , 'Ccsharp' , 'AllWebStudy'];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}


function App() {
  const [course, setCourse] = useState([])
  const handleClick = () => {
    setCourse([...course , getRandomArray()])
  }
  const arrayList = course.map((courses , index) => {
    return <Course courseName={courses} key={index}></Course>
  });
  return (
    <div className="App">
      <button onClick={handleClick}>Kurs Ekle</button>
      <div className="classList">{arrayList}</div>
    </div>
  );
}

export default App;
