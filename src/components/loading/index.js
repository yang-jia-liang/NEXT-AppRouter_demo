import styles from "./index.module.scss"

export default function LoadingComponent () {
    return (
        <div className={styles['lds-circle']}>
            <div />
        </div>
    )
}