jwn React Weather App plan, as added to my portfolio app

The basic purpose of this weather app is to get the current weather only. 
- visual presentation - use a card and possibly a city search-bar.
-- use a card design of it's own instead of the mother app's content-card.
-- change header color and card icon with weather change.
-display current weather and icon for selected location.
-optional features - forecasts, weather history, conditions across US Interstate routes.


Feature - get current weather.
API key - already have at openweathermap.org

possible icons - 
https://openweathermap.org/weather-conditions
https://www.hongkiat.com/blog/free-weather-iconsets/
https://www.iconfinder.com/iconsets/iconsland-weather
https://www.amcharts.com/free-animated-svg-weather-icons/


File Stucture in portfolio project-

src -> Pages -> weatherPage
src -> components -> weatherApp -> [components, elements,containers,scss, wthrAssets -> icons, etc.] 

App
|-Search bar
    |-Input
    |- Control Button(s)
|- WeatherCard
    |-Date
    |-Icon
    |-Temp
    |-Weather desctiption

SASS styling files -
src -> pages -> _weatherApp.scss
className convention - wthr-ctnr or wthr-element,etc..

use state https://reactjs.org/docs/thinking-in-react.html#step-3-identify-the-minimal-but-complete-representation-of-ui-state
-- search-bar uses state
-- weather condition uses state
---- temp, humidity, description

Code Organization
Components-
functional based component(easier to test and debug)

Elements-
functional based

Containers-
class based

Steps - 
build modulize static display

############  TDD  ###################
--1.Write test before writing code, to make sure test fails as a control.
--2.Write the code you wish you had ( like a component wrapper for instance) and add it to project
--3. Repeat until code is written and passing all tests

UX flow -
[Y]User visits page
[]User inputs desired location

Logic flow-
[Y]page renders weather app container

[Y]page renders weather card
-[]renders components
````````` Re-test when adding content ```````````
---[Y]renders card header
---[Y]renders searchbox with value of ''
---[]accepts user input from searchbox

---[Y]renders weather icon container
----[]page renders weather icon (static)
-----[]re-test when API is functioning

--[Y]page renders weather description container
---[]page renders weather description
-----[]re-test when API is functioning

Logic tests
---[]app makes get request from API server(No error codes)
---[]app recieves data from API server (200 code, JSON)





****** My test process
--use data-id tags to identify testable components (per Cypress best practices)

A. Header, Footer, Toolbar exists
B. side-drawer exists, not visible

1. visits weather page
2. weather app container should exist
3. h1 contains "Weather App"
4. weather card exists
5. card header exists
6. search box exists, should have value ''
7. weather icon container exists
8. weather description container exists

