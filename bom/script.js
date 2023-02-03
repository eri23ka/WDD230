const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');


/*using the enter keyboard to submit.... button
document.addEventListener('keypress', function (e) {
 	if (e.keyCode === 13 || e.which === 13) {
 		e.preventDefault();
 		return false;
    }*/


button.addEventListener('click', () => {
    /*const myItem = input.value;
    input.value = '';*/
    if (input.value !== '') {
        let chapters = input.value;

        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');
        li.textContent = chapters;
        deleteBtn.textContent = 'Delete ❌';
        deleteBtn.addEventListener('click', () => {
            list.removeChild(li);
        });
        li.appendChild(deleteBtn);
        list.appendChild(li);
    }
    input.value = '';
    input.focus();
});
