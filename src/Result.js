import React, {Component} from 'react';
import axios from 'axios'; 
import LikeWithStorage from "./LikeWithStorage";

export default class Result extends Component {
    constructor() {
        super();
        this.state = {
            exercises: [],
            date: "",
            explanation: "",
            title: "",
            url: "",
            loaded: false
        };
    }

    componentDidMount() {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=4kIbXqZMDhA3ewZCeRnstDZmnjWmIS86QqYIuQTW')
            .then(response => {
              this.setState({
                    exercises: response.data,
                    date: response.data.date,
                    explanation: response.data.explanation,
                    title: response.data.title,
                    url: response.data.url,
                    loaded: true
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    render() {
        let content = (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
        if (this.state.loaded == true) {
            content = (
                <div className="card mb-3">
                    <img src={this.state.url} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.title}</h5>
                        <p className="card-text">{this.state.explanation}</p>
                        <p className="card-text">{<LikeWithStorage></LikeWithStorage>}</p>
                    </div>
                </div>
            )
        }

        return (
            <React.Fragment>
                {content}
            </React.Fragment>
        )
    }
}
