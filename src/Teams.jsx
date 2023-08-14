const Teams = ({ teamName, handleTeamSelectionChange }) => {
  return (
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
  );
};

export default Teams;
