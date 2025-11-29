import styles from "./sidebar.module.css"

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
    return (
        <div className={styles.sidebar}>
            <div className = "logo">
                <img src="GEC.png" width="50" height="50" style={{padding: 8}}></img>
                <span style={{fontSize: 20, fontWeight: "bold", verticalAlign: "left", paddingBottom: 20}}>Germantown Event Center</span>
            </div>
            <ul className="space-y-4" style = {{cursor:'pointer'}}>
                {items.map((item, i) => (
                    <li key={i}>
                        <img src = {icons[i]} style = {{width: 40, height: 40, marginRight: 8, verticalAlign: "middle", position:'relative', left:'-5%'}} />
                        {item}
                    </li>))}
            </ul>
        </div>
    );
}