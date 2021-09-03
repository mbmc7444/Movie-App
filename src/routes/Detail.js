
import React from "react";
import "./Routes.css";
import "../Reset.css";
import Loading from "../components/Loading";


class Detail extends React.Component {
    state = {
        isLoading: true,
    }
    componentDidMount() {
        const { location, history, isLoading  } = this.props;
        if (location.state === undefined) {
            history.push("/")
        }
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 2000);

    }

    render() {
        const { isLoading } = this.state;
        const { location } = this.props
        { console.log(isLoading) }
        if (location.state) {
            return (
                <>
                    {isLoading ? <Loading /> : (
                        <div className="bg">
                            <img src={location.state.backImage}></img>
                            <div className="container">
                                <div className="detail-wrap">
                                    <div className="detail-img">
                                        <img src={location.state.poster}></img>
                                    </div>
                                    <div className="detail-text">
                                        <div className="title">{location.state.title}</div>
                                        <div className="des">
                                            <span className="year">
                                                <em>날짜 :</em>
                                                <em>{
                                                    location.state.year.substring(0, 4)
                                                }</em>
                                            </span>
                                            <span className="rating">
                                                <em>평점 :</em>
                                                <em>{location.state.rating}
                                                </em>
                                            </span>
                                            {/* <span className="genres">{location.state.genres}</span> */}
                                        </div>
                                        <p className="summary">{location.state.overview}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </>

            )
        }
         else {
            return null
         }
    }
}

export default Detail;

