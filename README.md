# Heist.net - Service Project
This is my service project that I call Heist.net. In this project I made a webapplication that provides a service, which in this case is providing users with heists that users can view and choose to participate in. It is heavely inspired by crime.net from the game Payday 2 and there are many similarities between this project and the games system.

For this project I used Visual Studio Code (VS Code) as IDE, the languages I used are JavaScript, HTML and CSS, and the framework I used is VueJS. As runtime environment I use NodeJS.

**NOTE:** *This project is unfinished and have 2 pages that are completely unfinished and a relatively empty homepage. Most of the content can be found on the "Heist" page.*

### Run the program
This program has no build and executable file, so to run it, clone the project, navigate to the project in the console and run this command:
```bash
npm run electron:serve
```
Make sure that node is installed before running this command. If not, run:
```bash
npm install
```
in the project and then run
```bash
npm update
```
to get all of the node components that the project needs.

### How to use
*As previously stated, this project is unfinished and therefore the only content you can interact with is on the "Heist" page.*

On the heist page you will see all available heists, which are stored in a database. The information is updated every second to make sure that all users have the same information. On each heist you will see a "Take job" button under a job. Jobs that are already taken will have greyed out buttons and cannot be pressed. If a job is available you are able to press the button to take the job (the original plan was that you need to have an account to do this, but I didn't have time to implement it). When a job is taken, the button will become greyed out for every user using the app and the "available" prompt will change from "Yes" to "No".

A user can also filter heists by tactic, difficulty or both. This can be done by clicking a dropdown on top of the screen and selecting a tactic or difficulty. Doing this will only render the heists that meet the filter criteria.

Users can also create heists if they wish by clicking the "Create Heist" button on the top right of the "Heist" page. This will lead to a new page where the user can input the Heist name, tactic, difficulty and choose which job they will have in the heist. When the user clicks on the "Create Heist" button on the bottom of the screen, the user will be taken back to the "Heist" page, the data will be sent to the database, and the heist will be displayed among the other heists.
