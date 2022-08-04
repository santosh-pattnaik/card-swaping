const panels = document.querySelectorAll('.panel');
// console.log(panels[0]); //querySelectorAll return value as array 

panels.forEach((panel)=>{
    // console.log(panel);  //we can show each panel for html 
    //when we click on panel it should expand for that we ahve add active class when we click any panel
    panel.addEventListener('click',()=>{   
        removeActiveClasses();          //when we click on one panel existing panel with active clas should remove
        panel.classList.add('active');     //for create active class when we click
    })
})

function removeActiveClasses(){     //function for remove active classes
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    })
}