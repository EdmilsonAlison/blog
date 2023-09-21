import styles from './Comment.module.css'
import {ThumbsUp, Trash} from "phosphor-react";
import {Avatar} from "./Avatar.jsx";

export const Comment = (props) => {
    const {content, deleteComment} = props
    function handlerDeleteComment(){
        deleteComment(content)
    }
    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/EdmilsonAlison.png" hasBorder={false} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Eddie Dias</strong>
                            <time title={'11 de Maio às 08:13'} dateTime={'2023-09-19 08:13:30'}>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handlerDeleteComment} title={'Deletar comentário'}>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}