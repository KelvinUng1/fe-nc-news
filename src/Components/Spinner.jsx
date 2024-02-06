import Spinner from 'react-bootstrap/Spinner';

function RedSpinner() {
  return (
    <div className="spinner-container">
    <Spinner animation="border" role="status" variant="danger">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
  );
}

export default RedSpinner;