let triggers = document.querySelectorAll('a');
let highlight = document.createElement('span');

highlight.classList.add('highlight');
document.body.append(highlight);

//highlight.width = '653.09375px';
//highlight.height = '97px'; 
highlight.style.transform = `translate(653.09375px, 97px)`;
highlight.style.width = `52.6875px`;
highlight.style.height = `28px`;


function highlightLinks(){
    let linkPosition = this.getBoundingClientRect();
    console.log(linkPosition);
    let position = {
        width: linkPosition.width,
        height: linkPosition.height,
        top: linkPosition.top + window.scrollY,
        left: linkPosition.left + window.scrollX
    };
    
    
    highlight.style.width = `${position.width}px`
    highlight.style.height = `${position.height}px`
//    highlightPosition = `translate(${linkPosition.left}px, ${position.top}px)`;
    highlight.style.transform = `translate(${linkPosition.left}px, ${position.top}px)`
};

triggers.forEach(a => a.addEventListener('mouseenter', highlightLinks));   