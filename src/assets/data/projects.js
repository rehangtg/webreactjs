import { v4 as uuidv4 } from 'uuid';
import jobpolice from '../images/2.png';
import serverruwet1 from '../images/1.jpg';
import ruwetasu from '../images/3.png';
import cryptoasu from '../images/cointracker.jpg';
import fxcok from '../images/4.PNG';

const projects = [
  {
    id: uuidv4(),
    name: 'GTA Server',
    desc: 'I make local server for GTA San Andreas deploy gcphone.',
    img: serverruwet1,
  },
  {
    id: uuidv4(),
    name: 'Bot Node',
    desc:
      'im just make a bot Music for discord server with code Node js, iam develope 2 Bots with my friends.',
    img: ruwetasu,
  },
  {
    id: uuidv4(),
    name: 'UI Crypto Market',
    desc:
      'i will make UI/UX market crypto with dart code, just make a easy for beginner.',
    img: cryptoasu,
  },
  {
    id: uuidv4(),
    name: 'FX Server GTA',
    desc:
      'FX server for GTA V my develope for request from social media and my friends just tell me to build this server.',
    img: fxcok,
  },
  {
    id: uuidv4(),
    name: 'Build Job Police',
    desc:
      'this Script I want to build Job Police for GTA V Fivem server, many bugs to procces deploy to my console server.',
    img: jobpolice,
  },
];

export default projects;
