// ### Level 1: Automatic Table and Date Search (Required)

// Used the [index.html](StarterCode/index.html) file provided on the starter code folder.

// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

// Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

// Assign the data from 'data.js' to a descriptive variable
var tableData = data;

// Only one table body. 
var tbody = d3.select('tbody'); 

tableData.forEach( datajs => {

    // Append one table row "tr" to the table body
    var row = tbody.append("tr");

    Object.entries(datajs).forEach(([key, value]) => {
        var td = row.append('td').text(value);
    });

}); 

// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.

// <div class ="form-group"></div>
// <button id="filter-btn" type="button" class="btn btn-default"> Filter Table </button>

// Select the button
var button = d3.select("#filter-btn");

// Create event handler/s
button.on("click", runEnter);

function runEnter() {

    tbody.html("");
    
    // Prevent the page from refreshing. 
    d3.event.preventDefault();

    // <input class="form-control" id="datetime" type="text" placeholder="1/11/2011">
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(events => events.datetime === inputValue || events.city === inputValue || events.state === inputValue
        || events.country === inputValue || events.shape === inputValue );
    
    console.log(filteredData);

    filteredData.forEach( filtdatajs => {

        console.log(filtdatajs);

        var row = tbody.append("tr");

        Object.entries(filtdatajs).forEach(([key, value]) => {
            var td = row.append('td').text(value);
        });

    });

};
