import React from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.itemList = this.itemList.bind(this);
    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
  }
  itemList(art) {
    this.props.itemList(art);
  }

  render() {
    return (
      <div className=" card-position1">
        {this.state.show && (
          <Modal
            size="lg"
            show={this.state.show}
            backdrop="static"
            keyboard={false}
            animation={true}
          >
            <Modal.Header closeButton onClick={this.closePopup}>
              <Modal.Title>Add to Warch List</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <div className=" row">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <td></td>
                      <th>Id</th>
                      <th>Title</th>
                      <th>State</th>
                      <th>User</th>
                    </tr>
                  </thead>
                  {this.props.Datajson.map((ele) => {
                    return (
                      <tr>
                        <tr>
                          {" "}
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="exampleCheck1"
                          />
                        </tr>
                        <td>{ele.id}</td>
                        <td>{ele.title}</td>
                        <td>{ele.state}</td>
                        <td>{ele.user.login}</td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={this.closePopup}>
                Close
              </Button>
              <Button variant="primary" onClick={this.saveChanges} >Save changes</Button>
            </Modal.Footer>
          </Modal>
        )}
        <div className="row col-lg-12 right">
          <button
            type="button"
            class="btn btn-secondary"
            onClick={this.openPopup}
          >
            Add to Watch List
          </button>
        </div>
        <div className="row col-lg-12">
          <div className="col-lg-8">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>State</th>
                  <th>User</th>
                </tr>
              </thead>
              {this.props.Datajson.map((ele) => {
                return (
                  <tr>
                    <td>{ele.id}</td>
                    <td>{ele.title}</td>
                    <td>{ele.state}</td>
                    <td>{ele.user.login}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    );
  }
  openPopup(ev) {
    // this.state.show =true
    this.setState({ show: true });
  }
  closePopup(ev) {
    this.setState({ show: false });
  }
  saveChanges(ev) {
    console.log('this save changes')
  }
}

const mapStateToProps = (state) => ({
  Datajson: state["login"]["userData"] || [],
});

const mapDispatchToProps = (dispatch) => ({
  itemList: (article) => {},
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
