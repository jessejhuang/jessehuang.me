import GrandSlam from '../images/grand_slam.jpg';
import Bio from '../images/bio.jpg';
import Lake from '../images/jiuzhaigoulake.jpg';
import Roof from '../images/jiuzhaigouroof.jpg';

const backgrounds = {
  home: {
    url: GrandSlam,
    darkness: 0.3,
  },
  about: {
    url: Roof,
    darkness: 0,
  },
  projects: {
    url: Lake,
    darkness: 0,
  },
  contact: {
    url: Bio,
    darkness: 0.6,
  },
};

export default backgrounds;
