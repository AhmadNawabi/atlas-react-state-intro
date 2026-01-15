import { useEffect, useState } from "react";

export default function SchoolCatalog() {
  const [courses, setCourses] = useState([]);       // All courses from API
  const [search, setSearch] = useState("");         // Search input value

  useEffect(() => {
    fetch("/api/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Error fetching courses:", err));
  }, []);

  // Filter courses based on search input (Course Number or Course Name)
  const filteredCourses = courses.filter((course) => {
    const searchLower = search.toLowerCase();
    return (
      course.courseNumber.toLowerCase().includes(searchLower) ||
      course.courseName.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="school-catalog">
      <h1>School Catalog</h1>

      {/* Search input updates state in real-time */}
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

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

        <tbody>
          {filteredCourses.map((course) => (
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

      <div className="pagination">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}
