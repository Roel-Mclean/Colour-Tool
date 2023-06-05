import { HeaderInterface } from "./header.types";
import styles from "./header.module.css"
import { FaAdjust, FaPalette } from "react-icons/fa"

export const Header = (props: HeaderInterface) => {

    return (
        <div className={styles.header}>
            <h1 className={styles.title}>Colour Tool</h1>

            <ul className={styles.list}>
                <li>Analogous</li>
                <li>Monochromatic</li>
                <li>Complementary</li>
                <li>Triad</li>
            </ul>

            <div>
                <button className={styles.button}><FaAdjust size={40} /></button>
                <button><FaPalette size={40} /></button>
            </div>
        </div>
    )

}