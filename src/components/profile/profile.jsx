import styles from "./profile.module.css";

const Profile = ({ children, imgsrc, imgalt }) => {
  return (
    <div id={styles.profile}>
      <img src={imgsrc} alt={imgalt} />
      <p>{children}</p>
    </div>
  );
};

export default Profile;
