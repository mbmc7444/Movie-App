
import React from "react";
import "./Detail.css";
import "../Reset.css";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        console.log(location.state)
        if (location.state === undefined) {
            history.push("/")
        }
    }
    render() {
        const { location } = this.props
        if (location.state) {
            return (
                <div className="detail-wrap">
                    <div className="detail-img">
                        <img src={location.state.largeImage}></img>
                    </div>
                    <div className="detail-text">
                        <div className="title">{location.state.title}</div>
                        <div className="des">
                            <span className="year">{location.state.year}</span>
                            <span className="rating">{location.state.rating}</span>
                            <span className="genres">{location.state.genres}</span>
                        </div>
                        <p className="summary">{location.state.summary}</p>
                    </div>
                </div>
            )
        }
        else {
            return null
        }
    }
}
export default Detail;