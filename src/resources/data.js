const data = {
    personal_details: {
        picture: "profile-pic.jpeg",
        name: "Harrison Vijay",
        github: "https://github.com/harrisonvijay",
        github_short: "harrisonvijay",
        linkedin: "https://www.linkedin.com/in/harrison-vijay",
        linkedin_short: "harrison-vijay",
        email: "vijay.harrison@gmail.com",
        location: "Chennai, India",
        highest_codechef_rating: "1824",
        description: [
            "I am a Tech enthusiast. I love all things tech and I aim to use tech to add value to this world.",
            "I am a quick learner and can adapt to any situation.",
            "I am skilled at Data Structures, Algorithms, Problem Solving and Web development.",
            "I also have knowledge of Machine Learning algorithms."
        ],
        highlights: [
            "Final year Student, IT",
            "Technology Summer Analyst Intern at Citi",
            "Competitive Programmer",
            "Web/App Developer"
        ]
    },
    experience: [
        {
            company: "Citi",
            location: "India",
            title: "Technology Summer Analyst Intern",
            start_date: "May, 2021",
            end_date: "Present",
            logo: "logos/citi.jpg"
        },
        {
            company: "ITK Education Services Private Limited",
            location: "India",
            title: "SDE Intern",
            start_date: "June, 2020",
            end_date: "September, 2020",
            description: "My work here involved requirements gathering, analysis, development, testing and quality checking. I Contributed to the completion of 2 major projects. Zoho Creator Platform with Deluge scripting language was used to develop the applications.",
            logo: "logos/itkes.png"
        }
    ],
    education: [
        {
            institution: "Sri Sivasubramaniya Nadar (SSN) College of Engineering, Kalavakkam",
            logo: "logos/ssn.svg",
            type: "College",
            course: "Bachelor of Information Technology",
            short_course: "B.Tech IT",
            cgpa: "9.76",
            cgpa_condition: "5th Semester",
            start_year: "2018",
            end_year: "Present",
            awards: [
                "Merit Scholarship for Exemplary Performance in the academic year 2018-19",
                "Merit Scholarship for Exemplary Performance in the academic year 2019-20"
            ]
        },
        {
            institution: "Mar Thoma Matriculation Higher Secondary School, Chennai",
            logo: "logos/marthoma.png",
            type: "School",
            grade: "XII",
            percentage: "95.7%",
            year: "2018",
            awards: [
                "Cash award for ranking first in School"
            ]
        },
        {
            institution: "Mar Thoma Matriculation Higher Secondary School, Chennai",
            logo: "logos/marthoma.png",
            type: "School",
            grade: "X",
            marks: "494/500",
            percentage: "98.8%",
            year: "2016",
            awards: [
                "100% Scholarship for Grade XI and XII, for ranking first in School",
                "Cash award from the then collector of Chennai district"
            ]
        }
    ],
    courses: [
        {
            title: "Complete Web development bootcamp",
            provider: "Angela Yu, Udemy",
            certificate_link: "https://www.udemy.com/certificate/UC-7d02c806-6a5b-44c6-b1a1-5d4dd5a45e4a/"
        },
        {
            title: "Python for Data Science",
            provider: "IIT Madras, NPTEL",
            certificate: "certificates/pds_nptel.png",
            description: ["Elite + Silver", "Ranked in Top 1% of certified candidates"]
        },
        {
            title: "Programming in Java",
            provider: "IIT Kharagpur, NPTEL",
            certificate: "certificates/java_nptel.png",
            description: ["Elite + Gold", "Topped the course with a score of 99%"]
        },
        {
            title: "Programming, Data Structures and Algorithms in Python",
            provider: "IIT Madras, NPTEL",
            certificate: "certificates/python_nptel.png",
            description: ["Elite + Gold", "Topped the course with a perfect score of 100%"]
        },
        {
            title: "App development using Android Studio with Java",
            provider: "Tim Buchalka, Udemy",
            certificate_link: "https://www.udemy.com/certificate/UC-f9557049-04be-4d85-a2a7-f2232c336dea/"
        },
        {
            title: "Data Structures and Algorithms using C/C++",
            provider: "Abdul Bari, Udemy",
            certificate_link: "https://www.udemy.com/certificate/UC-7ca45d0f-99d6-4b1d-a501-b4c15e80435c/"
        },
        {
            title: "Machine Learning",
            provider: "Andrew NG, Coursera"
        },
        {
            title: "Zoho Certified Student Developer",
            provider: "ITK Education Services Private Limited & NSTI - Government of India"
        },
        {
            title: "Data Structures and Algorithms",
            provider: "College Curriculum"
        },
        {
            title: "Database Management System",
            provider: "College Curriculum"
        },
        {
            title: "Operating Systems",
            provider: "College Curriculum"
        },
        {
            title: "Computer Networks and Applications",
            provider: "College Curriculum"
        },
        {
            title: "Machine Learning and Artificial Intelligence",
            provider: "College Curriculum"
        }
    ],
    projects: [
        {
            title: "Personal Portfolio Website",
            description: [],
            tools: [
                "React",
                "React Router"
            ],
            github: "https://github.com/harrisonvijay/harrisonvijay.github.io"
        },
        {
            title: "YouShare",
            description: ["A place where you can share your images and thoughts"],
            tools: [
                "NodeJS",
                "Express",
                "MongoDB",
                "Mongo Atlas",
                "React",
                "React Redux",
                "Redux Thunk",
                "React Router",
                "Google OAuth",
                "bcryptjs"
            ],
            github: "https://github.com/harrisonvijay/YouShare",
            check_out: "https://youshare-app.herokuapp.com/"
        },
        {
            title: "Review Sentiment Classifier",
            description: ["Classifies the entered text as Positive or Negative"],
            tools: [
                "HTML",
                "CSS",
                "JavaScript",
                "Flask",
                "Jinja2",
                "pandas",
                "sklearn",
                "nltk",
                "Python",
                "Machine Learning",
                "Logistic Regression"
            ],
            github: "https://github.com/harrisonvijay/Review-Sentiment-Classifier",
            check_out: "https://rsc.harrisonvijay.repl.co/"
        },
        {
            title: "Link Shortener",
            description: ["Paste your long link and get a shorter link"],
            tools: [
                "HTML",
                "CSS",
                "JavaScript",
                "NodeJS",
                "Express",
                "MongoDB",
                "Mongo Atlas",
                "Bootstrap",
            ],
            github: "https://github.com/harrisonvijay/link-shortener",
            check_out: "https://link-shr.herokuapp.com/"
        },
        {
            title: "Gametime - Discord Bot",
            description: ["A simple bot to keep track of game scores within a server"],
            tools: [
                "NodeJS",
                "Express",
                "MongoDB",
                "Mongo Atlas"
            ],
            github: "https://github.com/harrisonvijay/gametime-discord-bot",
            check_out: "https://discord.com/api/oauth2/authorize?client_id=828998753091584010&permissions=8&scope=bot"
        },
        {
            title: "Sorting Algorithms Visualizer",
            description: ["Visualize six different sorting algorithms"],
            tools: [
                "React",
                "Sorting Algorithms"
            ],
            github: "https://github.com/harrisonvijay/Sorting-Visualizer",
            check_out: "https://sort-algos-visualizer.herokuapp.com/"
        },
        {
            title: "Pathfinding Algorithms Visualizer",
            description: ["Visualize different weighted and unweighted pathfinding algorithms"],
            tools: [
                "React",
                "Pathfinding Algorithms"
            ],
            github: "https://github.com/harrisonvijay/Pathfinding-Visualizer",
            check_out: "https://pathfinding-algos-visualizer.herokuapp.com/"
        },
        {
            title: "Binary Tree Display Library",
            description: ["A C++ library to display binary trees"],
            tools: [
                "C++"
            ],
            github: "https://github.com/harrisonvijay/Binary-Tree-Display-Library"
        },
        {
            title: "SnapzAtt",
            description: [
                "A face recognition based attendance management system",
                "An Android App which can be used by teachers to capture pictures of the class, mark & maintain attendance, download reports etc.",
                "Students can use the app to view attendance data, raise complaints if any discrepancies are encountered",
                "Approved by College Research Centre for a funding of ₹30,000"

            ],
            tools: [
                "Android Studio",
                "Java",
                "OpenCV Library",
                "Python",
                "Firebase Firestore"
            ]
        },
        {
            title: "Student Mark Management System",
            description: ["An app with a GUI to enter and view marks of Students"],
            tools: [
                "Visual Basic",
                "SQL",
                "PL/SQL",
                "Oracle DB"
            ]
        },
        {
            title: "Hashtag Replier - Twitter Bot",
            description: ["A twitter bot that replies to a particular hashtag when tagged"],
            tools: [
                "Python",
                "Tweepy",
                "Twitter API"
            ],
            github: "https://github.com/harrisonvijay/Hashtag-Replier",
            check_out_msg: "Tweet tagging @HReplier with #hello and get a reply within 30 seconds"
        }
    ],
    clubs: [
        {
            name: "Institute of Electrical and Electronics Engineers (IEEE)",
            role: "Student Member",
            logo: "logos/ieee.png"
        },
        {
            name: "The Association for Computing Machinery (ACM)",
            role: "Student Member",
            logo: "logos/acm.png"
        },
        {
            name: "Youth Red Cross (YRC)",
            role: "Member and Volunteer",
            logo: "logos/yrc.jpg",
            description: [
                "Visited several villages, cleaned roads, rallied for awareness about the effects of plastic on the environment, and conducted a census",
                "Visited Indian Red Cross hospital to learn about Physiotherapy, Blood group detection and Vaccines for Babies",
                "Volunteered for multiple events of YRC in College"
            ]
        },
        {
            name: "IEEE Computer Society",
            role: "Secretary, College Chapter",
            logo: "logos/ieee_compsoc.jpg"
        },
        {
            name: "ProCoDe, Intradepartment coding club",
            role: "Member and Mentor",
            logo: "logos/procode.jpg",
            description: [
                "Organized a 3-day workshop on the basics of Competitive Programming",
                "Interaction with Juniors regarding placements and competitive programming"
            ]
        },
        {
            name: "Lakshya, Entrepreneurship Development Cell, SSN",
            role: "Member",
            logo: "logos/lakshya.jpg",
        }
    ],
    skills: [
        {
            title: "Programming Languages",
            list: ["C", "C++", "Python", "Java"]
        },
        {
            title: "Web Development",
            list: [
                "HTML",
                "CSS",
                "JavaScript",
                "Bootstrap",
                "jQuery",
                "AngularJS (1.x)",
                {
                    main: "MERN Stack",
                    sub: [
                        "NodeJS",
                        "Express",
                        "MongoDB",
                        "React - React Router, Redux"
                    ]
                }
            ]
        },
        {
            title: "Others",
            list: [
                "Data Structures",
                "Algorithms",
                "Competitive Programming",
                "Android Studio with Java",
                "Firebase Firestore",
                "SQL",
                "Zoho Creator with Deluge",
                "Machine Learning"
            ]
        }
    ],
    programming_achievements: [
        {
            title: "Highest Rating of 1824 in Codechef"
        },
        {
            title: "Ranked 1283rd globally in Google Hashcode",
            date: "2021"
        },
        {
            title: "Ranked 574th globally in Google Kickstart Round H",
            date: "2020"
        },
        {
            title: "Global Rank 99 and India Rank 8 in IEEEXtreme 14.0 (out of 3700+ teams)",
            description: "IEEEXtreme is a 24-hour programming contest conducted by IEEE",
            date: "2020"
        },
        {
            title: "Won Codechef DSA Certification Scholarship for excellent performance in their monthly challenge",
            date: "January, 2020"
        },
        {
            title: "Ranked 1st among 100+ participants in the annual intra-department coding contest",
            date: "2019"
        },
        {
            title: "Global Rank 176 and India Rank 15 in IEEEXtreme 13.0 (out of 4000+ teams)",
            date: "2019"
        }
    ]
}

export default data;