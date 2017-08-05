import GrandSlam from '../images/grand_slam.jpg';
import Bio from '../images/bio.jpg';
import Lake from '../images/jiuzhaigoulake.jpg';
import Code from '../images/code_screenshot.png';
import Workflow from '../images/workflow.png';

const backgrounds = {
  home: {
    url: GrandSlam,
    darkness: 0.3,
  },
  about: {
    url: Workflow,
    darkness: 0.8,
  },
  experience: {
    url: Code,
    darkness: 0.8,
  },
  projects: {
    url: Lake,
    darkness: 0,
  },
  contact: {
    url: Bio,
    darkness: 0.7,
  },
};

export default backgrounds;
