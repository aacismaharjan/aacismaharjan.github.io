import CoronaTrackerThumb from '../assets/portfolio/coronatracker-min.png';
import HamroJourneyThumb from '../assets/portfolio/hamrojourney-min.png';
import HimalanResortThumb from '../assets/portfolio/himalayanresort-min.png';
import RMSThumb from '../assets/portfolio/rms-min.png';
import QuizbeeThumb from '../assets/portfolio/quizbee-min.png';
import YoutubeCloneThumb from '../assets/portfolio/youtube-clone-min.png';
import SimplePortfolioThumb from '../assets/portfolio/simple_portfolio-min.png';
import CoolorsThumb from '../assets/portfolio/coolors-min.png';
import GetWatchThumb from '../assets/portfolio/getwatch-min.png';
import ReactReduxRestThumb from '../assets/portfolio/react-redux-rest-min.png';
import GithubUserStatThumb from '../assets/portfolio/github_user_stats-min.png';
import MernTwitterCloneThumb from '../assets/portfolio/mern-twitter-clone-min.png';
import LandingPageTemplateThumb from '../assets/portfolio/landing_page_template-min.png';
import AppLandingPageThumb from '../assets/portfolio/app-landingpage-min.png';
import NetflixCloneThumb from '../assets/portfolio/netflix-clone-min.png';
import BasicNetflixClone from '../assets/portfolio/basic-netflix-min.png';
import TypingTestThumb from '../assets/portfolio/typing-test-min.png';
import InstagramCloneThumb from '../assets/portfolio/instagram-clone-min.png';
import NatoursThumb from "../assets/portfolio/natours.png";
import HangmanThumb from "../assets/portfolio/hangman.png";
import SnakeLadderThumb from "../assets/portfolio/snake-ladder-in-web.png";
import EpasaleThumb from "../assets/portfolio/epasale.png";

class Portfolio {
  constructor(img, title, desc, demo, source) {
    this.img = img;
    this.title = title;
    this.desc = desc;
    this.demo = demo;
    this.source = source;
  }
}

