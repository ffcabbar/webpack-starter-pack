import React from 'react';
import ReactDom from "react-dom";
import "./style.scss";

const title = "HELLO WEBPACK reacttt";

ReactDom.render(
    <div className={"title"}>{title}</div>,
    document.getElementById("app")
)

module.hot.accept();