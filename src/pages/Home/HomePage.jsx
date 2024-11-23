import React from 'react'
import { Link } from 'react-router-dom'
// Import All Icons
import * as Icons from '@/utils/icons.util'

// reused styles
const styles = {
    mainContainer: `flex flex-col justify-center items-center h-screen`,
    subTitle: `text-xl text-primaryText/50 p-1 italic`,
    linkStyle: `flex gap-2 items-center`
}

export const HomePage = () => {
    return (
        <main className={styles.mainContainer}>

            {/* Feel free to follow me on my social accounts for more! 👀 */}
            <nav className='flex gap-10 font-bold text-primaryText text-xl'>
                <LinkComponent url='https://github.com/3mohamed-abdelfattah'>
                    <Icons.GithubIcon />
                    3mohamed-abdelfattah
                </LinkComponent>
                <LinkComponent url='https://www.linkedin.com/in/3mohamed-abdelfattah/'>
                    <Icons.LinkedinIcon />
                    Mohamed Mohamed
                </LinkComponent>
            </nav>

            {/* Every problem has a solution, just code it right 👑 */}
            <h1 className='text-7xl text-secondaryBackground p-10 my-20 font-black animate-pulse'>
                Welcome to your new project! 🎉
            </h1>
            <h2 className={styles.subTitle}>
                This structure is here to help you start quickly and stay organized, so you can focus on writing great code. 🚀
            </h2>
            <h3 className={styles.subTitle}>
                Happy coding and let creativity guide you! 🌟
            </h3>

        </main>
    )
}

/* 
    Should be in custom components folder not here 😅
    For best practice each file should have one component\
*/
const LinkComponent = ({ url, children }) => {
    return (
        <Link to={url} className={styles.linkStyle}>
            {children}
        </Link>
    )
}