const portfolios =  [
  // {
  //   img: MernTwitterCloneThumb,
  //   title: "Simple Twitter CRUD - MERN Stack",
  //   desc:
  //     "Simple CRUD MERN Stack app that allows creating, reading, updating and deleting tweets and basic look of Twitter",
  //   demo: "https://mern-twitter-crud.herokuapp.com/",
  //   source: "https://mern-twitter-crud.herokuapp.com/",
  // },
  {
    img: EpasaleThumb,
    title: 'Epasale - Food Order & Delivery System',
    desc: 'Epasale is a food ordering and delivery platforms that has actors such as customers, sellers, delivery person and admins with their own portals.',
    demo: 'https://www.youtube.com/watch?v=pUuSToNIDuU',
    source: 'https://github.com/aacismaharjan/epasale',
  },
  {
    img: NatoursThumb,
    title: 'Natours - Tour Booking App',
    desc: 'Natours is a platform where you can book your favorite tour. Made with MERN stack and integrated stripe payment',
    demo: 'https://natours-8o2z.onrender.com/',
    source: 'https://natours-8o2z.onrender.com/',
  },

  {
    img: NetflixCloneThumb,
    title: 'Netflix Clone - ReactJS',
    desc: "Netflix Clone featuring Netflix's homepage and series / films page with authenticatio by the help of Firebase as backend.",
    demo: 'https://netflix-clone-aacis.netlify.app/',
    source: 'https://github.com/aacismaharjan/netflix-clone',
  },
  {
    img: HimalanResortThumb,
    title: 'Himalayan Resort - ReactJS',
    desc: 'A resort for fictional hotel, in which we can filter out the hotel rooms and see specific info about the hotel.',
    demo: 'https://himalayanresort.netlify.app/',
    source: 'https://github.com/aacismaharjan/himalayanresort',
  },
  {
    img: BasicNetflixClone,
    title: 'Fav Films - Wishlist Your Movies',
    desc: 'Netflix like web app using react.js which features user to wishlist their favourite films.',
    demo: 'https://favfilms.netlify.app',
    source: 'https://favfilms.netlify.app',
  },
  {
    img: InstagramCloneThumb,
    title: 'Instagram Clone - Quick Photo Sharing App',
    desc: 'Instagram clone using react.js and typescript. Create a post with image url and caption and see feeds, profile etc.',
    demo: 'https://instagram999.netlify.app/',
    source: 'https://instagram999.netlify.app/',
  },
  {
    img: LandingPageTemplateThumb,
    title: 'Landing Page Template - HTML & CSS',
    desc: 'Landing page template for watch product. Created with HTML, CSS, JS, Jquery, Bootstrap and other production ready libraries.',
    demo: 'https://getwatch.netlify.app/',
    source: 'https://github.com/aacismaharjan/react_landing_page',
  },
  {
    img: AppLandingPageThumb,
    title: 'Fusion App landing page - HTML & CSS',
    desc: 'Fusion App HTML Template created using HTML, CSS, Bootstrap, JS, Jquery, and other thrid party libraries.',
    demo: 'https://fusion-app-landing-page.netlify.app/',
    source: 'https://fusion-app-landing-page.netlify.app/',
  },
  {
    img: GithubUserStatThumb,
    title: 'Github User Stats - React.js',
    desc: 'Fetches Github Api of user and processes it into meaningful information with the help of fusion charts and Auth0',
    demo: 'https://github-user-stats.netlify.app/',
    source: 'https://github.com/aacismaharjan/search-github-user',
  },
  {
    img: SnakeLadderThumb ,
    title: 'Snake Ladder Game in Web - JS OOP',
    desc: 'A basic Snake and Ladder game is a board game where players move their tokens along a numbered grid based on the roll of a dice.',
    demo: 'https://aacismaharjan.github.io/snake-ladder-in-web/',
    source: 'https://github.com/aacismaharjan/snake-ladder-in-web',
  },
  {
    img: TypingTestThumb,
    title: 'Typing Tester - Test your typing speed',
    desc: 'Typing tester helps you in figuring out your typing speed, practice touch typing, and ace your touch typing with typing test.',
    demo: 'https://aacismaharjan.github.io/typing-test/',
    source: 'https://github.com/aacismaharjan/typing-test',
  },
  {
    img: CoronaTrackerThumb,
    title: 'Corona Tracker - ReactJS',
    desc: 'It shows the overall corona cases throughout the world, Also presents data in readable diagrams/charts.',
    demo: 'https://aacismaharjan.github.io/coronatracker/',
    source: 'https://github.com/aacismaharjan/coronatracker',
  },
  // {
  //   img: ReactReduxRestThumb,
  //   title: "Redux Redux Rest - React, Redux & Thunk",
  //   desc:
  //     "A simple react-redux, redux-thunk web app for create, read, update and delete restful apis.",
  //   demo: "https://aacismaharjan.github.io/react-redux-rest/",
  //   source: "https://github.com/aacismaharjan/react-redux-rest",
  // },
  // {
  //   img: GetWatchThumb,
  //   title: "APPLE WATCH - REACTJS TEMPLATE",
  //   desc:
  //     "Created with highly reusable components, can be updated from remote file.",
  //   demo: "https://getwatch.netlify.app/",
  //   source: "https://getwatch.netlify.app/",
  // },

  // {
  //   img: YoutubeCloneThumb,
  //   title: "Youtube Clone - ReactJS",
  //   desc:
  //     "Simple Youtube Clone with React.js. It utilizes the Youtube api to fetch the data and display it",
  //   demo: "https://aacismaharjan.github.io/youtube-clone/",
  //   source: "https://github.com/aacismaharjan/youtube-clone",
  // },
  {
    img: SimplePortfolioThumb,
    title: 'Simple Portfolio - HTML Template',
    desc: 'Simple Portfolio Template using Pure HTML, CSS & Javascript. No use of any third party libraries.',
    demo: 'https://aacismaharjan.github.io/basic-html-portfolio-template/',
    source: 'https://github.com/aacismaharjan/basic-html-portfolio-template',
  },
  {
    img: HamroJourneyThumb,
    title: 'Hamro Journey - HTML, CSS & JS',
    desc: 'This is simple HTML Template which I have created and won in SXC Web Design Competition 2019.',
    demo: 'https://aacismaharjan.github.io/hamrojourney/',
    source: 'https://github.com/aacismaharjan/hamrojourney',
  },
  // {
  //   img: QuizbeeThumb,
  //   title: "Quizbee - Reactjs and External Api",
  //   desc:
  //     "Simple Quizbee web app build with ReactJS which eats the api and interacts with users!",
  //   demo: "https://aacismaharjan.github.io/quizbee/",
  //   source: "https://github.com/aacismaharjan/quizbee",
  // },
  {
    img: CoolorsThumb,
    title: 'Coolors Everywhere! - ReactJS',
    desc: 'Coolors website for fullfiling every developers color need! Find colors, complementary colors, html colors & much more.',
    demo: 'https://aacismaharjan.github.io/coolors/',
    source: 'https://github.com/aacismaharjan/coolors',
  },
  {
    img: HangmanThumb,
    title: 'Hangman Game in C Programming (Dynamic Programming)',
    desc: 'Hangman Game in C Programming (Dynamic Programming) is developed by Aashish Maharjan inspired from an online creator. It is text based word guessing game.',
    demo: 'https://github.com/aacismaharjan/Hangman/blob/master/PlayHangman.exe',
    source: 'https://github.com/aacismaharjan/Hangman',
  },
  {
    img: RMSThumb,
    title: 'Result Management System - C Programming',
    desc: 'My first C Programming project in +2. It has CRUD operation only with File handling and has ton of features.',
    demo: 'https://github.com/aacismaharjan/result-management-system-in-c/tree/master/output',
    source: 'https://github.com/aacismaharjan/result-management-system-in-c',
  },
];

export default portfolios;