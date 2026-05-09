const ModifyCourses = () => {
  return (
    <>
      <div className="display-6">Modify Courses</div>
      <hr />
      <div>
        Requirement 1: Staff users of the system can add, remove, or modify data
        of courses, instructors, students, and everything about the department
        they belong to. They can assign or change courses for an instructor to
        teach only if the staff and instructor belong to the same department.
        However, they cannot register/withdraw students into/from a course.
      </div>
    </>
  );
};

export default ModifyCourses;
