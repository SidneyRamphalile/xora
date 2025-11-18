import { Element, Link as LinkScroll } from 'react-scroll'
import Button from '../components/Button'
import {useTheme} from '../theme/ThemeContext.jsx'
const Hero = () => {
    const { theme, toggleTheme, setTheme, setCustomTheme } = useTheme();
    const applyCustomTheme = () => {
    setCustomTheme({
        '--color-primary': '255 107 107',      /* #FF6B6B */
        '--color-secondary': '78 205 196',     /* #4ECDC4 */
        '--color-primary-text': '255 255 255', /* #FFFFFF */
        '--color-sub-text': '224 224 224',     /* #E0E0E0 */
        '--color-background': '26 26 26',      /* #1A1A1A */
        '--divider': '51 51 51',         /* #333333 */
        '--color-black': '0 0 0',              /* #000000 */
        '--color-black-100': '10 10 10',       /* #0A0A0A */
    });
  };

  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
        <div className="p-4">
      <button 
      style={{ marginRight: '16px' }}
        onClick={toggleTheme}
        className="bg-primary text-primaryText p-2 rounded"
      >
        Current theme: {theme}
      </button>
      <button style={{ marginRight: '16px' }} onClick={() => setTheme('light')}>Light</button>
      <button style={{ marginRight: '16px' }} onClick={() => setTheme('dark')}>Dark</button>
      <button style={{ marginRight: '16px' }} onClick={() => setTheme('testCustom')}>Test Custom</button>
      <button onClick={applyCustomTheme}>Custom Theme</button>
    </div>
        <Element name='hero'>
            <div className='container'>
                <div className='relative z-2 max-w-512 max-lg:max-w-388'>
                    <div className='caption small-2 uppercase text-secondary'>
                        Video Editing
                    </div>
                    <h1 className='mb-6 h1 text-primaryText uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12'>
                        Amazingly simple
                    </h1>
                    <p className='max-w-440 mb-14 body-1 max-md:mb-10'>
                        We designed XORA AI Video Editor to be an easy to use, quick to learn, and surprisingly powerful video editing tool for creators of all skill levels.
                    </p>
                    <LinkScroll to="features" offset={-100} spy smooth>
                        <Button icon="/images/zap.svg">Try it now</Button>
                    </LinkScroll>
                </div>

                <div className='absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res'>
                    <img src="/images/hero.png" alt="Hero" className='size-1230 max-lg:h-auto'/>
                </div>
            </div>
        </Element>
    </section>
  )
}

export default Hero