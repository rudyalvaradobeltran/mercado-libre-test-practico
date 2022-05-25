import styles from '../styles/Home.module.css'

export default function SearchBox() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {process.env.NEXT_PUBLIC_SEO_NAME}
        </h1>
      </main>
    </div>
  )
}
