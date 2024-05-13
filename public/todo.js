import { createTodoItem } from "./createLineItem.js";

const textarea = document.querySelector('textarea');
const btn = document.querySelector('button');
const ol = document.querySelector('ol');

// when button is clicked
btn.addEventListener('click', () => {
    // grab value from input
    const text = textarea.value;

    // separate by new line
    const todoElements = text
        .split('\n')
        .reduce((items, todoItem) => {
            // create new li for each line
            const item = createTodoItem(todoItem);

            items.appendChild(item);
            return items;
        }, document.createDocumentFragment());

    // append to the DOM
    ol.appendChild(todoElements);

    // reset form
    textarea.value = '';
});
