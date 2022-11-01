import React from "react";
import "./Loader.css";
import { Spinner } from "react-bootstrap";

export default function pageLoader({ spinnerSize, loaderType }) {
  return (
    <div className="loader">
      <Spinner animation="border" role="status">
        <span className="visually-hidden"></span>
      </Spinner>
    </div>
  );
}
