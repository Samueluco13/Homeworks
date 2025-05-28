import {news} from "../utils/data"
import styles from "./Principal.module.scss"

const Principal = () => {
    
    return (
        <div className={styles.noticias} >
            <h1>El Chismosillo</h1>
            <ul>
                {news.map((item) => (
                    <li key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Principal;