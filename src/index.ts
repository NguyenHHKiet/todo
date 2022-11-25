// import { v4 as uuidv4 } from 'uuid';
// // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
// console.log(uuidv4());
const list = document.querySelector<HTMLDListElement>('#list');
const form = document.getElementById('new-task-form') as HTMLFormElement | null;
const input = document.querySelector<HTMLInputElement>('#new-task-title');

form?.addEventListener('click', (e) => {
  e.preventDefault();

  if (input?.value == '' || input?.value == null) {
    console.log('first');
  }
});
