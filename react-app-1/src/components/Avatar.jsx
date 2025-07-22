import avatarImg from "../assets/img/avatar.jpg";

const user = {
  name: "Meow",
  imgUrl: avatarImg,
  imgSize: 90,
};

function Avatar() {
  return (
    <>
      <img
        className="avatar"
        src={user.imgUrl}
        alt={"Photo of " + user.name}
        style={{ width: user.imgSize, height: user.imgSize }}
      />
    </>
  );
}

export default Avatar;
