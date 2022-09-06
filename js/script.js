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
function showPage(list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9 
   const studentListUl = document.querySelector('.student-list');
   studentListUl.innerHTML = '';

   //loop through each item in the student list data file and display individually on the screen
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         let studentList = `  
            <li class='student-item cf'>
               <div class='student-details'>
                  <img class='avatar' src='${list[i].picture.medium}' alt="Profile Picture"'>
                  <h3>${list[i].name.first} ${list[i].name.last}</h3>
                  <span class='email'>${list[i].email}</span>
               </div>
               <div class='joined-details'>
                  <span class='date'>Joined ${list[i].registered.date}</span>
               </div>
            </li>
       `
       studentListUl.insertAdjacentHTML('beforeend', studentList);
      }
   }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   const numOfPages = Math.ceil(list.length / 9);
   const linkListUl = document.querySelector('.link-list');
   linkListUl.innerHTML = '';

   //loop through pagination pages - page # should start at 1, not 0. Display buttons on the bottom of the screen
   for (let i = 1; i <= numOfPages; i++){
      let button = `
      <li>
      <button type='button'>${[i]}</button>
      </li>
      `
      linkListUl.insertAdjacentHTML('beforeend', button);    
   }

   //create addEventListener to highlight 'active' page only when user clicks on the page button. 
   const firstBtn = document.querySelector('button');
   firstBtn.className = 'active';
   linkListUl.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
         document.querySelector('.active').className = '';
         e.target.className = 'active';
         showPage(data, e.target.textContent);
      }
   })
}

// Call functions
addPagination(data);
showPage(data, 1);


