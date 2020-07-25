import React from "react";
import { connect } from "react-redux";

import Card from "../Card";
import mapStateToProps from "../mapStateToProps";

function Sorteio(props) {
  const { min, max } = props;
  const sort = parseInt(Math.random() * (max - min) + min);
  return (
    <Card title="Sorteio de um Número" purple>
      <div className="Intervalo">
        <span>
          <span>Resultado: </span>
          <strong>{sort}</strong>
        </span>
      </div>
    </Card>
  );
}

export default connect(mapStateToProps)(Sorteio);
