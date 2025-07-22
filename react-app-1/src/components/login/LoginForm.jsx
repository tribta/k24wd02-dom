export default function LoginForm() {
  return (
    <div>
      <form action="#">
        <label htmlFor="email">Enter Your Email</label>
        <input id="email" type="text" />
        <label htmlFor="password">Enter Your Password</label>
        <input id="password" type="text" />
      </form>
    </div>
  );
}
