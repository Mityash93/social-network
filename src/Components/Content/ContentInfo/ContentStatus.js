import React from "react";

class ContentStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activeEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactiveEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (event) => {
    this.setState({
      status: event.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps, prevState){
    if (prevProps.status !== this.props.status) {
        this.setState({
            status: this.state.status
        })
    }
  }

  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactiveEditMode}
              value={this.state.status}
            />
          </div>
        ) : (
          <div>
            <span onClick={this.activeEditMode}>{this.props.status}</span>
          </div>
        )}
      </div>
    );
  }
}

export default ContentStatus;
