import styled from '@emotion/styled';
import { Colors } from '@/themes/Colors';
import ProductCard from './ProductCard';
import DelayedDisplay from './DelayedDisplay';
const GamesHolder = styled.div`
  width: 90%;
  padding-top: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${Colors.Background};
  gap: 2vh;
  padding-bottom: 10vh;
`;

export default function Games() {
  return (
    <GamesHolder>
      <ProductCard
        image="wiseguys.png"
        title="🏆 Wise Guys- Source 2"
        description="Winner of the 2023 Three Thieves S&box Gamejam, Wise Guys is an multiplayer fps/tower defense hybrid. You and your fellas must defend your wad of dough from waves of oncoming law enforcement. Build your towers and protect what you rightfully stole."
        link="https://youtu.be/ATFMduUVvz8"
      />

      <ProductCard
        image="netscape.png"
        title="Netscape Cybermind - Unity"
        description="Netscape Cybermind is a high octane action fps with a focus on kinetic movement and fast paced action. You play as a hacker in 1999 who has been hired to steal some files from the Ehlers corporate servers. Dawning the yet to be released Ehlers Cybermind, you venture of into cyberspace in search your next score."
        link="https://joshomaton.itch.io/netscape-cybermind"
      />

      <ProductCard
        image="grand.png"
        title="Gr& Prix- Source 2"
        description="Gr& Prix is a high octane racer inspired by the car culture of the late 90s. Make split second hair pin drifts around impossible corners, engage in high energy racing, and compete with your friends to get the best times in a wide variety of maps."
        link="https://youtu.be/Xa3UUM2qZbw"
      />

      <ProductCard
        image="entropy.png"
        title="Entropy: Desert Colony System - Unity"
        description="Entropy: Desert Colony System is a slow placed colony building game. You play a prisoner sentenced to readying up a potential colony on a far off desert world. Develop an ecosystem, prepare for settler's arrival, and engage in the vast loneliness of open space before you."
        link="https://joshomaton.itch.io/entropy-desert-colony-system"
      />

      <ProductCard
        image="speed.png"
        title="Speed-Dial - Source 2"
        description="Speed-Dial is a top down multiplayer action shooter with an emphasis on stylish kills and high combos. Inspired by games like Hot-Line Miami, you play the role of one of four distinct criminals, battling each other over control of the city. Collect powerups, rack up combos, and fight your way to the top of the leaderboard."
        link="https://www.youtube.com/watch?v=bLljXf_UCMA"
      />
      <ProductCard
        image="rockwell.png"
        title="Rockwell County: Blackout - GameMaker"
        description="Rockwell County: Blackout is a second place winning contestant in Jamcraft14. A horror game inspired by the likes of resident evil and silent hill made in only two weeks."
        link="https://saucyarmadillogames.itch.io/rockwell-county-blackout"
      />

      <ProductCard
        image="spiral.png"
        title="The Spiral - Unity"
        description="You are Helen, a former real-estate agent who's found herself, once again, trapped within seemingly endless corridors. You'll walk down the hallway with no seeming end and do your best to survive whatever it may throw at you."
        link="https://joshomaton.itch.io/the-spiral"


      />

      <ProductCard
        image="filch.png"
        title="FILCH - Unity"
        description="Experience the thrill of sneaking through Hogwarts as a second-year Hufflepuff student, navigating past curfew while avoiding detection by the vigilant caretaker, Argus Filch. Test your wits and stealth in this immersive narrative adventure, where every step is a strategic challenge."
        link="https://joshomaton.itch.io/filch-a-harry-potter-horror-fan-game"



      />

      <ProductCard
        image="entropy2.png"
        title="Entropy 2 - Unity"
        description="Embark on an enthralling journey in 'Entropy,' a sequel to its predecessor, where unexpected events unfold as you awaken from stasis aboard a malfunctioning ship. Tasked with maintaining stability while navigating to a nearby space station, your decisions will determine whether the vessel thrives or succumbs to catastrophic failure, testing your strategic prowess and resilience."
        link="https://joshomaton.itch.io/entropy-2"



      /> 

      <ProductCard
        image="memory.png"
        title="Memory of Fall - Unity"
        description="Amidst life's challenges and perpetual setbacks, finding solace becomes imperative. Transport yourself to a vivid autumn memory, where crisp air, swirling leaves, and the enchantment of jack-o-lanterns offer a temporary respite, inviting you to uncover hidden treasures and momentarily transcend reality."
        link="https://joshomaton.itch.io/memory-of-autumn"



      /> 

      <ProductCard
        image="revolution.png"
        title="Beat Down Revolution - Unity"
        description="Beat Down Revolution is a rhythm based, high action FPS where you battle waves of enemies and unlock new beats in order to ascend the tower."
        link="https://joshomaton.itch.io/beat-down-revolution"    



      /> 

      <ProductCard
        image="gordon.png"
        title="Goodbye Gordon - Unity"
        description="Hello Gordon, and welcome to your last day at the Black Mesa Research Facility. A cloning experiment has gone awry and you find yourself in the Black Mesa you know, but it isn't the Black Mesa you know! Dr. Coomer and his clones have gone and made a muck of things and it's up to you to find enough PlayCoins™ to appease them!"
        link="https://joshomaton.itch.io/goodbye-gordon"    



      />

       <ProductCard
        image="blinddate.png"
        title="Blind Date - GameMaker"
        description="After months of loneliness you’re finally ready to go on a date and, in your infinite wisdom, you find yourself here. Who’s Karen? What’s she all about? What can this mysterious woman teach you about love, kindness and yourself? A veritable sequel to the original, Blind Date improves on Blind Date (Classic) in many exciting ways. "
        link="https://solscape.itch.io/blind-date"    



      /> 

      <ProductCard
        image="stardust.png"
        title="Stardust Girl - GameMaker"
        description="Explore the adrenaline-fueled world of 'Stardust Girl,' a compact yet dynamic action game designed for fast-paced combat enthusiasts seeking tight controls and immersive gameplay. Navigate through a thrilling narrative as you dodge, take cover, and engage in intense shootouts against space station security forces while embarking on a mission to retrieve vital files for your employer. Channel your inner runner and prepare for an exhilarating challenge ahead. "
        link="https://joshomaton.itch.io/stardust-girl"    



      /> 

      <ProductCard
        image="zixels.png"
        title="Zixels 2 - GameMaker"
        description="In 'Zixels 2,' set in an alternate 1985, navigate a dystopian city under alien rule as you rally survivors and fortify your camp against an impending assault. Explore, scavenge, and strategize to overthrow the oppressive regime of Lord Yeenu and secure humanity's future. "
        link="https://joshomaton.itch.io/zixels-2"    



      /> 

      <ProductCard
        image="tyranny.png"
        title="Wizard's Tyranny - GameMaker"
        description="Step into the realm of Bolton, where opportunity awaits the intrepid seeker. Whether your quest is for glory, liberation from oppressive rule, or a journey of self-discovery, the kingdom beckons with endless possibilities. "
        link="https://saucyarmadillogames.itch.io/wizards-tyranny"    



      /> 

      <ProductCard
        image="gunsmith.png"
        title="Galactic Gunsmith - GameMaker"
        description="Embark on an epic journey across three diverse planets in 'Galactic Gunsmith,' a gun-crafting RPG, as you pursue the mystery of your vanished father. Engage in thrilling battles, hone your skills, master the art of gunsmithing, and traverse distant galaxies in a quest for adventure and discovery. "
        link="https://saucyarmadillogames.itch.io/galactic-gunsmith"    



      /> 












    </GamesHolder>

  );
}
