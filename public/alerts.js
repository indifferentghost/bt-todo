import { createTodoItem } from "./createLineItem.js";

const btn = document.querySelector('button');
const ol = document.querySelector('ol');

// * hacky version for alerts
// every time a button is clicked
btn.addEventListener('click', () => {
    setTimeout(() => {
        const value = ol.lastChild.innerText;
        const li = createTodoItem(value);
        const alert = createAlert(li);

        document.body.appendChild(alert);

        // after 5 second alert should dissapera
        setTimeout(() => document.body.removeChild(alert), 5000);
    }, 500);
})

const createAlert = (children) => {
    const alertContainer = document.createElement('div');
    alertContainer.classList.add('alert-container');
    alertContainer.append(children);
    return alertContainer;
}

// setTimeout -> alert the last element added to OL