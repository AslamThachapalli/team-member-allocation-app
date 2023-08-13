const Footer = () => {
  var today = new Date();

  return (
    <footer>
      <div className="container">
        <div className="row justify-content-center mt-3 mb-4">
          <div className="col-10">
            <h5>Team Member Allocation - {today.getFullYear()}</h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
