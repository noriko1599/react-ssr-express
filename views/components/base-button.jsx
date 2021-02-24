var React = require("react");

const style = {
  color: "red",
};

module.exports = function BaseButton({ label, onClick, disabled, id }) {
  return (
    <button id={id} onClick={onClick} style={style} disabled={disabled}>
      {label}
    </button>
  );
};
