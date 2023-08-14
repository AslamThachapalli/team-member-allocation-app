import { useState } from "react";

const GroupedTeamMembers = ({ employees, teamName, setTeamName }) => {
  const [groupedEmployees, setGroupedData] = useState(
    getCorrespondingTeamMembers()
  );

  function getCorrespondingTeamMembers() {
    var teams = [];

    const teamNames = ["TeamA", "TeamB", "TeamC", "TeamD"];

    for (var i in teamNames) {
      var name = teamNames[i];

      var members = employees.filter((employee) => employee.teamName === name);
      var filteredEntry = {
        team: name,
        teamMembers: members,
        isCollapsed: teamName === name ? false : true,
      };
      teams.push(filteredEntry);
    }

    return teams;
  }

  function handleTeamCardClick(event) {
    var transformedGroupData = groupedEmployees.map((groupData) =>
      groupData.team === event.currentTarget.id
        ? { ...groupData, isCollapsed: !groupData.isCollapsed }
        : groupData
    );

    setGroupedData(transformedGroupData);
    setTeamName(event.currentTarget.id);
  }

  return (
    <main className="container">
      {groupedEmployees.map((item) => {
        return (
          <div
            key={item.team}
            className="card mt-2"
            style={{ cursor: "pointer" }}
          >
            <h4
              id={item.team}
              className="card-header text-secondary bg-white"
              onClick={handleTeamCardClick}
            >
              Team Name: {item.team}
            </h4>

            <div
              id={"collapse_" + item.team}
              className={item.isCollapsed ? "collapse" : ""}
            >
              {item.teamMembers.map((member) => {
                return (
                  <div key={member.fullName} className="mt-2">
                    <h5 className="card-title mt-2">
                      <span className="text-dark">
                        Full Name: {member.fullName}
                      </span>
                    </h5>
                    <p>Designation: {member.designation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default GroupedTeamMembers;
