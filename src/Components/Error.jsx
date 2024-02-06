const Error = ({ error }) => {
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card error-card text-center" style={{ width: "18rem" }}>
        <div className="card-body">
          <h4 className="card-title">Oops! Something went wrong</h4>
          <p className="card-text">
            An error occurred while trying to fetch data:
            {error.status} {error.statusText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;
