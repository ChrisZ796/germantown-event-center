import styles from "./sidebar.module.css";
import { useNavigate, Link } from "@tanstack/react-router";


const items = ["Home", "Explore", "Directory", "Post", "Updates", "Profile"];
const icons = [
  "/icons/home.png",
  "/icons/search.png",
  "/icons/folder.png",
  "/icons/plus.png",
  "/icons/notification.png",
  "/icons/account.png"
];

export default function Sidebar() {
    const navigate = useNavigate();
    const currentPath = location.pathname;
    currentPath.toLowerCase();
    return (
        <div className={styles.sidebar}>
            {/* <div className = "logo">
                <img src="GEC.png" width="50" height="50" style={{padding: 8}}></img>
                <span style={{fontSize: 20, fontWeight: "bold", verticalAlign: "left", paddingBottom: 20}}>Germantown Event Center</span>
            </div> */}
            <ul className="space-y-4" style = {{cursor:'pointer'}}>
                {items.map((item, i) => (
                    <li key={i}>
                        <img src = {icons[i]} className = {styles.icon} />
                        <Link to={`/${item.toLowerCase()}`} className={currentPath === `/${item.toLowerCase()}` ? styles.active : styles.item}>{item}</Link>
                    </li>))}
            </ul>
        </div>
    );
}