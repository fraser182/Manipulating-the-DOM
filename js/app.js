document.addEventListener('DOMContentLoaded', () => {
  const newForm = document.querySelector('#new-item-form'); // ELEMENT = #new-item-form
  newForm.addEventListener('submit', handleNewFormSubmit); // EVENT = submit

  const deleteAllButton = document.querySelector('#delete-all-button'); // ELEMENT = #delete-all-button
  deleteAllButton.addEventListener('click', handleDeleteAllClick); // EVENT = click
})

// CALLBACK - updates when handleNewFormSubmit is executed
const handleNewFormSubmit = function (event) {
  event.preventDefault();

// rns createRollerCoasterItem
  const rollerCoasterItem = createRollerCoasterItem(event.target);
  const coasterList = document.querySelector('#coaster-list');
  coasterList.appendChild(rollerCoasterItem);

  event.target.reset();
}

const createRollerCoasterItem = function (form) {
  const rollerCoasterItem = document.createElement('div');
  rollerCoasterItem.classList.add('coaster-list-item');

  const coastername = document.createElement('h2');
  coastername.textContent = "Coaster Name: " + form.coastername.value;
  rollerCoasterItem.appendChild(coastername);

  const park = document.createElement('p');
  park.textContent = "Park: " + form.park.value;
  rollerCoasterItem.appendChild(park);

  const rode = document.createElement('p');
  rode.textContent = "Have you rode this roller coaster? " + form.rode.value;
  rollerCoasterItem.appendChild(rode);

  const rating = document.createElement('p');
  rating.textContent = "Coaster Rating: " + form.rating.value;
  rollerCoasterItem.appendChild(rating);

  return rollerCoasterItem;
}
//  CALLBACK - updates html when handleDeleteAllClick is executed
const handleDeleteAllClick = function (event) {
  const coasterList = document.querySelector('#coaster-list');
  coasterList.innerHTML = '';
}
