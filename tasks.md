## LAB 12
**Add API Routes**
- Get info about a single book DONE
- Ability to add new book
- Add message saying that route isn't valid for any other endpoint DONE

*UI*
- Mobile-friendly, single-page view with routes:
    - In routes.js and add the following endpoints:
        - List View: Books by title and author with the image_url displaying a rendered image of the book
        - /books/:book_id - Detail View of one complete book record
        - /books/new - Form View that will allow the user to enter a new record into the DB
        - /about - View of your about information
- Navigate from booklist to single book's page by clicking title
- Enter new book data into form and save to booklist
- Styling:
    - Style using mobile-only approach; use  provided wireframes as a general guideline for the minimum styling requirements, while adding your own personal taste and color palette.
    - Ensure the proper use of SMACCS principles.

##LAB 13
**Add delete functionality** (IF TIME)
- Be able to click a delete button in the detail view of a book.
- Be able to delete a single book so that my list is always current.
- Add endpoint for a DELETE request to /api/v1/books/:id.
- After a successful update, a response should be sent back to the user in the form of a 204 status code.
- Add new method called to your Book model for deletion. This method will interact with your API through the use of AJAX requests.

**Add update functionality**
- Be able to click an update button in the detail view of a book.
- Be able to update a book with a form that's pre-populated with that book's details.
- Be able to update a single book so that my list is accurate and can be modified as needed
- Add an endpoint for a PUT request to /api/v1/books/:id
- After successful update, a response should be sent back to the user in the form of a 200 status code.
- Add a new method called to your Book model for updating a single book. This method will interact with your API through the use of AJAX requests.


## LAB 14
**Access external API (google books)**
- Install and use superagent to make an HTTP GET request to Google's Book API from your server.
- Add an endpoint for a GET request to /api/v1/books/find which will make a superagent request from the client to the Google Books API and return a list of ten books that match the search query.
- Map over the array of results to build an array of objects that match the book model in your database.
- Send the newly constructed array of objects to your client in the response.

**Add search functionality, front-end**
- Add a new View to index.html with a class of search-view which contains a form for searching the Google Books API by title.
- Include a button to click when your want to trigger your search.
- Add a new View to index.html with a class of search-results, which contains a section and unordered list tag.
- Your <ul></ul> should include an id attribute for targeting and insertion of dynamic content.

**Add search functionality, back-end**
- Add a new client-side route to your routes.js file which will listen for /books/search, and invoke bookView.initSearchFormPage.
- Add a new view method to book-view.js called bookView.initSearchFormPage which will show the search form view and attach an event listener to the form.
- The event listener will trigger on submit, capturing the form data as an object literal. It will pass the object to Book.find as the book argument and bookView.initSearchResultsPage as the callback argument.
- Add a new view method to book-view.js called bookView.initSearchResultsPage which will show the search results view.
- This view method will also map over the Book.all array and append each of the books from your search using your toHtml method created earlier in the week.
- Add a new method to Book: Book.find that will make a request to your server's /api/v1/books/find path, then populate the Book.all array with the book objects returned from Google Books API for rendering later.