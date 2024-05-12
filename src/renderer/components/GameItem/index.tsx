import styles from './GameItem.module.css';

export enum CONSOLE {
    NES,
    SNES,
    N64,
    GAMECUBE,
    WII, 
    GB,
    GBC,
    GBA,
    NDS
}

export enum GENRE {
    RPG,
    ACTION,
    SIDESCROLLING,
    PUZZLE,
    FIGHTING,
    RACING
}

export type GAME = {
    id: number;
    title: string;
    console: CONSOLE,
    genre: GENRE,
    finished: boolean
}

export default function GameItem({id, title, console, genre, finished}:GAME) {
    <div className={styles.gameCard}>
        <h3>{title}</h3>
        <p>{console}</p>
        <p>{genre}</p>
        <p>{finished}</p>
    </div>
}