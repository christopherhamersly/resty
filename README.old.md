# resty

## V.1.0.1
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