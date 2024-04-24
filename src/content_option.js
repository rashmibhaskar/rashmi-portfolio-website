const logotext = "RB";
const meta = {
    title: "Rashmi Bhaskar",
    description: "I’m Rashmi Bhaskar data scientist | Full stack devloper, currently working in USA",
};

const introdata = {
    title: "Hi There!! 👋 ",
    animated: {
        first: "I’m Rashmi Bhaskar",
        second: "Software Engineer",
        third: "I ♡ Art & Technology",
    },
    description: "Frontend | Backend | Data Science | Cloud ",
    location: "📍 San Jose, California",
    your_img_url: "",
    // your_img_url: "https://media.licdn.com/dms/image/D5603AQGOMykZZKguAw/profile-displayphoto-shrink_800_800/0/1684248266462?e=1696464000&v=beta&t=yLMBSJ3_v_YMtt_I7RIxVOLY0sMgtojbn02qX1q2WWU",
};

const dataabout = {
    title: "A bit about myself",
    aboutme: [" ● Published Software Engineer with a background in Full Stack Web and Mobile application development, Data Science, Artificial Intelligence and Deep Learning in multiple industries including e-commerce, fintech and agrotech for global companies with over 1.5M monthly users. \n"
    , "● My strong foundation in Computer Science has enabled me to create impactful software solutions that tackle real world problems, improve the overall business and user experiences in very competitive marketplaces. \n"
    , "● As a collaborative, team-focused, innovative, and ambitious professional with interpersonal communication skills, I’m ready to leverage my experience for a Software Developer role that would put me on a learning loop as well as allow me to contribute to the team. \n"]

};
const worktimeline = [{
        jobtitle: "Software Engineer Intern",
        where: "Credible Labs Inc",
        date: "May '22 - July '22",
    },
    {
        jobtitle: "Software Engineer",
        where: "LTIMindtree - formerly Mindtree Ltd",
        date: "Jan '20 - July '21",
    },
];

const edutimeline = [{
    jobtitle: "University Of Southern California",
    where: "Masters in CS",
    date: "Aug '21 - May '23",
},
{
    jobtitle: "Dr. Ambedkar Institute of Technology",
    where: "Bachelors in CS",
    date: "Aug '15 - Aug '19",
},
];

