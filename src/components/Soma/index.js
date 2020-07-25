import React from "react";
import { connect } from "react-redux";

import Card from "../Card";
import mapStateToProps from "../mapStateToProps";

function Soma(props) {
  const { min, max } = props;
  return (
    <Card title="Soma dos Números" blue>
      <div className="Intervalo">
        <span>
          <span>Resultado: </span>
          <strong>{min + max}</strong>
        </span>
      </div>
    </Card>
  );
}

export default connect(mapStateToProps)(Soma);
