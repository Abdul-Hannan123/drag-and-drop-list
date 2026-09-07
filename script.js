let lists=document.querySelectorAll(".list");
let rightBox=document.querySelector("#right");
let leftBox=document.querySelector("#left");

// we use for of loop to use the each list item
for(list of lists){
    // this evenlistener works when we start dragging
    list.addEventListener("dragstart",function(e){
        // store in selected variable the exact item being dragged
        let selected=e.target;
        // Allow dropping in rightBox
        rightBox.addEventListener("dragover",function(e){
        // By default, dropping is not allowed so we use preventdefaulut()
            e.preventDefault();
        })
        rightBox.addEventListener("drop",function(e){
        // in selected variable we have drag item so it is append with right box
            rightBox.appendChild(selected);
        // reset selected variable
            selected=null;
        });
        // drag item in left box so use this event listener
        leftBox.addEventListener("dragover",function(e){
            e.preventDefault();
        })
        leftBox.addEventListener("drop",function(e){
            leftBox.appendChild(selected);
            selected=null;
        });
    });
}