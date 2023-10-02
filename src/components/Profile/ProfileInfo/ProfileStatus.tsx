import React from "react";

type PropsType = {
    status: string 
    updateStatus: (NewStatus: string) => void
}

type StateType = {
    editeMode: boolean
    status: string 
}

class ProfileStatus extends React.Component<PropsType, StateType> {
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

    onStatusChange = (e: ChangeEventHandler<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate  (prevProps: PropsType, prevState: StateType) {
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


















