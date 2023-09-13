import { Button } from '@chakra-ui/react'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      </div>

      <div className={styles.center}>
        <Button colorScheme='blue'>Hello Chakra UI</Button>
      </div>

      <div className={styles.grid}>
        
      </div>
    </main>
  )
}
