const WhatIf = () => {
  return (
    <>
      <div className="display-6">What-If</div>
      <hr />
      <div>
        Requirement 6: Students and advisors can perform What-If analysis with
        one of the two scenarios and the system should provide at least one and
        possiby more suggestions
        <ul>
          <li>
            Based on a student's current GPA of courses completed, what is the
            effect to his/her GPA if N more courses are taken, each has same (or
            different) credits and ended with same (or different) grade? Here N
            is an integer like 1 or 2 or 3 or ....
          </li>
          <li>
            Suppose a student's current GPA of courses completed is X (e.g.,
            2.88). What if a new GPA, say, Y (e.g., 3.5), is desired? That is,
            how many more courses are required to take with what credits/grade
            combination of each course in order to upgrade the GPA from X to Y?
          </li>
        </ul>
      </div>
    </>
  );
};

export default WhatIf;
