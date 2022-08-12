import { MainLayout } from '@/layouts'
import { NextPageWithLayout } from '@/types'

const About: NextPageWithLayout = () => {
  return (
    <div>
      <p>About</p>
    </div>
  )
}

About.Layout = MainLayout

export default About
