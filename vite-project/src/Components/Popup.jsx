import styles from "./Popup.module.scss";

export const Popup = ({ text, button, children }) => {
    return (
        <div className={styles.popup}>
            <div className={styles.content}>
                <h2>Aviso</h2>
                <p>{text}</p>
                {children}
                {button}
            </div>
        </div>
    );
};