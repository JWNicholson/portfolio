NASA Asronomy Picture Of The Day (APOD)
+++++++ 
This project will use react and axios to get the NASA's daily pic and info (JSON), and display
it in a web page
+++++++
Make API request, and distrubute returned properties to be displayed.

Components
    Project Header
    NasaPage -comp
        Grid-function w/props
            uses state (of returned data), useEffect
             Card - consumed by Grid
    Project Footer

props - updated info

Dependencies (not installed with create-react-app)
    axios
    

CSS  - use modules

####################################################
html
flexbox

Layout -
 App
   Header
   Main
    Content - image and blurb
   Footer

++++++++++++++++++++
Options 
1.date picker giving ability to check photo archives -
# Default date is current Day
# User can pick from calender, but not ahead of the current day
# Calendar needs to be cleared afterwords??
#

