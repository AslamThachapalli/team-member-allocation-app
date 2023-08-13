const Header = ({ teamName, memberCount }) => {
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-10">
          <h1>Team Member Allocation</h1>
          <h3>
            {teamName} has {memberCount} members
          </h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
