import {Header} from "./components/Header.jsx";
import {SideBar} from "./components/SideBar.jsx";
import {Post} from "./components/Post.jsx";

import './global.css'
import styles from './App.module.css'

export function App() {

    return (
        <>
            <Header/>
            <div className={styles.wrapper}>
            <SideBar/>
                <main>
                    <Post
                        author={'Eddie Dias'}
                        content={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'}
                    />
                    <Post
                        author={'Millena Pontes'}
                        content={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'}
                    />
                </main>
            </div>
        </>
    )
}

