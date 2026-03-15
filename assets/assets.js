import viratpic from "./images/viratpic.jpeg";
import dhonipic from "./images/dhonipic.jpeg";
import eshpic from "./images/eshpic.jpeg";

export const dummyResumeData = [

    {
        personal_info: {
            full_name: "Eshwar Chavan",
            email: "eshwarchavan@gmail.com",
            phone: "+91 876543210",
            location: "Pune, Maharashtra, India",
            linkedin: "https://www.linkedin.com/in/eshwarchavan",
            website: "https://github.com/eshwarchavan",
            profession: "Full Stack Developer",
            image: eshpic
        },
        _id: "68d2a31a1c4dd38875bb037e",
        userId: "68c180acdf1775dfd02c6d87",
        title: "Eshwar's Resume",
        public: true,
        professional_summary:
            "Motivated Full Stack Developer skilled in building modern web applications using React, Node.js, and MongoDB. Passionate about solving real-world problems through technology and continuously learning new tools.",
        skills: [
            "JavaScript",
            "React JS",
            "NodeJS",
            "ExpressJS",
            "MongoDB",
            "Git",
            "GitHub",
            "NextJS",
            "HTML",
            "CSS"
        ],
        experience: [
            {
                company: "TechNova Solutions Pvt Ltd",
                position: "Full Stack Developer Intern",
                start_date: "2024-06",
                end_date: "Present",
                description:
                    "Developing modern web applications using React and Node.js. Building REST APIs and integrating MongoDB database for scalable applications.",
                is_current: true,
                _id: "68d2a31a1c4dd38875bb037f"
            }
        ],
        education: [
            {
                institution: "Savitribai Phule Pune University",
                degree: "B.E.",
                field: "Computer Science",
                graduation_date: "2026-05",
                gpa: "7.5",
                _id: "68d2a31a1c4dd38875bb0380"
            }
        ],
        template: "minimal-image",
        accent_color: "#14B8A6",
        project: [
            {
                name: "TaskMaster Pro",
                type: "Full Stack Web Application",
                description:
                    "A collaborative task management platform with Kanban boards, real-time updates using Socket.io, role-based access control, and analytics dashboard.",
                _id: "68d4f882c8f0d46dc8a8b139"
            },
            {
                name: "PlacementPilot",
                type: "Job Preparation Platform",
                description:
                    "A platform that helps students prepare for placements with coding questions, learning resources, and progress tracking.",
                _id: "68d4f89dc8f0d46dc8a8b147"
            }
        ],
        updatedAt: "2025-09-23T13:39:38.395Z",
        createdAt: "2025-09-23T13:39:38.395Z"
    },

    {
        personal_info: {
            full_name: "Virat Kohli",
            email: "virat.kohli@gmail.com",
            phone: "+91 9000000001",
            location: "Delhi, India",
            linkedin: "https://www.linkedin.com/in/viratkohli18",
            website: "https://viratkohli18.com",
            profession: "Professional Cricketer",
            image: viratpic
        },
        _id: "78e3b42c2d5ff49286cc148f",
        userId: "78d2e0bdcf2886efg03e7e98",
        title: "Virat Kohli Resume",
        public: true,
        professional_summary:
            "Professional international cricketer and former captain of the Indian national team. Known for consistency, leadership, and record-breaking performances across all formats of cricket.",
        skills: [
            "Batting",
            "Leadership",
            "Team Strategy",
            "Fitness Training",
            "Match Analysis",
            "Pressure Handling"
        ],
        experience: [
            {
                company: "Board of Control for Cricket in India (BCCI)",
                position: "Indian Cricket Team Captain",
                start_date: "2017-01",
                end_date: "2022-01",
                description:
                    "Led the Indian national cricket team across all formats. Achieved multiple international victories and maintained top ICC rankings.",
                is_current: false,
                _id: "78e3b42c2d5ff49286cc1490"
            },
            {
                company: "Royal Challengers Bangalore",
                position: "IPL Team Captain",
                start_date: "2013-01",
                end_date: "2021-01",
                description:
                    "Represented Royal Challengers Bangalore in the Indian Premier League and led the team as captain for several seasons.",
                is_current: false,
                _id: "78e3b42c2d5ff49286cc1491"
            }
        ],
        education: [
            {
                institution: "Vishal Bharti Public School",
                degree: "School Education",
                field: "Commerce",
                graduation_date: "2006-03",
                gpa: "",
                _id: "78e3b42c2d5ff49286cc1492"
            }
        ],
        template: "minimal-image",
        accent_color: "#6366F1",
        project: [
            {
                name: "Virat Kohli Foundation",
                type: "Charity Organization",
                description:
                    "A foundation focused on helping underprivileged children and promoting sports and education in India.",
                _id: "78e3b42c2d5ff49286cc1494"
            }
        ],
        updatedAt: "2025-09-25T15:10:21.184Z",
        createdAt: "2025-09-25T15:10:21.184Z"
    },

    {
        personal_info: {
            full_name: "Mahendra Singh Dhoni",
            email: "msdhoni@gmail.com",
            phone: "+91 9000000002",
            location: "Ranchi, Jharkhand, India",
            linkedin: "https://www.linkedin.com/in/msdhoni07",
            website: "https://msdhoni07.com",
            profession: "Former Indian Cricket Captain",
            image: dhonipic
        },
        _id: "89f4c53d3e6gg59397dd259g",
        userId: "89e3f1cedg3997fgh14f8f09",
        title: "MS Dhoni Resume",
        public: true,
        professional_summary:
            "Legendary Indian cricketer and former captain of the Indian national team. Known for calm leadership, finishing ability, and winning major ICC tournaments for India.",
        skills: [
            "Wicket Keeping",
            "Finishing Matches",
            "Leadership",
            "Team Strategy",
            "Game Awareness"
        ],
        experience: [
            {
                company: "Indian National Cricket Team",
                position: "Captain",
                start_date: "2007-09",
                end_date: "2017-01",
                description:
                    "Led India to victory in ICC T20 World Cup 2007, ICC Cricket World Cup 2011, and ICC Champions Trophy 2013.",
                is_current: false,
                _id: "89f4c53d3e6gg59397dd259h"
            },
            {
                company: "Chennai Super Kings",
                position: "Captain",
                start_date: "2008-01",
                end_date: "Present",
                description:
                    "Captain of Chennai Super Kings in the IPL and one of the most successful leaders in franchise cricket history.",
                is_current: true,
                _id: "89f4c53d3e6gg59397dd259i"
            }
        ],
        education: [
            {
                institution: "DAV Jawahar Vidya Mandir",
                degree: "School Education",
                field: "Commerce",
                graduation_date: "1998-03",
                gpa: "",
                _id: "89f4c53d3e6gg59397dd259j"
            }
        ],
        template: "minimal-image",
        accent_color: "#F59E0B",
        project: [
            {
                name: "Dhoni Cricket Academy",
                type: "Sports Training Academy",
                description:
                    "An initiative to train young cricketers and promote cricket development across India.",
                _id: "89f4c53d3e6gg59397dd259l"
            }
        ],
        updatedAt: "2025-09-25T15:26:49.652Z",
        createdAt: "2025-09-25T15:26:49.652Z"
    }

];