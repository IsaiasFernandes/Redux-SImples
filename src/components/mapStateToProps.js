const mapStateToProps = (state) => {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
};

export default mapStateToProps;
