document.addEventListener('DOMContentLoaded', () => {
  const newForm = document.querySelector('#new-item-form');
  newForm.addEventListener('submit', handleNewFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all-button');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewFormSubmit = function (event) {
  event.preventDefault();

  const rollerCoasterItem = createrollerCoasterItem(event.target);
  const coasterList = document.querySelector('#coaster-list');
  coasterList.appendChild(rollerCoasterItem);

  event.target.reset();
}

const createrollerCoasterItem = function (form) {
  const rollerCoasterItem = document.createElement('div');
  rollerCoasterItem.classList.add('coaster-list-item');

  const coastername = document.createElement('p');
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

const handleDeleteAllClick = function (event) {
  const coasterList = document.querySelector('#coaster-list');
  coasterList.innerHTML = '';
}
