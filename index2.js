


// DOM MANIPULATION



// Event Delegation

// It allows users to append a SINGLE event listener to a parent element that adds it to all of its present AND future descendant that match a selector



// Bad Example____________________________________________________________
// const item1 = document.querySelector('.item-1');
// 
// item1.addEventListener('click', (event) => {
//     console.log('Football is clicked');
// 
//     const target = event.target;
// 
//     if (target.matches('li')) {
//         target.style.backgroundColor = 'rgba(255, 255, 255, 0.200)';
//     };
// });
// =========================================================================



// Good Example_____________________________________________________________
// const blockList = document.querySelector('.block-list');
// 
// blockList.addEventListener('click', (event) => {
//     const target = event.target;
// 
//     console.log(
//         target.getAttribute('class') + 'is clicked'
//     );
// 
//     if (target.matches('li')) {
//         target.style.backgroundColor = 'rgba(255, 255, 255, 0.200)';
//     };
//     });
// }, true);
// =========================================================================



// Create item______________________________________________________________
// const body = document.querySelector('body');
// const blockList = document.querySelector('.block-list');
// 
// const newSport = document.createElement('li');
// 
// newSport.innerHTML = 'Rugby';
// newSport.setAttribute('class', 'list-item item-6');
// 
// blockList.appendChild(newSport);
// =========================================================================



// Create Container_________________________________________________________
// const newContainer = document.createElement('div');
// const newBlockList_1 = document.createElement('ul');
// 
// newContainer.setAttribute('class', 'container');
// newBlockList_1.setAttribute('class', 'block-list')
// 
// body.appendChild(newContainer);
// newContainer.appendChild(newBlockList_1);
// 
// for (i = 0; i < 6; i++) {
//     newBlockList_1.appendChild(document.createElement('li')).innerHTML = 'JS';
//     newBlockList_1.querySelectorAll('li')[i].setAttribute('class', `list-item item-${i + 1}`)
// };
// =========================================================================



// Good Example_2___________________________________________________________
var blockListArray = document.querySelectorAll('.block-list .list-item');

for (i = 0; i < blockListArray.length; i++) {
    blockListArray[i].index = i;

    blockListArray[i].addEventListener('click', (event) => {
        const target = event.target;

        new Promise(() => {
            const targetText = target.innerHTML;
            const targetBackgroundColor = target.style.backgroundColor;

            target.innerHTML = Number(target.index) + 1;
            target.style.backgroundColor = 'rgba(255, 255, 255, 0.200)';

            setTimeout(() => {
                target.innerHTML = targetText;
                target.style.backgroundColor = targetBackgroundColor;
            }, 500);
        });
    }, false);
};
// =========================================================================



