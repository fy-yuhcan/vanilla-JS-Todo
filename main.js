import './style.css';
const onClickAdd = () => {
  const inputText = document.getElementById('add-text').value;
  document.getElementById('add-text').value = '';
  imcompleteTodo(inputText);
};

const imcompleteTodo = (todo) => {
  const li = document.createElement('li');
  const div = document.createElement('div');
  div.className = 'list-row';
  const p = document.createElement('p');
  p.className = 'todo-item';
  p.innerText = todo;

  const completeButton = document.createElement('button');
  completeButton.innerText = '完了';
  completeButton.addEventListener('click', () => {
    const movetarget = completeButton.closest('li');
    completeButton.nextElementSibling.remove();
    completeButton.remove();
    const backbutton = document.createElement('button');
    backbutton.innerText = '戻す';
    backbutton.addEventListener('click', () => {
      const todotext = backbutton.previousElementSibling.innerText;
      imcompleteTodo(todotext);
      backbutton.closest('li').remove();
    });
    movetarget.firstElementChild.appendChild(backbutton);
    document.getElementById('complete-list').appendChild(movetarget);
  });
  const deleteButton = document.createElement('button');
  deleteButton.innerText = '削除';
  deleteButton.addEventListener('click', () => {
    const deletetarget = deleteButton.closest('li');
    document.getElementById('imcomplete-list').removeChild(deletetarget);
  });
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
  document.getElementById('imcomplete-list').appendChild(li);
};
document.getElementById('add-button').addEventListener('click', onClickAdd);
