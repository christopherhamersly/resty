# resty

## V.1.0.4
###  Author Chris Hamersly

#### Monday Changes

1. As a user, I expect an easy to read and understand user interface so that I can use the application intuitively
1. As a user, I want to enter the URL to a REST API and select the REST method to use to access it
1. As a user, I want visual confirmation that my entries and selections are valid so that I have confidence the application will be able to fetch the API data that I’ve requested
And as developers, here are the high level development tasks that address the above end user requirements

1. Create a visually appealing site with a Header, Footer, and a large content area
1. Create a form that asks for a URL
1. Create buttons that let the user choose from the REST methods (get, post, put, delete)
1. When the form is filled out, and the button is clicked, display the URL and the method chosen

#### Tuesday Changes

1. As a user, I want to enter the URL to an API and issue a GET request so that I can retrieve it’s data
1. As a user, I want to see the results returned from an API request in my browser in a readable format
1. Application Flow:

1. User enters an API URL
1. Chooses a REST Method
1. Clicks the “Go” button
1. Application fetches data from the URL given, with the method specified
1. Displays the response headers and results separately
1. Both headers and results should be “pretty printed” JSON


<!-- //make a new Results page -->
//fetch data from an API
//Clicks get, need an event handler on get
<!-- //Make a new go button -->
//Renders data from the URL into the results div
<!-- //Adds a new place below to capture the API results -->
//Normalize data to make it "pretty printed JSON



//Form page
//Expects a function to be sent to it as a prop
//Renders a URL entry form
//A selection of REST methods to choose from (“get” should be the default)
On submit
//Send the API results back to the <App> using the method sent down in props


//Results page
Expects the count, headers, results to be sent in as props
Renders the count
Renders the Result Headers as “pretty” JSON
Renders the Result Body as “pretty” JSON

#### Wednesday Changes

1. As a user, I want to be able to use all REST methods so that I can do more than just get data
As a user, I want a simple list of all previous queries I’ve run so that I can easily see which queries  I’ve run before
1. As a user, I want to click on an old query and have my selections appear in the form for me, so I don’t have to re-type them
1. As a user, I want to see a “loading” indicator while RESTy is fetching data so that I know it’s working on my request

#### Thursday Changes
1. As a user, I want to see all of my previous queries as a separate page so that I can browse them in greater detail
1. As a user, I would like to view a separate “Help” page so I can learn how the application works


>To Do's
1. Add a menu bar to the header
1. Link labeled “Home” that links to ‘/’ and shows the search form/results page
1. Link labeled “History” that links to ‘/history’ and loads the history page
1. Link labeled “Help” that links to ‘/help’ and loads the about us page

>Home Page
1. Add a simple history list to the left side of the application
1. List all previous queries, showing the method and the URL
1. When a user clicks a previous query, populate the RESTy forms with the query information
1. Completely hide the output area (Headers & Results) when there are none to display
1. Display any fetch/load errors in place of the results area, if they occur
1. Add a “Loading” indicator while fetching
1. When the user clicks the “Go!” button, show a loading icon on the page
1. When the fetching of results is complete, remove the loading icon and show the results

>History Page
1. Maintain a list of every unique and successful API call the user has made
1. On the History page, show a list of ever previous API call
1. Clicking on an entry shows the full details of that query in a separate section on the page
URL, Method, Body
1. Optionally, you can store other metadata about the query (time ran, bytes returned, etc) to show your users
1. Show a button labeled “Re-Run” that would execute that API call again and shows the home page with the form pre-filled

>Help Page
1. Display static content detailing how a user should use the ReSTY application