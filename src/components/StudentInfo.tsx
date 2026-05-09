const StudentInfo = () => {
  return (
    <>
      {/* Header */}
      <div className="display-6">Student summary</div>
      <hr />

      {/* Student Info */}
      <div className="p-3 text-dark">
        <div>
          <b>Name: </b>
          studentName
        </div>
        <div>
          <b>Student ID: </b>
          U123456
        </div>
        <div>
          <b>Major: </b>
          Computer Science
        </div>
        <div>
          <b>GPA: </b>
          4.0
        </div>
      </div>

      {/* Current enrollemnts table*/}
      <div className="p-3">
        <div className="h5 text-body-secondary">Current enrollments</div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Course Prefix</th>
              <th scope="col">Course Number</th>
              <th scope="col">Grade</th>
              <th scope="col">Semester</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>COP</td>
              <td>4020</td>
              <td>A</td>
              <td>F2024</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Past enrollments table */}
      <div className="p-3">
        <div className="h5 text-body-secondary">Past enrollments</div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Course Prefix</th>
              <th scope="col">Course Number</th>
              <th scope="col">Grade</th>
              <th scope="col">Semester</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>COP</td>
              <td>4020</td>
              <td>A</td>
              <td>F2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentInfo;
