export default function YourButton() {
  function handleClick() {
    alert("You clicked me!");
  }

  return (
    <div>
      <button onClick={handleClick}>Click me please!</button>
    </div>
    // Nếu call function kèm () thì func sẽ thực thi trước khi browser load xong
    // Nếu call function KHÔNG kèm () thì func sẽ thực thi khi và chỉ khi user click!
  );
}
