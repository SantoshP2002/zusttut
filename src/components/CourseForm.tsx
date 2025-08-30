import { useState } from "react";
import useCourseStore from "../app/courseStore";

const CourseForm = () => {
  const [courseTitle, setCourseTitle] = useState("");
  console.log("CourseForm render");

  const addCourse = useCourseStore((state) => state.addCourse);

  const handleCourseSubmit = () => {
    if (!courseTitle) return alert("Please enter a course title");
    addCourse({
      id: Math.ceil(Math.random() * 100000),
      title: courseTitle,
      completed: true,
    });
      setCourseTitle('');
  };

  return (
    <div className="form-container">
      {/* INPUT */}
      <input
        value={courseTitle}
        onChange={(e) => setCourseTitle(e.target.value)}
        type="text"
        className="form-input"
      />

      {/* BUTTON */}
          <button
              onClick={() => {handleCourseSubmit()}}
              className="form-submit-btn">
        ADD COURSE
      </button>
    </div>
  );
};

export default CourseForm;
