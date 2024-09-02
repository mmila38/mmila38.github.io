/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
    enabled: true, // set false to disable splash screen
    animation: splashAnimation,
    duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
    animated: true // Set to false to use static SVG
};

const greeting = {
    username: "Michael Mila",
    title: "Hi, I'm Michael",
    subTitle: emoji(
        "An insightful Software Developer who is passionate and eager to learn new technologies, having experience in application development and an interest in Data Science."
    ),
    resumeLink:
        "https://drive.google.com/file/d/1SluQvGOrG6VPM4MkmsAg2y_xNWqcgfJO/view?usp=sharing", // Set to empty to hide the button
    displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
    github: "https://github.com/mmila38",
    linkedin: "https://www.linkedin.com/in/michael-mila/",
    gmail: "mmila33001@gmail.com",
    instagram: "https://www.instagram.com/mic.mila/?hl=en",

    // Instagram, Twitter and Kaggle are also supported in the links!
    // To customize icons and social links, tweak src/components/SocialMedia
    display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
    title: "Programming Languages",

    subTitle: "Things that I know",
    skills: [
        emoji(
            "⚡ Develop highly interactive user interfaces for your web and mobile applications"
        ),
        emoji(
            "⚡ Modernize legacy applications by leveraging the latest technologies and best practices"
        ),
        emoji(
            "⚡ Knowledge and experience in Agile software development methodologies"
        )
    ],

    /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

    softwareSkills: [
        {
            skillName: "Java",
            fontAwesomeClassname: "fab fa-java"
        },
        {
            skillName: "C#",
            fontAwesomeClassname: "fas fa-code"
        },
        {
            skillName: ".NET",
            fontAwesomeClassname: "fas fa-code"
        },
        {
            skillName: "html-5",
            fontAwesomeClassname: "fab fa-html5"
        },
        {
            skillName: "css3",
            fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
            skillName: "JavaScript",
            fontAwesomeClassname: "fab fa-js"
        },
        {
            skillName: "reactjs",
            fontAwesomeClassname: "fab fa-react"
        },
        {
            skillName: "vuejs",
            fontAwesomeClassname: "fab fa-vuejs"
        },
        {
            skillName: "nodejs",
            fontAwesomeClassname: "fab fa-node"
        },
        {
            skillName: "npm",
            fontAwesomeClassname: "fab fa-npm"
        },
        {
            skillName: "db2-database",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "sql-database",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "python",
            fontAwesomeClassname: "fab fa-python"
        },
        {
            skillName: "C++",
            fontAwesomeClassname: "fas fa-code"
        },
        {
            skillName: "Jenkins",
            fontAwesomeClassname: "fab fa-jenkins"
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
    display: true, // Set false to hide this section, defaults to true
    schools: [
        {
            schoolName: "Iowa State University",
            logo: require("./assets/images/isulogo.png"),
            subHeader:
                "Bachelor of Science in Computer Science w/ minor in Data Science",
            duration: "August 2019 - December 2022",
            desc: "Cum Laude",
            descBullets: [
                "Took courses about Data Stuctures, Algorithms, Object-Oriented Design, and Software Testing",
                "Achievements and Awards: Dean's List (Fall 2019 - Spring 2021, Spring 2022 - Fall 2022), Multicultural Greek Council Leadership Award (Spring 2021)",
                "Leadership: President of Pi Alpha Phi Fraternity, Inc. (Fall 2022), Asian Student Union Executive Board Member (Fall 2020 - Spring 2022)"
            ]
        }
    ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [
        {
            Stack: "Frontend", //Insert stack or technology you have experience in
            progressPercentage: "60%" //Insert relative proficiency in percentage
        },
        {
            Stack: "Backend",
            progressPercentage: "80%"
        },
        {
            Stack: "Programming",
            progressPercentage: "70%"
        }
    ],
    displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
    display: true, //Set it to true to show workExperiences Section
    experience: [
        {
            role: "Application Developer",
            company: "Farm Bureau Financial Services",
            companylogo: require("./assets/images/farmbureau.jpeg"),
            date: "Feb 2023 – Present",
            desc: "Producer Incentive Compensation (PIC) Team",
            descBullets: [
                "Contributing to the development and maintenance of the in-house PIC system, which calculates agent commissions, improving functionality and performance to meet evolving business needs.",
                "Developed and integrated features for the associated web application and API, ensuring seamless interaction with the Producer Incentive Compensation(PIC) system and optimizing user experience.",
                "Work closely with cross-functional teams to identify and resolve issues, implement new features, and ensure the overall reliability and accuracy of the commission calculation process."
            ]
        },
        {
            role: "Software Engineer Intern",
            company: "Casey's General Store Inc.",
            companylogo: require("./assets/images/caseysLogo.png"),
            date: "May 2022 – July 2022",
            desc: "Interned with the IT Supply Chain Team",
            descBullets: [
                "Developed a robust Blazor web application that streamlined report generation processes, achieving a 50% reduction in time spent on manual reporting tasks.",
                "Assisted the IT Supply Chain team by optimizing VBScripts and stored procedures, enhancing operational efficiency.",
                "Created a Blazor web application designed to send POST requests to a Cosmos DB, facilitating seamless data integration and management."
            ]
        },
        {
            role: "Data Research Analyst Intern",
            company: "Kingland Systems Corporation",
            companylogo: require("./assets/images/kinglandlogo.jpg"),
            date: "May 2021 – January 2022",
            desc: "",
            descBullets: [
                "Researched and analyzed corporate data to uncover relationships and ensure the accuracy and credibility of information.",
                "Improved data integrity by conducting continuous data clean-up, enhancing the quality of both new and existing records.",
                "Reviewed and provided constructive feedback on fellow Data Research Analysts' work, leading to higher-quality reports and insights."
            ]
        }
    ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
    display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
    title: "Projects",
    subtitle: "Some projects that I have worked on",
    projects: [
        {
            image: require("./assets/images/isulogo.png"),
            projectName: "VetGo",
            projectDesc: "Uber-like app for veterinarians to provide services"
        },
        {
            image: require("./assets/images/telcochurn.png"),
            projectName: "Telco Customer Churn",
            projectDesc: "Predicting customer turnover using scikit learn library"
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
    title: emoji("Achievements And Certifications 🏆 "),
    subtitle:
        "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

    achievementsCards: [
        {
            title: "Google Code-In Finalist",
            subtitle:
                "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
            image: require("./assets/images/codeInLogo.webp"),
            imageAlt: "Google Code-In Logo",
            footerLink: [
                {
                    name: "Certification",
                    url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
                },
                {
                    name: "Award Letter",
                    url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
                },
                {
                    name: "Google Code-in Blog",
                    url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
                }
            ]
        },
        {
            title: "Google Assistant Action",
            subtitle:
                "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
            image: require("./assets/images/googleAssistantLogo.webp"),
            imageAlt: "Google Assistant Action Logo",
            footerLink: [
                {
                    name: "View Google Assistant Action",
                    url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
                }
            ]
        },

        {
            title: "PWA Web App Developer",
            subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
            image: require("./assets/images/pwaLogo.webp"),
            imageAlt: "PWA Logo",
            footerLink: [
                { name: "Certification", url: "" },
                {
                    name: "Final Project",
                    url: "https://pakistan-olx-1.firebaseapp.com/"
                }
            ]
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
    title: "Blogs",
    subtitle:
        "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
    displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
    blogs: [
        {
            url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
            title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
            description:
                "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
        },
        {
            url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
            title: "Why REACT is The Best?",
            description:
                "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
    title: "TALKS",
    subtitle: emoji(
        "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
    ),

    talks: [
        {
            title: "Build Actions For Google Assistant",
            subtitle: "Codelab at GDG DevFest Karachi 2019",
            slides_url: "https://bit.ly/saadpasta-slides",
            event_url: "https://www.facebook.com/events/2339906106275053/"
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

    // Please Provide with Your Podcast embeded Link
    podcast: [
        "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
    ],
    display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle:
        "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "(515) 210-5053",
    email_address: "mmila33001@gmail.com"
};

// Twitter Section

const twitterDetails = {
    userName: "twitter", //Replace "twitter" with your twitter username without @
    display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
    illustration,
    greeting,
    socialMediaLinks,
    splashScreen,
    skillsSection,
    educationInfo,
    techStack,
    workExperiences,
    openSource,
    bigProjects,
    achievementSection,
    blogSection,
    talkSection,
    podcastSection,
    contactInfo,
    twitterDetails,
    isHireable
};
