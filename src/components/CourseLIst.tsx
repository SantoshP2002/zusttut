import React from "react";
import useCourseStore from "../app/courseStore";
const CourseLIst = () => {
  const courses = useCourseStore((state) => state.courses);
  const removeCourses = useCourseStore((state) => state.removeCourses);
  const toggleCourseStatus = useCourseStore(
    (state) => state.toggleCourseStatus
  );

  return (
    <>
      <ul>
        {courses.map((course, i) => {
          return (
            <React.Fragment key={i}>
              <li
                className={`course-item`}
                style={{
                  backgroundColor: course.completed ? "#00FF0044" : "black",
                }}
              >
                {/* INPUT */}
                <span className="course-item-col-1">
                  <input
                    checked={course.completed}
                    onChange={() => {
                      toggleCourseStatus(course.id);
                    }}
                    type="checkbox"
                  />
                </span>

                <span>{course?.title}</span>
                <button
                  onClick={() => {
                    removeCourses(course.id);
                  }}
                  className="delete btn"
                >
                  Delete
                </button>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default CourseLIst;
