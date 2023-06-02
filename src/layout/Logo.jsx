import image from "../assets/logo.png";
import styles from "./Header/header.module.css"

const Logo = () => {
    return <a href="/" className={styles.logo_a}>
        <img src={image} alt="DogFood"/>
        <span>CatDog</span>
    </a>
}

export default Logo;