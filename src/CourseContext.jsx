import {createContext, useState} from "react";

export const CourseContext = createContext();
export function CourseProvider({ children }) {
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    const enrollCourse = (course) => {
        serEnrolledCourses((prev) => {
            if (!prev.some((c) => c.id === course.id)) {
                return [...prev, course];
            }
            return prev;
        });
    };

    const dropCourse = (courseId) => {
        serEnrolledCourses((prev) => prev.filter((c) => c.id !== courseId));
    };

    return (
        <CourseContext.Provider
        value={{ enrolledCourses, enrollCourse, dropCourse}}
        >
            {children}
        </CourseContext.Provider>
    );
}
