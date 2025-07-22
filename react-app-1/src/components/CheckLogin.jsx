import AdminPanel from "./login/AdminPanel";
import LoginForm from "./login/LoginForm";

function isLoggedIn() {
  return Math.random() < 0.5 ? <LoginForm /> : undefined;
}
// true/false

export default function CheckLogin() {
  //   let content;

  //   if (isLoggedIn()) {
  //     content = <AdminPanel />;
  //   } else {
  //     content = <LoginForm />;
  //   }

  //   return <div>{isLoggedIn() ? <AdminPanel /> : <LoginForm />}</div>;
  return <div>{isLoggedIn() ?? <AdminPanel />}</div>;
}
