/**
* GET /
* Home page.
*/
var Course = require('./../models/Course')

exports.index = function(req, res) {
    Course.find(function(err, courses){
        res.render('course/index', {
            title: 'Courses',
            courses: courses
        });
    });
};
exports.view = function(req, res) {
    Course.findById(req.param.id, function(err, course){
        res.render('course/view', {
            title: 'Course',
            course: course
        });
    });
};

exports.codecademyHtmlAndCssTrack = function(req, res) {
    res.render('courses/codecademy-html-and-css-track', {
        name: "Codecademy HTML & CSS Track",
        link: "http://www.codecademy.com/tracks/web",
        image: "https://d13yacurqjgara.cloudfront.net/users/98247/screenshots/1673756/codecademy_design.png",
        time: 7,
        directions: [
            "Let's learn HTML and CSS! Then we'll understand the structure (HTML) and the style (CSS) that makes up all webpages.",
            "More than 5 million people have worked their way through this short, interactive course. Once you finish it, you'll be able create your own webpages from scratch."
        ]
    });
};

exports.codeSchoolDiscoverDevtoolsCourse = function(req, res) {
    res.render('courses/code-school-discover-devtools-course', {
        name: "Code School's Discover DevTools",
        link: "http://discover-devtools.codeschool.com/",
        image: "https://d1ffx7ull4987f.cloudfront.net/images/achievements/large_badge/197/completed-discover-devtools-b769c8b681384be3ad04cdf813b4a62c.png",
        time: 4,
        directions: [
            "Did you know you can change the HTML and CSS on this page? You can even inject JavaScript. In fact, you can do this on any webpage!",
            "Chrome has built in DevTools that allow you to debug webpages, right in your browser. This is a super handy tool when you're building web applications.",
            "This course will walk you through using these tools, and test your new skills with 75 exercises."
        ]
    });
};

exports.codeSchoolTryJqueryCourse = function(req, res) {
    res.render('courses/code-school-try-jquery-course', {
        name: "Code School's Try jQuery Course",
        link: "https://www.codeschool.com/courses/try-jquery",
        image: "http://logoness.com/wp-content/uploads/2014/09/code-school-logo.jpg",
        time: 7,
        directions: [
            "jQuery gives you an easy way to modify your HTML and CSS without reloading your page.",
            "Code School's interactive jQuery course will help you understand how to manipulate page elements and capture information that your users give you."
        ]
    });
};

exports.codecademyJavascriptTrack = function(req, res) {
    res.render('courses/codecademy-javascript-track', {
        name: "Codecademy JavaScript Track",
        link: "http://www.codecademy.com/tracks/javascript",
        image: "https://d13yacurqjgara.cloudfront.net/users/98247/screenshots/1673756/codecademy_design.png",
        time: 10,
        directions: [
            "All right, now let's start coding!",
            "Codecademy's popular JavaScript track will teach you some basic syntax and common programming data structures in just a few hours."
        ]
    });
};

exports.harvardIntroductionToComputerScienceCs50Course = function(req, res) {
    res.render('courses/harvard-introduction-to-computer-science-cs50-course', {
        name: "Introduction to Computer Science",
        link: "https://www.edx.org/course/harvardx/harvardx-cs50x-introduction-computer-1022#.VDWSfSldWpQ",
        image: "http://content.sportslogos.net/logos/31/695/full/k7ahkuime41f6elmq8qx.png",
        time: 150,
        directions: [
            "Harvard's CS50 course is one of the most popular online courses of all time. It will give you a solid programming foundation.",
            "This course will introduce you to algorithms, databases, data structures, and a ton of theory.",
            "It's a long course, so be sure to mix it up with frequent pair programming sessions on FreeCodeCamp challenges."
        ]
    });
};

exports.linuxCommandLineTutorial = function(req, res) {
    res.render('courses/linux-command-line-tutorial', {
        name: "Linux Command Line Tutorial",
        link: "https://www.udemy.com/linux-command-line-volume1/",
        image: "https://udemyimages-a.akamaihd.net/course/200_H/95246_69f4_7.jpg",
        time: 2,
        directions: [
            "If you are using a Mac or a Linux computer, this short course will help you learn some basic commands to get around your terminal.",
            "If you are using a Windows computer, you can either skip this course or install a linux emulator here: http://cygwin.com/install.html"
        ]
    });
};

exports.codeSchoolTryGitCourse = function(req, res) {
    res.render('courses/code-school-try-git-course', {
        name: "Code School's Try Git Course",
        link: "https://www.codeschool.com/courses/try-git",
        image: "http://logoness.com/wp-content/uploads/2014/09/code-school-logo.jpg",
        time: 2,
        directions: [
            "Have you ever accidentally deleted something? With Git, you will never have that problem again.",
            "Git is a Version Control System. It will track all changes to your files. That way you don't have to worry about your code breaking. You can just rewind time to back when your code worked right.",
            "This short course will help you install git and learn how it works."
        ]
    });
};

exports.codeSchoolRealTimeWithNodeJsCourse = function(req, res) {
    res.render('courses/code-school-real-time-with-node-js-course', {
        name: "Code School's Real-time web with Node.JS",
        link: "https://www.codeschool.com/courses/real-time-web-with-node-js",
        image: "https://d1ffx7ull4987f.cloudfront.net/images/achievements/large_badge/107/completed-real-time-web-with-node-js-c8408b2b17ff6492d3f4d241c0db322d.png",
        time: 10,
        directions: [
            "Learn NodeJS, the web server that makes the MEAN Stack possible.",
            "You'll also get exposure to related technologies, like the web development framework ExpressJS, Redis and WebSockets.",
            "Only the first section of this course is free, but you can use your two-day Code School free trial to finish it."
        ]
    });
};

exports.codeSchoolShapingUpWithAngularJsCourse = function(req, res) {
    res.render('courses/code-school-shaping-up-with-angular-js-course', {
        name: "Codeschool's Shaping up with Angular.js",
        link: "https://www.codeschool.com//courses/shaping-up-with-angular-js",
        image: "https://d1ffx7ull4987f.cloudfront.net/images/courses/large_badge/109/shaping-up-with-angular-js-83ceb89bd5255391f25230727ae3f019.png",
        time: 10,
        directions: [
            "AngularJS is a powerful front end JavaScript framework. It's more powerful than jQuery, but it's also more challenging to master.",
            "AngularJS is used heavily by Google and many other high tech companies. As such, it is a hot skill, and employers are looking for software engineers who are good with AngularJS."
        ]
    });
};

exports.m101jsMongoDBForNodeJsDevelopersCourse = function(req, res) {
    res.render('courses/m101js-mongodb-for-node-js-developers-course', {
        name: "M101JS: MongoDB for Node.js Developers",
        link: "https://university.mongodb.com/courses/M101JS/about",
        image: "http://fc01.deviantart.net/fs70/f/2010/168/e/1/Icon_MongoDB_by_xkneo.png",
        time: 40,
        directions: [
            "MongoDB is a powerful Document Store Database. One reason it is so popular is that you can query it using JavaScript.",
            "Instead of using traditional table to store data (similar to a spreadsheet), MongoDB stuffs everything into huge documents. It can store massive amounts of data more efficiently than traditional SQL-based databases, but has fewer features.",
            "Tengen, the company that created MongoDB, has opened this course to everyone for free. It has specific start and end dates, so you may have to wait a few weeks for a session starts. In the meantime, you should keep working on other FreeCodeCamp challenges and projects."
        ]
    });
};