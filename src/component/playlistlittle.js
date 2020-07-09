/* sarahG/Music emotion
 *
 *
 *
 * coded by SarahG
 * started at 07/07/2020
 */
import React from "react";
import "../style/mystyle.css";

const PlayListLet = () => (
    <div className={"is-scrollable"}>
        <div className={"card sg-let"} />
        <div className={"card-content sg-let pad-sg"}>
            <i className={"far fa-play-circle sg-iconlit"} />
            <i className={"fas fa-ellipsis-v sg-iconpar"} />
            <div className={"media"}>
                <div className={"media-left"}>
                    <figure className={"image is-48x48"}>
                        <img
                            src={
                                "https://bulma.io/images/placeholders/96x96.png"
                            }
                            alt={"Placeholder image"}
                        />
                    </figure>
                </div>
                <div className={"media-content"}>
                    <p className={"title is-5"}>{"Track 01"}</p>
                    <p className={"subtitle is-6"}>{"@johnsmith"}</p>
                </div>
            </div>
        </div>
        <div className={"card sg-let"}>
            <div className={"card-content sg-let pad-sg"}>
                <i className={"far fa-play-circle sg-iconlit"} />
                <i className={"fas fa-ellipsis-v sg-iconpar"} />
                <div className={"media"}>
                    <div className={"media-left"}>
                        <figure className={"image is-48x48"}>
                            <img
                                src={
                                    "https://bulma.io/images/placeholders/96x96.png"
                                }
                                alt={"Placeholder image"}
                            />
                        </figure>
                    </div>
                    <div className={"media-content"}>
                        <p className={"title is-5"}>{"Track 02"}</p>
                        <p className={"subtitle is-6"}>{"@johnsmith"}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={"card sg-let"}>
            <div className={"card-content sg-let pad-sg"}>
                <i className={"far fa-play-circle sg-iconlit"} />
                <i className={"fas fa-ellipsis-v sg-iconpar"} />
                <div className={"media"}>
                    <div className={"media-left"}>
                        <figure className={"image is-48x48"}>
                            <img
                                src={
                                    "https://bulma.io/images/placeholders/96x96.png"
                                }
                                alt={"Placeholder image"}
                            />
                        </figure>
                    </div>
                    <div className={"media-content"}>
                        <p className={"title is-5"}>{"Track 03"}</p>
                        <p className={"subtitle is-6"}>{"@johnsmith"}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={"card sg-let"}>
            <div className={"card-content sg-let pad-sg"}>
                <i className={"far fa-play-circle sg-iconlit"} />
                <i className={"fas fa-ellipsis-v sg-iconpar"} />
                <div className={"media"}>
                    <div className={"media-left"}>
                        <figure className={"image is-48x48"}>
                            <img
                                src={
                                    "https://bulma.io/images/placeholders/96x96.png"
                                }
                                alt={"Placeholder image"}
                            />
                        </figure>
                    </div>
                    <div className={"media-content"}>
                        <p className={"title is-5"}>{"Track 04"}</p>
                        <p className={"subtitle is-6"}>{"@johnsmith"}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={"card sg-let"}>
            <div className={"card-content sg-let pad-sg"}>
                <i className={"far fa-play-circle sg-iconlit"} />
                <i className={"fas fa-ellipsis-v sg-iconpar"} />
                <div className={"media"}>
                    <div className={"media-left"}>
                        <figure className={"image is-48x48"}>
                            <img
                                src={
                                    "https://bulma.io/images/placeholders/96x96.png"
                                }
                                alt={"Placeholder image"}
                            />
                        </figure>
                    </div>
                    <div className={"media-content"}>
                        <p className={"title is-5"}>{"Track 05"}</p>
                        <p className={"subtitle is-6"}>{"@johnsmith"}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export default PlayListLet;
