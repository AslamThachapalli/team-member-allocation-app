import "./App.css";
import Teams from "./Teams";
import TeamMember from "./TeamMember";

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
            <Teams
              teamName={teamName}
              handleTeamSelectionChange={handleTeamSelectionChange}
            />
          </div>
        </div>

        <div className="row justify-content-center">
          <TeamMember
            teamName={teamName}
            employees={employees}
            handleEmployeeCardClick={handleEmployeeCardClick}
          />
        </div>
      </div>
    </main>
  );
};

export default Employees;
