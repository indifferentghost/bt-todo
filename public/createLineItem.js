export const createTodoItem = (text) => {
    const li = document.createElement('li');

    // when we click a line item
    li.addEventListener('click', () => {
        // add strike-through
        li.classList.toggle('strike');
    });

    li.textContent = text;
    return li;
}