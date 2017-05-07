var url = "http://tiny-za-server.herokuapp.com/collections/nealtodolist";


var title = $('.form-element'); //
var output = $('#outputArea'); // Output area with div id outputArea
var input = $('#task'); // Input from user using input id task

title.on('submit', function(e) {  // Once the form-element is submitted, Do:
  e.preventDefault(); // Prevents the page from having to refresh
  $.ajax( {  // Using ajax to request the creation of new data using POST
    type: 'POST', // GET, POST, PUT, DELETE
    contentType: 'application/json', // Using JavaScript Object Notation
    // Use contentType for data we send, datayType is for data we receive
    url: url, // url to server
    data: JSON.stringify( // method converts a JavaScript value to a JSON string
      { // data. is then used later
        todoItem: input.val() // Takes the value of the input and stores it in toDoItem
      }
    )
  }).then(function(data,status,xhr){ // ajax settings & response from server above, now callback
    output.prepend('<p>' + data.todoItem  + '</p>'); // Places toDoItem in output area
  })
});

function getToDo()  { // A function that sends an ajax request to read existing data
  $.ajax({ // syntax
    type: 'GET', // Request to read existing data using GET
    dataType: 'json', // dataType for data we receive
    url: url // server

  }).then(function(data, status, xhr){ // Callback for ajax request
    data.forEach(function(item, index, array){ // for each item in the array,

      console.log(item.todoItem)  // Produce output
      output.append('<p>' + item.todoItem  + '<p>');
      // Add Delete button for each item
    })
  //  var deleteButton = .find('.todo-delete')
    //    clickDelete(deleteButton, item)
    //  })
  })

//function deleteToDo(item) {
//    $.ajax({
//      type: 'DELETE',
//      url: url + '/' + item._id,
//    })
//  }



getToDo();  // Calls function
}
