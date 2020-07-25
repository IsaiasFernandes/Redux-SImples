// Action Creator
function alterarNumeroMinimo(novoNumero) {
  return {
    type: "NUM_MIN_ALTER",
    payload: novoNumero,
  };
}

function alterarNumeroMaximo(novoNumero) {
  return {
    type: "NUM_MAX_ALTER",
    payload: novoNumero,
  };
}

module.exports = { alterarNumeroMaximo, alterarNumeroMinimo };
