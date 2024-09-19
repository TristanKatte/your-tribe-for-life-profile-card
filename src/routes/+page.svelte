<script>
  /** @type {import('./$types').PageData} */
    import'../styles/style.css'
    import'../scripts/script'
    import foto from '$lib/assets/profielfoto-zw.jpg';
    import { gsap } from "gsap";
    
import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";
    
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase);
    export let data;
    let people = data.people
    export let peep = people? people.find(person => person.id == 54) : 'not found';
    console.log(peep);
</script>


<div id="top">
    <div class="perspective">
    <article class="card">
      <div class="thumb">
        <section>
          <figure>
            <img alt="foto van mijzelf" src="{foto}">
            <img alt="personal logo" class="image2" >
            <figcaption class="typewriter">9 november 1998</figcaption>
          </figure>
        </section>
      
        <section>
          <h1 class="glow">{peep.name} {peep.surname}</h1>
          <p>{peep.bio}</p>
      
          <h2 class="glow">Mijn vaardigheden</h2>
          <ul>
            <li>Adobe Creative Cloud</li>
            <li>Figma</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Wordpress</li>
          </ul>
      
          <nav class="effect" id="effect">
            <a href="mailto:tristankatte@hotmail.com">e-mail</a>
            <a href="https://tristankatte.nl/nieuw_portfolio/" target="_blank"
              >Mijn website</a>
              <a href="https://github.com/TristanKatte" target="_blank"
              >Mijn Github</a>
            
          </nav>
        </section>
      </div>
      
      </article>
      </div>
    </div>

