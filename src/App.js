import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8084/students")
      .then(response => setStudents(response.data))
      .catch(error => console.error(error));
  }, []);

  const addStudent = () => {
    axios.post("http://localhost:8084/students", {
      id: students.length + 1,
      name: name,
      course: course   // ✅ FIXED
    })
    .then(() => {
      alert("Student added");
      window.location.reload();
    })
    .catch(error => console.error(error));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Student Management</h1>

      <h3>Add Student</h3>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={e => setCourse(e.target.value)}
      />

      <br /><br />

      <button onClick={addStudent}>Add</button>

      <h3>Students List</h3>

      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.id} - {student.name} ({student.course}) {/* ✅ FIXED */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;