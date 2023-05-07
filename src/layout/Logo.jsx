import image from "../assets/logo.png";

const Logo = () => {
    return <a href="/" className="logo img">
        <img src={image} alt="DogFood"/>
        <span>CatDog</span>
    </a>
}

export default Logo;