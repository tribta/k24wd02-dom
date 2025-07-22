import { useState } from "react";

export default function ClickCount() {
  // Để lưu trữ data bên trong component và
  //  không bị reset thì sử dụng useState()

  // mỗi một giá trị count sẽ được lưu trữ ở các state khác nhau,
  // trong trường hợp gọi component 2 lần.
  const [count, setCount] = useState(0);
  // const = 0

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={handleClick}>Click {count} times.</button>
    </div>
  );
}
