import Header from "./Header";
import SchoolCatalog from "./SchoolCatalog";
import ClassSchedule from "./ClassSchedule";
import { CourseProvider, CourseContext } from "./CourseContext";
import { useContext } from "react";

// Optional component to show enrolled course count in header
function CourseCount() {
  const { enrolledCourses } = useContext(CourseContext);
  return <span> ({enrolledCourses.length} courses)</span>;
}

export default function App() {
  return (
    <CourseProvider>
      <div>
        <Header>
          <CourseCount />
        </Header>
        <SchoolCatalog />
        <ClassSchedule />
      </div>
    </CourseProvider>
  );
}
