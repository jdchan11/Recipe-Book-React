import { Container, Row, Col } from "react-bootstrap";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { store } from '../src/components/Redux/store'
import { Home, Login, Signup, Recipe, Search, Landing } from "./components/Pages";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from './context/userAuthContext';


function App() {
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Provider store={store}>
            <Routes>
              <Route path="/" element = {<Landing />} />
              <Route path='/home' element = {
                                              <ProtectedRoute>
                                                <Home />
                                              </ProtectedRoute>} />
              <Route path="/recipes" element={
                                              <ProtectedRoute>
                                                <Recipe />
                                              </ProtectedRoute>} />
              <Route path="/search" element={
                                              <ProtectedRoute>
                                                <Search />
                                              </ProtectedRoute>} />
              <Route path="/signin" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
            </Provider>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;