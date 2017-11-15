var bio = {
    "name": "Utkarsh Prasad",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+919003243730",
        "email": "uttkarshprasad@gmail.com",
        "github": "UtkarshPrasad",
        "twitter": "@utkarsh",
        "location": "Allahabad"
    },
    "welcomeMessage": "Web Development Learner and on path to be a professional",
    "skills": ["HTML", "CSS", "Javascript", "Java"],
    "bioPic": "images/fry.jpg"
};

var education = {
    "schools": [{
            "name": "Dr. Virendra Swarup Public School",
            "city": "Kanpur, India",
            "degree": "High School",
            "majors": ["Science Stream"],
            "dates": 2013,
            "url": "drvsps.com/"
        },
        {
            "name": "SRM University",
            "city": "Chennai, India",
            "degree": "Bachelors",
            "majors": ["Electrical and Electronics"],
            "dates": 2017,
            "url": "https://www.srmuniv.ac.in/"
        }
    ],
    "onlineCourses": [{
        "title": "Front end web development",
        "school": "Udacity",
        "dates": 2017,
        "url": "https://www.udacity.com/"
    }]
};

var work = {
    "jobs": [{
            "employer": "Infosys",
            "title": "System Engineer",
            "dates": "2017",
            "location": "Mysore,India",
            "description": "Infosys Limited is an Indian multinational corporation that provides business consulting, information technology and outsourcing services. Headquarters are located in Bengaluru, India."
        },
        {
            "employer": "Data Technologies",
            "title": "Intern",
            "dates": "2017",
            "location": "New Delhi,India",
            "description": "Data technologies is a training institute in New Delhi, India. It provides training in various programming languages. I did training in Java language for backend web development."
        }
    ]
};

var projects = {
    "projects": [{
        "title": "Learning About Web Browsers",
        "dates": "2017",
        "description": "Doing study on different Web Browsers, their user experience and developer tools.",
        "images": ["images/chart.jpg", "images/chart1.jpg"]
    }]
};
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").append(formattedName);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").append(formattedRole);

    if (bio.skills.length > 0) {

        var email = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(email);

        var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(mobile);

        var gitHub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(gitHub);

        var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(twitter);

        var locations = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(locations);

        var bioPics = HTMLbioPic.replace("%data%", bio.bioPic);
        $("#imgBiopic").append(bioPics);

        $("#header2").append(HTMLskillsStart);

        var welcomeMess = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#welMess").append(welcomeMess);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
    }
};
bio.display();
work.display = function() {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();
projects.display = function() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        if (projects.projects[project].images.length > 0) {
            for (var image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
projects.display();

education.display = function() {
    for (var edu in education.schools) {
        $("#educations").append(HTMLschoolStart);
        var schoolName = HTMLschoolName.replace("%data%", education.schools[edu].name);
        var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
        var schoolTitle = schoolName + schoolDegree;
        $(".education-entry:last").append(schoolTitle);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);
        $(".education-entry:last").append(formattedMajor);
        var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[edu].city);
        $(".education-entry:last").append(formattedCity);
    }

    for (var edu1 in education.onlineCourses) {
        $("#onlines").append(HTMLonlineClasses);
        var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[edu1].title);
        var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[edu1].school);
        var onlineTotal = onlineTitle + onlineSchool;
        $(".online-entry:last").append(onlineTotal);
        var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[edu1].dates);
        $(".online-entry:last").append(onlineDates);
        var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[edu1].url);
        $(".online-entry:last").append(formattedUrl);
    }
};
education.display();


var email = HTMLemail.replace("%data%", bio.contacts.email);
$("#footerContacts").append(email);

var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#footerContacts").append(mobile);

var gitHub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#footerContacts").append(gitHub);

var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#footerContacts").append(twitter);

var locations = HTMLlocation.replace("%data%", bio.contacts.location);
$("#footerContacts").append(locations);

$("#mapDiv").append(googleMap);