import femaleAvatar from "./assets/images/femaleAvatar.jpg";
import maleAvatar from "./assets/images/maleAvatar.jpg";
import "./App.css";

const Employees = ({
  employees,
  teamName,
  handleTeamSelectionChange,
  handleEmployeeCardClick,
}) => {
  return (
    <main>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <select
              className="form-select m-4"
              value={teamName}
              onChange={handleTeamSelectionChange}
            >
              <option value="TeamA">Team A</option>
              <option value="TeamB">Team B</option>
              <option value="TeamC">Team C</option>
              <option value="TeamD">Team D</option>
            </select>
          </div>
        </div>

        <div className="row justify-content-center">
          {employees.map((employee) => (
            <div
              id={employee.id}
              key={employee.id}
              className={
                employee.teamName === teamName
                  ? "col-md-4 card me-2 ms-2 mb-4 standout"
                  : "col-md-4 card me-2 ms-2 mb-4"
              }
              style={{ width: "22rem", cursor: "pointer" }}
              onClick={handleEmployeeCardClick}
            >
              {employee.gender === "male" ? (
                <img
                  src={maleAvatar}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "22rem" }}
                ></img>
              ) : (
                <img
                  src={femaleAvatar}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "22rem" }}
                ></img>
              )}
              <div className="card-body">
                <h5 className="card-title">{employee.fullName}</h5>
                <p className="card-text">
                  <b>Designation: </b>
                  {employee.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Employees;