const skills = [
    {
        name: "Algorithms & Data Structures",
        value: 70,
    },
    {
        name: "Frontend",
        value: 90,
    },
    {
        name: "Backend",
        value: 65,
    },
    {
        name: "Machine Learning",
        value: 80,
    },
    {
        name: "Testing",
        value: 40,
    },
    {
        name: "Cloud & Distributed Systems",
        value: 50,
    },
    {
        name: "Presentation and Technical Writing",
        value: 85,
    },

];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: "https://w0.peakpx.com/wallpaper/539/789/HD-wallpaper-chart-cash-money-stock-market-wall-street.jpg",
        description: "Stock Search - MEAN stack and Android Application",
        link: "https://github.com/rashmibhaskar/stock-application",
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/5bdfef0a697a98c05dd88ac0/1593297239666-1PI62THW50W6XJ2ORCSH/nhl.jpg?format=2500w",
        description: "National Hockey League Summary Page - MERN",
        link: "https://nhl-nine.vercel.app/",
    },
    {
        img: "https://github.com/rashmibhaskar/auth0-SSO/blob/main/screenshot.png?raw=true",
        description: "User Login : Single Sign On using Auth0",
        link: "https://github.com/rashmibhaskar/auth0-SSO/",
    },
    {
        img: "https://www.rappler.com/tachyon/2021/04/IMHO-China-Go-Game-April-22-2021.jpg?resize=1280%2C720&zoom=1",
        description: "Mini Go Game - AI agent ",
        link: "https://github.com/rashmibhaskar/mini-go-game",
    },
    {
        img: "https://raw.githubusercontent.com/rashmibhaskar/whack-a-mole-game/main/game_screenshot.png",
        description: "Prompt Engineering GenAI - Whack a Mole Game",
        link: "https://rashmibhaskar.github.io/whack-a-mole-game/",
    },
    {
        img: "https://raw.githubusercontent.com/rashmibhaskar/road-wallet/main/screenshot.png",
        description: "Prompt Engineering GenAI - Road Wallet App",
        link: "https://rashmibhaskar.github.io/road-wallet/",
    },
    {
        img: "https://github.com/rashmibhaskar/scrim-bot/blob/main/Screenshot.png?raw=true",
        description: "ScrimBot: AI powered chatbot",
        link: "https://rashmibhaskar.github.io/scrim-bot/",
    },
    {
        img: "https://user-images.githubusercontent.com/92593501/137516457-e67e1897-b592-4b1d-9402-3e863fa2cd16.png",
        description: "Twitter User Scraping - MERN stack",
        link: "https://github.com/rashmibhaskar/MOLA-twitter-app",
    },
    {
        img: "https://as2.ftcdn.net/v2/jpg/01/50/66/73/1000_F_150667356_sAdivVhhsCLIjvOv5W8YERyZv3QlF0Nx.jpg",
        description: "3D Maze Space Grid - AI Searching Techniques.",
        link: "https://github.com/rashmibhaskar/3D-Maze-Space-Searching",
    },
    {
        img: "https://agrio.app/wp-content/uploads/2021/08/Screen-Shot-2021-08-18-at-21.37.53-e1666053603154.png",
        description: "Crop Disease Detection",
        link: "https://www.irjet.net/archives/V6/i5/IRJET-V6I5801.pdf",
    },
    {
        img: "https://www.mdpi.com/animals/animals-13-00264/article_deploy/html/images/animals-13-00264-g001-550.jpg",
        description: "Bird Species Classification - Transfer Learning",
        link: "https://github.com/rashmibhaskar/transferLearning_imageClassification",
    },

    {
        img: "https://raw.githubusercontent.com/rashmibhaskar/Database-CSCI585/main/Assignment_1/ER%20DIAGRAM.jpeg",
        description: "COVID 19 Tracing System - ER Diagram",
        link: "https://github.com/rashmibhaskar/Database-CSCI585/tree/main/Assignment_2",
    },
    {
        img: "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2023/04/weaviate.png",
        description: "Vector Based Similarity Search - Weviate",
        link: "https://github.com/rashmibhaskar/vectorDB-similarity-search",
    },
    {
        img: "https://static.tildacdn.com/tild3764-6663-4639-a631-663238313836/breast_cancer_stages.png",
        description: "Breast Cancer Diagnosis - Machine Learning",
        link: "https://github.com/rashmibhaskar/active_passive_learning_based_models",
    },
    {
        img: "https://github.com/rashmibhaskar/Database-CSCI585/blob/main/Assignment_3/Screengrabs_Steps3to5/Step5_all.png?raw=true",
        description: "Spatial DB - PostgresQL & ArcGIS",
        link: "https://github.com/rashmibhaskar/Database-CSCI585/tree/main/Assignment_3",
    },
    {
        img: "https://github.com/rashmibhaskar/Database-CSCI585/blob/main/Assignment_4/Q5_query.png?raw=true",
        description: "Spatial DB - MongoDB(NoSQL implementation)",
        link: "https://github.com/rashmibhaskar/Database-CSCI585/tree/main/Assignment_4",
    },
    {
        img: "https://searchengineland.com/wp-content/seloads/2014/08/google-yahoo1-1920-1536x864.jpg",
        description: "Search Engine Comparison - Google v/s Yahoo",
        link: "https://github.com/rashmibhaskar/search-engine-comparison",
    },
    {
        img: "https://miro.medium.com/v2/resize:fit:1400/0*ou-OUb-FlI_K-etI.",
        description: "Web Crawler - crawler4j (Java)",
        link: "https://github.com/rashmibhaskar/web-crawler",
    },
    {
        img: "https://thumbs.dreamstime.com/z/inverted-index-form-binary-d-illustration-88089881.jpg?w=992",
        description: "Inverted Index - Hadoop, Lunr.j,Solr.js",
        link: "https://github.com/rashmibhaskar/inverted-index",
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/56e1feffd210b81d3c664efb/1569346066734-2NMAKECU19JIV2MAK407/Four+Seasons+Hotel+wedding.jpg?format=2500w",
        description: "Events Page UX - Parallax Effect",
        link: "https://rashmibhaskar.github.io/assignment3/mainevents.html",
    },
    
];

const contactConfig = {
    YOUR_EMAIL: "rashmibh@usc.edu",
    YOUR_FONE: "+1 213-573-9935",
    YOUR_CALENDER: "https://calendly.com/rashmibh/one-on-one-with-me",
    // description: "Let's Catch Up!!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_umymrk6",
    YOUR_TEMPLATE_ID: "template_qvwb87g",
    YOUR_USER_ID: "x4VvTjW1HebKzSX0H",
};

const socialprofils = {
    github: "https://github.com/rashmibhaskar",
    linkedin: "https://www.linkedin.com/in/rashmibhaskar/",
    twitter: "https://twitter.com/rashmibrao",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    edutimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};