const projects = {
  Calendar: {
    title: 'Javascript Calendar',
    company: 'Technologies: Javascript/jQuery, PHP, MySQL',
    date: 'October 2016',
    description: `I was tasked to create this calendar while learning about JavaScript in my Rapid Prototyping course.  The calendar uses AJAX to communicate with a PHP backend that handles all querying of events. Calendar features include adding and deleting events, user login, password encryption, filtering and/or escaping all content, CSRF tokens, and HTTP-only cookies.
    At this point in my career, this calendar was the largest and most complex application I had ever built. If I were to revisit it I would make some serious structural changes, but it served as my first real introduction to web development, and it served well.`,
  },
  Chatroom: {
    title: 'Multi-Room Chat Server',
    company: 'Technologies: NodeJS, SocketIO',
    date: 'November 2016',
    description: 'Asynchronous Chat website where users can talk to each other! Users can create and join rooms, and the room admin can kick or ban other users.',
  },
  Wikapadia: {
    title: 'Wikapadia',
    company: 'Technologies: Ruby on Rails, Paperclip',
    date: 'December 2016',
    description: 'For my Rapid Prototyping final project, I made a joke website for my friend and then-TA, Chiraag. It was a simple image hosting, site akin to imgur, that also allowed post commenters to add images. This project was my first experience working with a modern web framework, Ruby on Rails. Going in I didn’t know a lick of Ruby, but I had a lot of fun figuring everything out.',
  },
  raPlus: {
    title: 'RAplus',
    company: `Teammates: Justin Guyton, Vishruth Reddy, Danny Weiner
              Technologies: Flask Python, PostgreSQL, Jinja, Materialize, Less`,
    date: 'January 2017 - May 2017',
    description: `As Resident Advisors, two of our duties are logging floor events, and recording 1 on 1 meetings with our residents. Three of my fellow programmer-RAs and I wanted a way to efficiently do that, so we prototyped this content management system and called it RAplus. I implemented user sessions and user permissions with Flask-login and Flask-Principal, respectively, and contributed to data display.
                  This project was my first true team effort, and working with three other people on a sizable application was a great experience. Their successes and obstacles were my successes and obstacles. I learned and grew so much, and I’d like to think I helped some of my teammates do the same.
                  Take a look around!\n
                  Example email: example@example.com
                  Password: example`,
  },
  SmartFan: {
    title: 'Bluetooth Low Energy SmartFan with Temperature Sensor',
    company: 'Technologies: Redbear Duo-RMMW, Micro Servo, Cordova, PhoneGap, Google Charts API',
    date: 'April 2017',
    description: `SmartFan model created for Internet of Things course. Redbear Duo had sensor to collect temperature data and a Micro Servo to simulate a fan. The Redbear Duo would send temperature data to a PhoneGap app, which was then graphed using the Google Charts API. The SmartFan was interfaced and controlled through the PhoneGap Cordova app.
    Two Settings: Smart Mode and Manual Mode
    - In Smart Mode, the fan will automatically turn on if the room temperature rises above a specific value, which the user can set via the app.
    - In manual mode, the fan can be turned on or off independent of the temperature of the room.`,
  },
  Almanacc: {
    title: 'Almanacc',
    company: `Teammates: Jeffrey Gu, Rahi Shah, Jonathan Shieh
              Technologies: Swift, Firebase, Facebook API, Google Maps API`,
    date: 'April 2017',
    description: 'Almanacc is an alumni connection application for IOS. It uses the Facebook API to pull friends\' locations. Users can search for specific cities, which will have lists of friends that are currently in that city. Almanacc also features a simple newsfeed, so users are notified whenever a friend changes their location or workplace. All location and work information is stored using Firebase.',
  },
  Movie: {
    title: 'Movie Search App',
    company: 'Technologies: Swift, OMDB API, FMDatabase',
    date: 'February 2017 - March 2017',
    description: `Movie search iPhone application that displays basic movie information (Title, poster, plot, rating, year, etc). Users could save movies queried through the OMDB API in an FM Database, and view saved movies in a separate favorites tab.
                  Note: This app was developed before the OMDB API was made private. Usage now requires becoming a patron of the API.`,
  },
  Draw: {
    title: 'Drawing App',
    company: 'Technologies: Swift',
    date: 'February 2017',
    description: 'Simple drawing app. Users can draw continuous lines with varying color, thickness and opacity. They can undo drawn lines and clear the screen. (Image below also features the extent of my drawing skills)',
  },
  Pet: {
    title: 'Virtual Pet App',
    company: 'Technologies: Swift',
    date: 'February 2017 - March 2017',
    description: 'Play with 5 different Virtual pets! This app was created with a focus on proper constraints to work across iOS devices, and on MacOS.',
  },
};
export default projects;
