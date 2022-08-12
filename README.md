![Logo](https://github.com/CFG-Fullstack-1-Group-5/packing-list-project/blob/7b445adbeb869d72f4877d47cb952a77429f8054/go-packing-project/src/assets/logo.png)

<pre>
<b>go</b> (irregular verb)
1. To move from one place to another.
    
<b>packing</b>
1. The action of putting things together, especially of putting clothes into a suitcase for a journey.
</pre>


## :earth_africa: PROJECT OVERVIEW
Searching in Google for “packing list” brings back about 314,000,000 results. Queries include: “What should I pack for 7 days away?”, “How do I pack for 8 days?”, “What did I forget to pack?”. Packing can be a stressful task and people look for readymade solutions.

Our project is an answer to this challenge. It takes into consideration forecast at a chosen destination for the selected dates, duration of stay, anticipated activities and preferred style. All this to create a perfect packing list, with items that can be ticked off once they land in a suitcase. Simple and stress free.

### Technology used: 
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)

## TABLE OF CONTENTS:
- [INSTALLATION](#electric_plug-installation)
  - [Setting up database](#small_blue_diamond-setting-up-database)
  - [Setting up backend](#small_blue_diamond-setting-up-backend)
  - [Setting up frontend](#small_blue_diamond-setting-up-frontend)
- [RUNNING THE APP](#clapper-running-the-app)
- [TESTING](#clipboard-testing)
- [TEAM](#busts_in_silhouette-team)
- [CREDITS](#raised_hands-credits)
- [LICENSE](#guardswoman-license)

## :electric_plug: INSTALLATION
### :small_blue_diamond: Setting up database:
- [ ] Navigate to `.\src\backend\`. There are two files: `go_packing_database.sql` & `go_packing_stored_procedure.sql`. Run them both in MySQL Workbench.
- [ ] Open `.\src\backend\config.py` and set up your MySQL password.

### :small_blue_diamond: Setting up backend:
(If you don't have it working already, set up pip by following: https://pip.pypa.io/en/stable/installation/)
- [ ] pip install flask
- [ ] pip install -U flask-cors
- [ ] pip install PyMySQL

### :small_blue_diamond: Setting up frontend:
- [ ] npm install
- [ ] (or, in case of an error) npm install --force 

## :clapper: RUNNING THE APP
Once everything has been set, run in parallel terminals:
- `py .\src\backend\server.py`
- `npm start`

The app will be available at http://localhost:3000.

### Example of app usage:
![App working](https://s4.gifyu.com/images/website-working2.gif)

## :clipboard: TESTING
We have written some tests for our project. They can be located in the Unit test folder. To run:
- [ ] for frontend testing, type in terminal: npm run test
- [ ] for backend testing (this requires installation of pytest module: `pip install -U pytest`), type in terminal: pytest
- [ ] for SQL testing: copy content of .sql file and run in MySQL Workbench

## :busts_in_silhouette: TEAM
We are a group of [![CFG](https://custom-icon-badges.herokuapp.com/badge/CodeFirstGirls-white?logo=code-first-girls)](https://codefirstgirls.com/) students on a Full Stack learning path. Prior to starting CFGdegree, we had minimal (to none) knowledge of programming. This is our final project for the course. Team members:

[@RaiGordon](https://github.com/RaiGordon) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=plastic&logo=linkedin&logoColor=white.svg)](https://www.linkedin.com/in/rachel-gordon-634120233/)

[@kav1ta](https://github.com/kav1ta) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=plastic&logo=linkedin&logoColor=white.svg)](https://www.linkedin.com/in/kavita-thind/)

[@rachelbutterfield](https://github.com/rachelbutterfield) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=plastic&logo=linkedin&logoColor=white.svg)](https://www.linkedin.com/in/rachel-butterfield-78196a14a/)

[@lrid](https://github.com/lrid) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=plastic&logo=linkedin&logoColor=white.svg)](https://www.linkedin.com/in/laura-ridpath/)

[@asikowe](https://github.com/asikowe) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=plastic&logo=linkedin&logoColor=white.svg)](https://www.linkedin.com/in/joanna-b-4043a6198/)

## :raised_hands: CREDITS
Balloon photo used in the project by <a href="https://unsplash.com/@sadswim?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">ian dooley</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>.

Custom CFG badge made thanks to https://github.com/DenverCoder1/custom-icon-badges.

## :guardswoman: LICENSE
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)