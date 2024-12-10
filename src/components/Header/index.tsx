import { Avatar } from "antd";
import styles from "./index.less";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="headerLeft">
        <img
          src={require("@/assets/logoFinal.png")}
          className="logoImage"
          alt=""
        />
      </div>
      <div className="headerCenter animate__animated animate__heartBeat">
        MaxoutModel图片库
      </div>
      <div className="headerRight">
        <Avatar src={require("@/assets/logo.png")} size={50} />
      </div>
    </div>
  );
};
export default Header;
