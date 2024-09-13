import * as commonHttp from '@/api/common.js'
import styles from "./page.module.scss"

export default async function Blog () {
    const blogList = await commonHttp.getBlogList()

    return (
        <div className={styles.blog}>
            <h1>Blog</h1>
            <ul>
                {blogList.map((blog) => (
                    <li key={blog.id}>
                        <p>{blog.title}</p>
                        <p>{blog.paragraph}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}