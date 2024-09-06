import React from 'react'

export const HomePage = () => {

    const styles = {
        mainContainer: `flex flex-col justify-center items-center h-screen bg-[#D6EFD8]`
    }

    return (
        <main className={styles.mainContainer}>
            <p className='text-9xl text-[#1A5319] p-5 m-5 font-black'>
                HomePage
            </p>
            <p className='text-6xl text-[#508D4E] p-5 m-5 italic font-bold decoration-3 underline decoration-wavy decoration-lime-500/30'>
                Hello User !!
            </p>
        </main>
    )
}