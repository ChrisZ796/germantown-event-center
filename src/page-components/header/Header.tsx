import { FaCircleUser, FaRegStar, FaArrowLeft, FaSuitcase } from "react-icons/fa6";
import styles from "./header.module.css";
import { useState } from "react";
import { useRouter } from "@tanstack/react-router";

type HeaderProps = {
    name: string;
    username: string | undefined;
    isOrg?: boolean | undefined;
};

export function Header({ name, username, isOrg }: HeaderProps) {
    const [isOrgState, setIsOrgState] = useState(isOrg);
    const router = useRouter();

    return (
        <div className={styles.headerContainer}>
            <header className={styles.header}>
                <FaCircleUser size={96} className={styles.icon} />
                <div className={styles.profileInfo}>
                    <strong className={styles.name}>{name}</strong>
                    <p className={styles.username}>{username}</p>
                </div>
                <div className={styles.buttons}>
                    {isOrgState && <FaSuitcase size={32} className={styles.orgIcon} />}
                    <FaArrowLeft size={32} className={styles.backButton} onClick={() => router.history.back()} />
                </div>
            </header>
            {isOrgState && (
                <button className={styles.favoritesButton} onClick={() => {}}>
                    <FaRegStar className={styles.favoritesIcon} size={48} role='img'/>
                </button>
            )}
        </div>
    );
}