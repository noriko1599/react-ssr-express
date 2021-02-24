var React = require("react");

const tableStyle = {
  fontFamily: "arial, sans-serif",
  borderCollapse: "collapse",
  width: "100%",
};

const tdthStyle = {
  border: "1px solid #dddddd",
  textAlign: "left",
  padding: "8px",
};

const trStyle = (even) => ({
  backgroundColor: even % 2 === 0 ? "#dddddd" : "",
});

module.exports = function List({ list }) {
  return (
    <table style={tableStyle}>
      <tr>
        <th style={tdthStyle}>#</th>
        {Object.keys(list[0]).map((key) => (
          <th style={tdthStyle} key={Date.now().toString()}>
            {key}
          </th>
        ))}
      </tr>

      {list.map((el, index) => (
        <tr style={trStyle(index)} key={Date.now().toString()}>
          <td style={tdthStyle}>{index + 1}</td>
          {Object.keys(el).map((key) => (
            <td style={tdthStyle} key={Date.now().toString()}>
              {el[key]}
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
};
