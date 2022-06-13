# studbud

&#39;studbud.&#39; is a web app catered toward students with study anxiety, designed to help them structure their study lessons in a way that allows them to effectively manage time and organise all their study resources in one place.

(A NOTE ABOUT MY JAVASCRIPT: I had an issue where in the local server the javascript for a page would not load unless I made a change to the js file and saved, and I believe it was because of everything being imported to script.js. So, to bypass this issue I had to link multiple js files to a html page)

## Landing page/Kanban board

The studbud. landing page is the Kanban board page, this is so that users can get an overview of their tasks as soon as they decide to start studying. The colour scheme is bright and in mostly blue green shades, as these colours are known to inspire productivity and calm.

On this page users can enter a &quot;session&quot; by clicking the start session button, which opens the pomodoro timer and changes the background colour to green. This shift in the appearance of the web app is to encourage the user to shift their brain into a study mindset.

Users can add tasks with the &#39;+ new task&#39; button, which will open a modal containing a form. When they submit the form, the task will appear in the tasklist, and can be dragged into the completion progress columns to the right. The colour of the task will be different depending on the priority.

Changes from mock-up:

- The tasklist was originally supposed to be hidden to the side, and expandable when the user clicked the arrow. But the original concept of the tasklist being separate and having duplicates of the tasks seemed redundant, and so it was integrated into the Kanban board.
- The pomodoro timer was originally meant to appear in the header section of the page, but when trying to style the page to be responsive it looked very cramped, and so I decided to display it as a modal that is fixed to the bottom left
- The music player supposed to appear when the user entered a session, but with the timer fixed to the bottom left, having the music player appear together with the pomodoro would make the screen look cluttered, so users can choose whether they would like to open it from the nav menu
- The add column button was originally a plus icon and positioned to the right next to the column headers, but I had an issue where new columns were created on top of the button, so it was moved to the top of the Kanban board
- The pomodoro timer has set time intervals, so as to encourage users to be consistent, and not procrastinate with short time intervals, or over-extend themselves with long intervals.
- The integrated stopwatch that tracked how long users spent on each task was removed as it was unnecessary, since users would already be tracking their work time with the pomodoro timer.
- The mood and description inputs for each task were also discarded for the sake of simplicity, and because the task divs would be unnecessarily large
- The &quot;session&quot; function was limited to the kanban page only, as it didn&#39;t make much sense in terms of the user flow to be able to start a session on every page.
- Due to time restraints, I was unable to implement Kanban swimlanes that acted as categories for the tasks

## Materials and resources

On this page users can save resources and links, and organise them into specific folders.

Changes from the mock-up:

- Since the category function was removed from the Kanban board, users will have to create their own folders instead of sorting into existing categories from the Kanban board
- For simplicity, the file upload function was removed
- I attempted to code the folder system like the mock-up, but had issues with appending items to the correct folder, so I decided to structure it a different way which I think is a lot easier and quicker to use
- It has a similar flow to the original concept, but instead of adding resources from within each folder, users just choose which folder they want to sort the item to via the add resource form

## Stopwatch timer

On this page users are able to utilise a stopwatch timer for their study sessions, perhaps to time how long it takes to solve a problem or track their how long they study. They can start, stop, and reset the timer, as well as record laps.

Changes from the mock-up:

- The timer units are hours, minutes and seconds instead of minutes, seconds, and milliseconds because it is more useful and users are able to utilise the timer for longer periods of time

## General design decisions:

- Most of the buttons are displayed as icons to make the design cleaner and more aesthetically appealing. Users also have pre-existing mental models of what certain icons do and mean (also known as the Jakob&#39;s Law of Internet User Experience), and so they would most likely understand that a pencil icon allows them to edit, a cross allows them to delete or exit, etc. In cases where an icon might be confusing, buttons have text content (ex. the clear laps button on the stopwatch page, a minus icon or cross may be confusing, so a button with text was implemented instead)
- I added alerts across all the pages which would make sure the user had completed all input fields in a form, as well as to instruct them on how to make changes to elements (kanban columns and folders)

## Reflections

Overall this was a very challenging but rewarding project to complete. It definitely improved my web development skills and made me eager to continue learning javascript and other code languages.

Improvements I would like to make:

- Adding kanban category swimlanes
- Clicking a task opens a modal displaying the details of the task, as well as allowing edits
- An auto-cite function in the materials and resources page
- Using a music API that allows me to style the music player to match the rest of the web app
- Implementing local storage so users can have all their tasks and resources saved

## References

Isaiah, A., 2022. How to build a Pomodoro Timer App with JavaScript. [online] Freshman. Available at: \&lt;https://freshman.tech/pomodoro-timer\&gt;

Payenda, B., 2020. To Do App Using HTML, CSS and JavaScript (Drag &amp; Drop)|Project #10/100. [video] Available at: \&lt;https://www.youtube.com/watch?v=m3StLl-H4CY\&gt;

Potts, T., 2021. Build a Slide out Hamburger Menu with HTML, CSS &amp; JavaScript. [video] Available at: \&lt;https://www.youtube.com/watch?v=OFKBep95lb4\&gt;

Potts, T., 2021. Learn HTML, CSS &amp; JavaScript by coding a Stopwatch | A beginner tutorial. [video] Available at: \&lt;https://www.youtube.com/watch?v=49f1cjZWRJA\&gt;

Sitepoint. 2022. Javascript how to make laps in the stopwatch?. [online] Available at: \&lt;https://www.sitepoint.com/community/t/javascript-how-to-make-laps-in-the-stopwatch/244936\&gt;

Stack Overflow. 2013. Clearing my form inputs after submission. [online] Available at: \&lt;https://stackoverflow.com/questions/14589193/clearing-my-form-inputs-after-submission\&gt;

Stack Overflow. 2015. How to make a single button act as a Start and Stop button in JavaScript?. [online] Available at: \&lt;https://stackoverflow.com/questions/31579700/how-to-make-a-single-button-act-as-a-start-and-stop-button-in-javascript\&gt;

Stack Overflow. 2018. addEventListener on a querySelectorAll() with classList. [online] Available at: \&lt;https://stackoverflow.com/questions/50643302/addeventlistener-on-a-queryselectorall-with-classlist\&gt;

TechnicalCafe, 2018. Create a Stopwatch using HTML, CSS, and JavaScript. [video] Available at: \&lt;https://www.youtube.com/watch?v=1INmsFnD-u4\&gt;

Dean, L., 2020. The colour that boosts your focus by 31%. [online] Yahoo.com. Available at: \&lt;https://au.news.yahoo.com/the-colours-that-boost-creativity-productivity-focus-calm-001312971.html?guce\_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&amp;guce\_referrer\_sig=AQAAAH-4qjrFGwtCw-6fEe1GkfX7Y72tpHJf\_sX8y08fzdlq1uUO1b1W57aqkJtYQKzmEGI7ApZ4wAQdXpGoRI\_b1m9USaa1JkeCUHusKqAUJ4NED5giRmnHp0sa0hr75MyW638QZjp9VaU6nEJeornFfrvX1laq8keHhY4f0oYtAoVE\&gt;

Yablonski, J., 2022. Home | Laws of UX. [online] Laws of UX. Available at: \&lt;https://lawsofux.com/\&gt;

Fonts from Adobe Fonts and Google Fonts

[https://fonts.adobe.com/](https://fonts.adobe.com/) https://fonts.google.com/

All icons from FontAwesome [https://fontawesome.com/](https://fontawesome.com/)

Favicon by Ben Sperry, retrieved via Figma Iconify plugin

Music from Spotify https://www.spotify.com/au/
