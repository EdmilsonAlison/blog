import styles from "./Avatar.module.css";

export const Avatar = (props) => {
    const {
        src,
        hasBorder = true
    } = props
    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar}
             src={src} alt="Foto Perfil"
        />

    )
}