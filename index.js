
//                   
// <<================** DOM Manipulation **================>> \\
//                                      



// 0. Node & Element
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// NODE____________________________________________________
// In a nutshell, a node is any DOM object.
//      A node is the generic name for any type of object in the DOM hierarchy.
//      A node could be one of the built-in DOM elements such as document or document.body,
//      it could be an HTML tag specified in the HTML
//      such as <input> or <p> or it could be a text node that is created by the system
//      to hold a block of text inside another element.

// ELEMENT_________________________________________________
// An element is one specific type of node => (ELEMENT_NODE > nodeType 1)
// There are many other types of nodes (
//                                      TEXT_NODE,          > nodeType 3 
//                                      COMMENT_NODE,       > nodeType 8
//                                      DOCUMENT_NODE,      > nodeType 9
//                                     )

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// 1. Get Element From HTML
// +  First Must Select The Element from Document To Be Able To Manipulate Him 
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> document.getElementById() 

// const title = document.getElementById('main-heading');



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> document.getElementsByClassName() 

// const listItem = document.getElementsByClassName('list-items');



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> document.getElementsByTagName() 

// const li = document.getElementsByTagName('li');
// const body = document.getElementsByTagName('body')[0];



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> document.querySelector() 

// const div = document.querySelector('div');
// const h1 = div.querySelector('h1');
// const main = document.querySelector('#main-heading');

// div.style.backgroundColor = 'orange';
// div.style.border = '5px solid black';
// h1.style.color = 'black';
// console.log(div);



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> document.querySelectorAll() 

// const containers = document.querySelectorAll('.container');
// console.log(containers[0]);



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// 2. Change CSS style
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Styling an Element 

// const listItems = document.querySelectorAll('.list-items');

// for(i = 0; i < listItems.length; i++){listItems[i].style.fontSize = '1rem';};



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Creating Elements And Adding, Modify Elements And Attributes

// Get Element
// const ul = document.querySelector('ul');
// const firstListItem = document.querySelector('.list-items');
// const title = document.querySelector('#main-heading');

// Create Element
// const li = document.createElement('li');

// Add
// ul.append(li);                                       // Adding In Tag Like A Last One Element

// Modify Text          
// firstListItem.innerText = 'Boys';                    // Showing text
// firstListItem.innerHTML = 'asd';                     // Showing text structure
// firstListItem.textContent = 'Crown';                 // Showing text structure with tags
// li.innerText = 'X-men';          

// Adding, Modifying Attributes             
// const idName = title.getAttribute('id');             // Gets attribute from tag
// li.setAttribute('id', 'main-heading');               // Add attribute and add name to him

// Adding, Modifying Classes            
// li.classList.add('list-items');                      // Add class to tag
// li.classList.contains('list-items');                 // Checks if exist class => In example (false)

// Remove Elements          
// li.removeAttribute('id');                            // Remove attribute
// li.classList.remove('list-items');                   // Remove class from tag
// li.remove();                                         // Remove tag



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// 3. Traversing the DOM
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Parent Node Traversal

// Difference between parentNode and parentElement
// document.documentElement.parentNode;                 // the document node
// document.documentElement.parentElement;              // null
                                                        // Since the <html> element (document.documentElement) doesn't have a parent that is an element,
                                                        // parentElement is null

// get element      
// let ul = document.querySelector('ul');       

// Get parent element       
console.log(        
    // ul.parentNode                                    // Returns the parent anyNode => (div)
);      
console.log(        
    // ul.parentElement                                 // Returns the parent elementOnly => (div)
);

// Get rootElement
// const html = document.documentElement  
                                                        // returns the Element that is the root element of the document 
                                                        // (for example, the <html> element for HTML documents).



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Child Node Traversal

// Get childList
console.log(
    // ul.children                                      // Returns only elements "HTMLCollection" 
);                                                      // In example (li.list-items, li.list-items...)

console.log(                
    // ul.childNodes                                    // Returns NodeList with the all nodes
);                                                      // In Example (text, li.list-items, text, li.list-items...)
                                                        // (text) in example is space between (li) tags in (ul) tag

// Get any nodeChild (First/Last) 
console.log(
    // ul.firstChild                                    // In example (text_node > #text)
);
console.log(
    // ul.lastChild                                     // In example (text_node > #text)
);

// Get elementChildOnly (First/Last)
console.log(
    // ul.firstElementChild                             // In example (<li class="list-items">Crown</li>)
);      
console.log(        
    // ul.lastElementChild                              // In example (<li class="list-items">Marvel</li>)
);



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Sibling node Traversal

// Get Element
// const div = document.querySelector('div');

console.log(
    // div.childNodes
);

// Get (Next/Previous) Any-Node
console.log(
    // ul.previousSibling                               // return previous node in parent tag (div)
);                                                      // in example (#text)
console.log(        
    // ul.nextSibling                                   // return next node in parent tag (div)
);                                                      // in example (#text)

// Get (Next/Previous) Element_Node
console.log(
    // ul.previousElementSibling                        // return previous element
);                                                      // in example (<h1 id="main-heading">Favorite Movie Franchise</h1>)
console.log(                        
    // ul.nextElementSibling                            // return next element
);                                                      // in example return (null) 
                                                        // because there is nothing after the selected element in the parent tag (div)



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// 4. Event Listeners
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> element.addEventListener("click", function(){}); 

