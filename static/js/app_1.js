//building the JavaScript table (within the app.js file) and the HTML page (within an index.html file).

// import the data from data.js
const tableData = data;

// 11.5.1 Introduction to Dynamic Tables
function buildTable(source) {


    // Reference the HTML table using d3
    var tbody = d3.select("tbody");
  // First, clear out any existing data
    tbody.html("");
  // Next, loop through each object in the data
  // and append a row and cells for each value in the row

    var rowFunc = (dataRow) => {
    // Append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        var cellFunc = (val) => {
            var cell = row.append("td");
            cell.text(val);
        };
        Object.values(dataRow).forEach(cellFunc);
    };
    source.forEach(rowFunc);
}

buildTable(tableData);

//11.5.3 Add Filters
function handleClick() {
    let date = d3.select("#datetime").property("value");                                                                                                    
    let filteredData = tableData;

//11.5.4 Use the “If” Statement
// if-statement syntax
// if ( condition ) { code to execute } else {}
//If there is a date already set, then use that date as a filter. If not, then return the default data.
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
// Rebuild the table using the filtered data
// @NOTE: If no date was entered, then filteredData will
// just be the original tableData.
    buildTable(filteredData);
};
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
