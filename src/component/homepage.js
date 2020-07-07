/* sarahG/Music emotion
 *
 * /src/component/homepage.js - page home for app
 *
 * coded by SarahG
 * started at 07/07/2020
 */

import React from "react";
import {render} from "react-dom";

const HomePage = () => {
    render(
        <div className={["container", "is-fullhd"].join(" ")}>
            <h1 className={"title"}>Ohun</h1>
            <input label={"recherche"} />
        </div>,
    );
};