// Get elements
// const btn_1 = document.querySelector('.btn_1');
// const btn_2 = document.querySelector('.btn_2');
// const btn_3 = document.querySelector('.btn_3');

// Make function
function alertBtn() {
    // alert('love Money');
};

// Adding event to element
// btn_1.addEventListener("click", alertBtn);



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> element.addEventListener("mouseover", function(){}); 

// Get elements
// const box_1 = document.querySelector('.box_1');
// const box_2 = document.querySelector('.box_2');
// const box_3 = document.querySelector('.box_3');

// Make function
function changeBackgroundColor(){
    // box_3.style.backgroundColor = 'blue';
};

// Adding Event to element
// box_3.addEventListener("mouseover", changeBackgroundColor);



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// 5. Example Event Listeners
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Reveal Event 

// get element
// const revealBtn = document.querySelector('.reveal-btn');
// const hiddenContent = document.querySelector('.hidden-content')

// create function
function revealContent(){
    // if(hiddenContent.classList.contains('reveal-btn')){          // have element class (reveal-btn)?
        // hiddenContent.classList.remove('reveal-btn');            // if true, remove him
    // }else{       
        // hiddenContent.classList.add('reveal-btn');               // if false, add him
    };

// Add event to element
// revealBtn.addEventListener('click', revealContent)



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// 6. Event Propagation
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Phases 

// 1. Event Capturing
// 2. Target
// 3. Event Bubbling

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Example

// + An element can capture child events 
// + A good reason to use addEventListener()

// get element
const ul = document.querySelector('ul');
const h1 = document.querySelector('h1');
const body = document.querySelector('body');
const img = document.querySelector('img');
const liList = document.querySelectorAll('li');

const container01 = document.querySelector('.container01');
const container = document.querySelector('.container');
const p_remove = document.querySelector('.p_remove');

const winCount = document.querySelector('.win-count');
const looseCount = document.querySelector('.loose-count');
const allCount = document.querySelector('.all-count');


// =============================================================

let winCount_number = Number(winCount.innerHTML);
let looseCount_number = Number(looseCount.innerHTML);
let allCount_number = Number(allCount.innerHTML);
// ============================================================


// add tools
let pugArray = [];
let cyfra = Math.floor(Math.random() * 9) + 1;
pugArray.push(cyfra);
cyfra = Math.floor(Math.random() * 9) + 1;
pugArray.push(cyfra);
console.log(pugArray);

let win_time = 0;


// targetBackground = 

// console.log(color);



// add event
ul.addEventListener("click", (event) => {
    // Check and save number in clicked element

    allCount_number = allCount_number + 1;
    allCount.innerHTML = allCount_number;

    let number = 0;
    let color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
    event.target.style.background = color;

    


    for (const entry of liList.entries()) {
        if(entry[1].classList[0] == event.target.classList[0]){
            number = entry[0] + 1;
        };
    };

    // 





    if(event.target.classList.contains('active')){
        if(pugArray.includes(number)){
            // 

            
            winCount_number = winCount_number + 1;
            winCount.innerHTML = winCount_number;

            win_time = winCount_number;
            if(win_time == 10){
                // alert('win');
                // window.location.reload();
                // container01.remove();
                container.remove();
                p_remove.style.textAlign = 'center';
                p_remove.innerHTML = 'You Win!!!';

            }

            color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
            h1.style.background = color;




            img.style.display = 'block';
            h1.innerHTML = 'Found him!';
            event.target.style.fontSize = '2rem';
            event.target.style.color = 'white';
            event.target.innerHTML = 'PUG';
            // 



            event.target.classList.remove('active'); 
            // 


            fastNumber = pugArray[0]
            pugArray = [];
            cyfra = Math.floor(Math.random() * 9) + 1;
            // 


            if(fastNumber !== cyfra){
                pugArray.push(cyfra)
                cyfra = Math.floor(Math.random() * 9) + 1;
                pugArray.push(cyfra)
                console.log(pugArray);
            }else{
                cyfra++;
                pugArray.push(cyfra)
                cyfra = Math.floor(Math.random() * 9) + 1;
                pugArray.push(cyfra)
                console.log(pugArray);
            }



            new Promise(() => {
                setTimeout(()=>{
                    event.target.style.color = 'black';
                    event.target.innerHTML = number;
                    h1.innerHTML = 'Find Pug';
                    img.style.display = 'none';
                }, 1000)
            }).then(console.log('win'))



        }else{
            event.target.innerHTML = 'nope';
            event.target.style.fontSize  = '2rem';

            looseCount_number = looseCount_number + 1;
            looseCount.innerHTML = looseCount_number

            new Promise(() => {
                setTimeout(()=>{
                    event.target.innerHTML = number;
                }, 1000)
            }).then(console.log('loose'))  
        };




    }else{
        event.target.classList.add('active');
        event.target.innerHTML = 'nope';  
        event.target.style.fontSize  = '2rem';



        new Promise(() => {
            setTimeout(()=>{
                event.target.innerHTML = number;
            }, 1000)
        }).then(console.log('win'))
         
    };
}, false);



// if(win_time == 10){
    // alert("you win!")
// }