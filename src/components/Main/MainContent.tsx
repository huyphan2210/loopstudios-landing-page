import './Main.css';

// Desktop imgs
import interactive from '../../assets/images/desktop/image-interactive.jpg';

// Mobile imgs
import interactiveMobile from '../../assets/images/mobile/image-interactive.jpg';

import creations from '../../data';

import Creation from './Creation/Creation';

function Main() {
    return (
        <main>
            <section id='hero'>
                <hgroup>
                    <h1>Immersive Experiences that deliver</h1>
                </hgroup>
            </section>
            <section id='content'>
                <section id='intro'>
                    <img src={interactive} alt="Interactive" loading='lazy'></img>
                    <img src={interactiveMobile} alt="Interactive" loading='lazy'></img>
                    <hgroup>
                        <h1>The leader in interactive vr</h1>
                        <p>
                            Founded in 2011, Loopstudios has been producing world-class virtual reality 
                            projects for some of the best companies around the globe. Our award-winning 
                            creations have transformed businesses through digital experiences that bind 
                            to their brand.
                        </p>
                    </hgroup>
                </section>
                <section id='our-creations'>
                    <div id='title'>
                        <h1>Our Creations</h1>
                        <button type='button'>See All</button>
                    </div>
                    <div id='creations'>
                        {creations.map(value => Creation(value))}
                        <button id='button-mobile' type='button'>See All</button>
                    </div>
                </section>
            </section>
        </main>
    )
}


export default Main;