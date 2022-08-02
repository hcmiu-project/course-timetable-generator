import { MainLayout } from '@/layouts'
import { NextPageWithLayout } from '@/types'
import styles from '@/styles/Home.module.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { firebaseClient } from '@/services/firebase/client'
import { useEffect } from 'react'

const About: NextPageWithLayout = () => {
  useEffect(() => {
    ;(async () => {
      try {
        const userCredential = await signInWithEmailAndPassword(
          firebaseClient,
          'hhehehe@gmail.com',
          'asdsds'
        )

        console.log(userCredential)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <div className={styles.container}>
      <h1>About page</h1>
    </div>
  )
}

About.Layout = MainLayout

export default About
