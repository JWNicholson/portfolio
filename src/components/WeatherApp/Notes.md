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
