import {format, formatDistanceToNow} from 'date-fns'
import {ptBR} from 'date-fns/locale'
import {v4 as uuidv4} from 'uuid'

import styles from './Post.module.css';
import {Comment} from "./Comment.jsx";
import {Avatar} from "./Avatar.jsx";
import {useState} from "react";

export const Post = (props) => {
    const {author, content, publishedAt} = props
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });
    const [comments, setComments] = useState(['Post muito bacana, hein!!!'])
    const [newCommentText, setNewCommentText] = useState('')

    function handlerCreateNewComment() {
        event.preventDefault();
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })
        setComments(commentsWithoutDeletedOne)
    }

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarURL}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={uuidv4()}><a href={'#'}>{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handlerCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name={'comment'}
                    placeholder={'Deixe um comentário'}
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                />
                <footer>
                    <button type={"submit"}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment
                        key={comment}
                        content={comment}
                        deleteComment={deleteComment}
                    />
                })}
            </div>
        </article>
    )
}