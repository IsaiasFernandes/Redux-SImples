import React from "react";
import { connect } from "react-redux";

import Card from "../Card";
import mapStateToProps from "../mapStateToProps";

function Media(props) {
  const { min, max } = props;
  return (
    <Card title="Média dos Números" green>
      <div className="Intervalo">
        <span>
          <span>Resultado: </span>
          <strong>{(min + max) / 2}</strong>
        </span>
      </div>
    </Card>
  );
}
export default connect(mapStateToProps)(Media);
