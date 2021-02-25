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
    this.checkboxHandler = this.checkboxHandler.bind(this);
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
              <div className=" row col-lg-12">
                <div className="  col-lg-12">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <td></td>
                        <th>Id</th>
                        <th>Title</th>
                        <th>State</th>
                        <th>Labels</th>
                        <th>User</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.Datajson.map((ele, i) => {
                        return (
                          <tr key={i}>
                            <td>
                              <input  type="checkbox"  className="form-check-input"  id="exampleCheck1"  checked={ele.checked} onChange={this.checkboxHandler} />
                            </td>
                            <td>{ele.id}</td>
                            <td>{ele.title}</td>
                            <td>{ele.state}</td>
                            <td>
                              {ele.labels.map((ele1, i) => {
                                return <span key={i}>{ele1.name}</span>;
                              })}
                            </td>
                            <td>{ele.user.login}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={this.closePopup}>
                Close
              </Button>
              <Button variant="primary" onClick={this.saveChanges}>
                Save changes
              </Button>
            </Modal.Footer>
          </Modal>
        )}
        <div className="row col-lg-12 right">
          <button
            type="button"
            className="btn btn-secondary"
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
                  <th>Labels</th>
                  <th>User</th>
                </tr>
              </thead>
              <tbody>
                {this.props.Datajson.map((ele, j) => {
                  return (
                    <tr key={j}>
                      <td>{ele.id}</td>
                      <td>{ele.title}</td>
                      <td>{ele.state}</td>
                      <td>
                        {ele.labels.map((ele1, i) => {
                          return <span key={i}>{ele1.name}</span>;
                        })}
                      </td>
                      <td>{ele.user.login}</td>
                    </tr>
                  );
                })}
              </tbody>
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
    console.log("this save changes");
  }
  checkboxHandler(ev,ele){
    console.log(ev,ele)
  }
}

const mapStateToProps = (state) => ({
  Datajson: state["login"]["userData"] || [],
});

const mapDispatchToProps = (dispatch) => ({
  itemList: (article) => {},
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
