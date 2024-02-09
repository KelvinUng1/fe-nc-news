import { Link, useNavigate} from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import { getUsers } from "../api";
import Loading from "./Loading";
import RedSpinner from "./Spinner";
import { Card, Col, Row, Container} from "react-bootstrap";

//use memo/ can store previous states on button click then use memo to redirect
const Users = () => {
    const { user: currentUser, setUser: setCurrentUser } = useContext(UserContext);
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getUsers().then((fetchedUsers) => {
            setIsLoading(false);
            setUsers(fetchedUsers);
        })
        .catch((error) => {
            setError(error);
            setIsLoading(false);
          })
    }, []);

    const handleUserClick = (selectedUser) => {
      setCurrentUser(selectedUser);
      //navigate('/')
    };

    if (isLoading) {
        return (
          <>
            <Loading />
            <RedSpinner />
          </>
        );
      }
      if (error !== null) {
        return <Error error={error} />;
      }
       
    
      return (
        <>
          <h3 className="mb-3 text-center">Select Your User To Login</h3>
          <Container>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
              {users.map((user) => (
                <Col key={user.username}> 
                <Link to={`/`} style={{ textDecoration: 'none' }}onClick={() => handleUserClick(user)} className="netflix-card-link">
                  <Card className="netflix-card">
                    <Card.Img variant="top" src={user.avatar_url} className="netflix-card-image" />
                    <Card.Body>
                      <Card.Title className="netflix-card-title text-center">{user.username}</Card.Title>
                      <Card.Text className="netflix-card-text text-center">
                          Select User
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </Container>
        </>
      );
    };
    
    export default Users;
    
