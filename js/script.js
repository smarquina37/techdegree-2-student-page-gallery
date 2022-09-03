/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function studentPage(list, page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * items 
   const ul = document.querySelector('.student-list');
   ul.innerHTML = '';

   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         
         const li = document.createElement('li');
         li.className = 'student-list cf';
         
         const div = document.createElement('div');
         studentDiv.className = 'student-details';
         
         const img = document.createElement('img');
         img.className = 'avatar';

         const h3 = document.createElement('h3');

         const span = document.createElement('span');
         emailSpan.className = 'email';

         const detailsDiv = document.createElement('div');
         joinedDiv.className = 'joined-details'

         const dateSpan = document.createElement('span');
         dateSpan.className = 'date';

      }
   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
