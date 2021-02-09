import React from "react";
import { connect } from "react-redux";
import { login, loginApi } from "../../actions/login";
import history from "../../history";
import "../../../src/style.css";
import GitHubLogin from "react-github-login";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onSuccessGithub = this.onSuccessGithub.bind(this);
    this.onFailure = this.onFailure.bind(this);
  }
  render() {
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Login with Github</h1>
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
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  onSuccessGithub: (userData) => {
    dispatch(login(userData));
    dispatch(loginApi(userData));
    // history.push("/user");
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
