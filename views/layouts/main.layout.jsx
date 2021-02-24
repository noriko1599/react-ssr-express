var React = require("react");

module.exports = function MainLayout({ title, children }) {
  return (
    <html>
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </head>
      <body>{children}</body>
    </html>
  );
};
