/* sarahG/Music emotion
 *
 * /src/component/homepage.js - page home for app
 *
 * coded by SarahG
 * started at 07/07/2020
 */

import React from "react";
import {NBSP} from "../core/constantes";
import "../style/mystyle.css";
import image from "../assets/nature-3082832_640.jpg";
import PlayList from "./playlist";
import PlayListLet from "./playlistlittle";
// import logo from "../assets/ohun_logo.jpg";

const HomePage = () => (
    <div className={"container-sg"}>
        <nav
            role={"navigation"}
            aria-label={"dropdown navigation"}
            className={["navbar", "color-sg", "px-2", "py-2", "sg-full"].join(
                " ",
            )}>
            <div className={"navbar-brand"}>
                <a className={"navbar-item"}>
                    <h1
                        className={[
                            "title",
                            "has-text-white-ter",
                            "font-sg",
                            "is-1",
                        ].join(" ")}>
                        <span className={"logo-sg"}>{"o"}</span>
                        {"hun"}
                    </h1>
                    {/* <img
                        className={"image is-128x128"}
                        height={"128px"}
                        width={"128px"}
                        src={logo}
                    /> */}
                </a>
            </div>
            <div className={["navbar-menu"].join(" ")}>
                <div className={["navbar-end", "sg-end"].join(" ")}>
                    <div
                        className={[
                            "navbar-item",
                            "has-dropdown",
                            "is-hoverable",
                        ].join(" ")}>
                        <a className={"navbar-link"}>
                            <span className={["icon", "s-size-5"].join(" ")}>
                                <i
                                    className={[
                                        "fas fa-users",
                                        "has-text-white-ter",
                                        "sg-profilicon",
                                    ].join(" ")}
                                />
                            </span>
                        </a>
                        <div className={"navbar-dropdown is-boxed"}>
                            <a className={"navbar-item"}>{"Profil"}</a>
                            <a className={"navbar-item"}>{"Favorite"}</a>
                            <a className={"navbar-item"}>{"Deconnection"}</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        {NBSP}
        <section className={"section"}>
            <div className={"columns"}>
                <div className={"control column is-two-fifths"}>
                    <div>
                        <figure>
                            <figcaption>
                                <div className={"columns is-half"}>
                                    <div className={"column is-half"}>
                                        <figure className={"image is-148x148"}>
                                            <img src={image} />
                                        </figure>
                                    </div>
                                    <div className={"column is-half"}>
                                        <p
                                            className={
                                                "title is-6 mt-6 sg-p-fi"
                                            }>
                                            {"Track 03 - @johnSmith"}
                                        </p>
                                    </div>
                                </div>
                            </figcaption>
                            <audio controls src={"..."}>
                                {"Your browser does not support the"}
                                <code>{"audio"}</code> {"element."}
                            </audio>
                        </figure>

                        <div className={"mt-4"}>
                            <h2 className={"br-sg title ml-3 pt-3 pb-4 pl-4"}>
                                {"My Play List"}
                            </h2>
                            <PlayListLet />
                        </div>
                    </div>
                </div>

                <div className={"column is-fullwidth"}>
                    <div className={"columns is-two-thirds"}>
                        <div className={"column is-three-quarters sg-h"}>
                            <input
                                className={
                                    "input is-large is-three-quarters is-hovered "
                                }
                                type={"text"}
                                placeholder={"search"}
                            />
                        </div>
                        <div className={"column is-one-quarter "}>
                            <button
                                className={"button sg-c is-large"}
                                type={"submit"}>
                                {"Search"}
                            </button>
                        </div>
                    </div>
                    <div className={"sgr"} />
                    <PlayList />
                </div>
            </div>
        </section>
    </div>
);

export default HomePage;
