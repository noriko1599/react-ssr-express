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
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.6.3/rxjs.umd.min.js"
          integrity="sha512-JnZPWAckMDks0CCIeGznqEo7ifmYK7VowHq/NVFlSXGkwxv4OBCJFy7nouOtJZmVldHo7FQLIdeWTI55yyZc4Q=="
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        {children}

        <script src="/public/js/log.js"></script>
      </body>
    </html>
  );
};
