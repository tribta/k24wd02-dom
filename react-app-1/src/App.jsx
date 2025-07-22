import AboutPage from "./components/AboutPage";
import Avatar from "./components/Avatar";
import MyButton, { IconButton } from "./components/MyButton";
import "./App.css";
import CheckLogin from "./components/CheckLogin";
import ShoppingList from "./components/render/ShoppingList";
import YourButton from "./components/event/YourButton";
import ClickCount from "./components/storage/ClickCount";
import BootstrapButton from "./components/bootstrap/BootstrapButton";

export default function App() {
  return (
    <>
      <BootstrapButton />
      <ClickCount />
      <ClickCount />

      <CheckLogin />
      <AboutPage />
      <Avatar />
      <MyButton />
      <IconButton />
      <ShoppingList />
      <YourButton />
    </>
  );
}

// export default dùng để
// xuất main function
// export dùng để xuất
// other functions
