import React from "react";
import { connect } from "react-redux";
import { login, loginApi } from "../../actions/login";
import history from "../../history";
import "../../../src/style.css";
import GitHubLogin from "react-github-login";
import { Button, Form } from "react-bootstrap";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loggedin: "",
      errors: [],
    };
    this.onSuccessGithub = this.onSuccessGithub.bind(this);
    this.onFailure = this.onFailure.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this)
  }
  render() {
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <Form noValidate onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={this.state.email}
                    onChange={(e) => {
                      this.setState({ email: e.target.value });
                    }}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={(e) => {
                      this.setState({ password: e.target.value });
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Check me out"
                    value={this.state.loggedin}
                    onChange={(e) => {
                      this.setState({ loggedin: e.target.value });
                    }}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              <GitHubLogin
                clientId="853e1842dfdc6900376e"
                onSuccess={this.onSuccessGithub}
                onFailure={this.onFailure}
                buttonText="LOGIN WITH GITHUB"
                className="git-login"
                valid={true}
                redirectUri=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  onSuccessGithub(ev) {
    this.props.onSuccessGithub(ev);
  }
  onFailure(ev) {
    console.log(ev);
  }
  handleSubmit(ev) {
    ev.preventDefault();
    console.log(ev);
    this.props.handleSubmit(this.state)
  }
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  onSuccessGithub: (userData) => {
    dispatch(login(userData));
    dispatch(loginApi(userData));
    // history.push("/user");
  },
  handleSubmit: (userData) =>{
    dispatch(login)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
