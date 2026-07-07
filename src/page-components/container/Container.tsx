import styles from "./container.module.css";

export function Container( props: { 
    className?: string | undefined;
    children: React.ReactNode 
} ) {
    return (
        <main className={`${styles.container} ${props.className || ''}`}>
            {props.children}
        </main>
    );
}