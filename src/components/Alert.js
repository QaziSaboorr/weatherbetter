import React from "react";

function Alert(props) {
  return (
    props.Alert && (
      <div className="container mb5">
        <div class="alert alert-danger text-center" role="alert">
          OH OH, Please check the spelling of the city and try again
        </div>
      </div>
    )
  );
}

export default Alert;
