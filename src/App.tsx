import "./App.css";
import CourseForm from "./components/CourseForm";
import CourseLIst from "./components/CourseLIst";

function App() {
  return (
    <div className="main-container">
      <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>
        My Course Form
      </h1>
      <CourseForm />

      <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>
        My Course List
      </h1>
      <CourseLIst/>
    </div>
  );
}

export default App;
