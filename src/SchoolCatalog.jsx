import { useEffect, useState } from "react";

export default function SchoolCatalog() {
  // State to hold courses fetched from API
  const [courses, setCourses] = useState([]);

  // Fetch courses when component mounts
  useEffect(() => {
    fetch("/api/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Error fetching courses:", err));
  }, []);

  return (
    <div className="school-catalog">
      <h1>School Catalog</h1>

      {/* Search input remains as-is */}
      <input type="text" placeholder="Search" />

      <table>
        <thead>
          <tr>
            <th>Trimester</th>
            <th>Course Number</th>
            <th>Courses Name</th>
            <th>Semester Credits</th>
            <th>Total Clock Hours</th>
            <th>Enroll</th>
          </tr>
        </thead>

        {/* Dynamic table body */}
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.trimester}</td>
              <td>{course.courseNumber}</td>
              <td>{course.courseName}</td>
              <td>{course.semesterCredits}</td>
              <td>{course.totalClockHours}</td>
              <td>
                <button>Enroll</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination div remains unchanged */}
      <div className="pagination">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}
