const e = React.createElement;

function App() {
  return e("div", null, "Hello!");
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(e(App));
