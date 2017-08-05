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
    title: 'raPlus',
    company: `Teammates: Justin Guyton, Vishruth Reddy, Danny Weiner
      Technologies: Flask Python, PostgreSQL, Jinja, Materialize, Less`,
    date: 'January 2017 - May 2017',
    description: `As Resident Advisors, two of our duties are logging floor events, and recording 1 on 1 meetings with our residents. Three of my fellow programmer-RAs and I wanted a way to efficiently do that, so we prototyped this content management system and called it raPlus. I implemented user sessions and user permissions with Flask-login and Flask-Principal, respectively, and contributed to data display.
                  This project was my first true team effort, and working with three other people on a sizable application was a great experience. Their successes and obstacles were my successes and obstacles. I learned and grew so much, and I’d like to think I helped some of my teammates do the same.
                  Take a look around!\n
                  Example email: example@example.com
                  Password: example

    `,
  },
};
export default projects;
