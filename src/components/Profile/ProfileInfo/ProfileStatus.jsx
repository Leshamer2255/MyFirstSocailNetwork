import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editeMode: false,
        status: this.props.status
    }


    activetEditMode = () => {
        this.setState({
            editeMode: true
        })
    }

    deactivetEditMode = () => {
        this.setState({
            editeMode: false,
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate  (prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
        this.setState({
            status: this.props.status
        });
    }
}   


    render () {
  return (
    <div>
        {!this.state.editeMode &&
            <div>
                <span onDoubleClick={this.activetEditMode}>{this.props.status || "No status"}</span>
            </div>
        }
         {this.state.editeMode &&
            <div>
                <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivetEditMode} value={this.state.status} />
            </div>
        }
    </div>
        )
  }
}

export default ProfileStatus;


















