const Summary = () => {
  return (
    <>
      <div className="display-6">College summary</div>
      <hr />
      <div>
        Requirement 7: The system should provide the following summary online
        reports:
        <ul>
          <li>
            The highest, lowest, and average GPA of students of each major.
          </li>
          <li>
            Which department has the highest student average GPA, and which has
            the lowest? Rank all departments beginning from the one with the
            highest student average GPA.
          </li>
          <li>
            Semester by semester, display the total enrollments and the average
            grade of each course. The average grade is calculated by assuming 4
            points for grade A and S, 3 points for B, 2 points for C, 1 point
            for D, and 0 point for F, U, and I.
          </li>
          <li>
            For each instructor, list total students by major of every course
            he/she teaches regardless semester.
          </li>
          <li>
            List all students by major and, within each major, sort students by
            their total credits of courses taken in descending order, i.e., for
            a major, say, MATH, all students of this major are listed together
            but the one with the most total course credits is listed at top.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Summary;
