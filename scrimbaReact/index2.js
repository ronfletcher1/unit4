import React from "react";
import ReactDOM from "react-dom";


// Functional Components
function MyApp() {
    return (
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>)
}

// JSX
ReactDOM.render(
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>, 
    document.getElementById("root")
);

// Calling the component
ReactDOM.render(
    <MyApp />,
    document.getElementById("root")
)

import React from "react";
import ReactDOM from "react-dom";

function MyInfo() {
    return (
        <div>
            <h1>Ron Fletcher</h1>
            <p>Developer in training</p>
            <ul>
                <li>Caymen</li>
                <li>Italy</li>
                <li>Dominican Republic</li>
            </ul>
        </div>
    )
    };

    ReactDOM.render(
        <MyInfo />,
        document.getElementById("root")
    )


    import MyInfo from "./MyInfo"