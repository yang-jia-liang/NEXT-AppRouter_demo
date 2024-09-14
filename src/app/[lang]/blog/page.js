import server from './page.server'
import styles from "./page.module.scss"
import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function Blog ({ params: { lang } }) {
    const blogList = await server.getBlogList();
    const dict = await getDictionary(lang)

    return (
        <div className={styles.blog}>
            <h1>{ dict.common.Blog }</h1>
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