# FaveBall [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
One page React application for football enthusiasts! Pick your favourite team and keep updated on latest football news.
To create this application we have joined forces as it is our last EdX Bootcamp project.
## Table of content
- [Description and usage](#description-and-usage)
  - [Welcome Page](#welcome-page)
  - [Home Page](#home-page)
  - [Summary Page](#summary-page)
  - [Comparison Page](#savedteams-page)
- [Installation](#installation)
- [Future developement](#future-developement)
- [Authors](#authors)
## Description an usage
This app was created for purpose of keeping track of your favourite football team.
We used react with serval npm packages, such as Autocomplete npm package, fontawsome npm package, Bootstrap, Axios.
### Welcome Page
Only appears to user who has not visited us and has not chosen his favourite team. Has a top banner with basic information about what our website does and have autocomplete input field. Here you set your favourite team, which is then saved inside the local storage and used for website's api keys.</br>
![!](screenshot)
### Homepage
Here you can see the basic available information about your favourite team together with 12 news articles related to your team and football in general. Team banner cards contains buttons with link to your favourite teams official website, and to statistics and comparison part of our app.</br>
![!](screenshot)
### Summary Page
On this page you can see lead position, club names, All leagues are listed on the left side and then the league tables are displayed, to keep you in football loop.
![](screenshot)
### Comparison page
Here your favourite teams detailed data is generated and you can search another team to see how they are doing for comparison. </br>
![](screeenchot)
## Installation
If you would like to add or improve our website, simply download our repository and run NPM install.
## Future development
There are many features we thought of ,but were unable to put in place due to short time frame of our project, these are for example saving multiples of teams through league table to then render on comparison page. Create graphs when comparing the two teams, so user can clearly see how the teams are doing without reading all the information one by one.
## Authors
[https://github.com/ionb23](Ion Borziac)
- worked on comaprison page ,that requests multiple apis, also using async and await when running axios requests through forLoop.
[https://github.com/Yusen22](Ellijah Wilsher)
- worked on summary page, retrieving all, styling navbar and the footer.
[https://github.com/FrantiskaAli](Frantiska Rechkova)
- Created welcome and home page, wrote README