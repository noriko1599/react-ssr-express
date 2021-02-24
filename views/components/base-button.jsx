var React = require("react");

const style = {
  color: "red",
};

module.exports = function BaseButton({ label, onClick, disabled }) {
  return (
    <button onClick={onClick} style={style} disabled={disabled}>
      {label}
    </button>
  );
};
