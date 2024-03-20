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
        image="memory.png"
        title="Memory of Fall - Unity"
        description="Amidst life's challenges and perpetual setbacks, finding solace becomes imperative. Transport yourself to a vivid autumn memory, where crisp air, swirling leaves, and the enchantment of jack-o-lanterns offer a temporary respite, inviting you to uncover hidden treasures and momentarily transcend reality."
        link="https://joshomaton.itch.io/memory-of-autumn"



      /> 
    </GamesHolder>

  );
}
