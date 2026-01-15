import { createContext, useState } from "react";

export const CourseContext = createContext();

export function CourseProvider({ children }) {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enrollCourse = (course) => {
    setEnrolledCourses((prev) => {
      // Use courseNumber as unique identifier
      if (!prev.some((c) => c.courseNumber === course.courseNumber)) {
        return [...prev, course];
      }
      return prev;
    });
  };

  const dropCourse = (courseNumber) => {
    setEnrolledCourses((prev) =>
      prev.filter((c) => c.courseNumber !== courseNumber)
    );
  };

  return (
    <CourseContext.Provider value={{ enrolledCourses, enrollCourse, dropCourse }}>
      {children}
    </CourseContext.Provider>
  );
}
