const React = require("react");
const MainLayout = require("./layouts/main.layout");
const List = require("./components/list");
const BaseButton = require("./components/base-button");

module.exports = function Index({ name, orders, page }) {
  return (
    <MainLayout title="Home">
      <h1>{name}</h1>

      <List list={orders}></List>

      <div
        style={{
          textAlign: "right",
        }}
      >
        <a href={`/?page=${parseInt(page) - 1}`}>
          <BaseButton label="Previus" disabled={page == 1}></BaseButton>
        </a>

        <a href={`/?page=${parseInt(page) + 1}`}>
          <BaseButton label="Next"></BaseButton>
        </a>
      </div>
    </MainLayout>
  );
};
