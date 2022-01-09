import React, {Component} from "react";

class LikeWithStorage extends Component {
    constructor() {
        super();
        this.state = JSON.parse(window.localStorage.getItem('state')) || {
            liked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            liked: !this.state.liked,
        });
    }

    setState(state) {
        window.localStorage.setItem('state', JSON.stringify(state));
        super.setState(state);
    }

    render() {
        const text = this.state.liked ? "liked" : "haven't liked";
        const label = this.state.liked ? "Unlike" : "Like";
        const className = this.state.liked ? "btn btn-primary" : "btn btn-secondary";


        return (
            <div>
                <button className={className} onClick={this.handleClick}>
                    {label}
                </button>
            </div>
        );
    }
}

export default LikeWithStorage;
