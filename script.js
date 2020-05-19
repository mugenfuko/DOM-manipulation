const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

// Adding a red paragraph
const pRed = document.createElement('p');
pRed.style.color = 'red';
pRed.textContent = 'Hey I\'m red!';
container.appendChild(pRed);

// Adding a blue h3
const h3Blue = document.createElement('h3');
h3Blue.style.color = 'blue';
h3Blue.textContent = 'I\'m a blue h3!';
container.appendChild(h3Blue);

// Adding a div with black border and pink backgroundColor
const div = document.createElement('div');
div.style.cssText =
'border-style: solid; border-color: black; background-color: pink';
// Adding a h1 and p into this div
const h1 = document.createElement('h1');
h1.textContent = 'I\'m in a div';
const p = document.createElement('p');
p.textContent = 'ME TOO!';
div.appendChild(h1);
div.appendChild(p);
container.appendChild(div);

// Adding onclick event with a single property
const btn1 = document.querySelector('#btn1');
btn1.onclick = () => alert('Hello World');

// Adding onclick event which allows for multiple event listeners
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    alert("Hello World");
});

// Function for onclick event listener
function alertFunction() {
    alert('YAY! YOU DID IT!');
}
