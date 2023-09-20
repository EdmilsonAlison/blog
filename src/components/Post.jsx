import styles from './Post.module.css';
import {Comment} from "./Comment.jsx";
import {Avatar} from "./Avatar.jsx";

export const Post = () => {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                        <Avatar src={'https://github.com/EdmilsonAlison.png'}/>
                    <div className={styles.authorInfo}>
                        <strong>Eddie Dias</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title={'16 de Setembro '} dateTime={'2023-09-16 09:06:30'}>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da
                    Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p> 👉 <a href="#"> jane.design/doctorcare</a></p>

                <p>
                    <a href="#"> #novoprojeto</a>
                    <a href="#"> #nlw</a>
                    <a href="#"> #rocketseat </a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder={'Deixe um comentário'}/>
                <footer>
                    <button type={"submit"}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}