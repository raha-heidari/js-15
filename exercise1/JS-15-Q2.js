// ? Question-2:Select all spans  with the 'circle' class and write a code to change classes that have 'blue' with 'purple' and vice versa

// !Answer:

const spans = document.querySelectorAll(".circle")

spans.forEach((span, index )=> {
    if(index % 2 === 0){
       span.classList.remove("blue")
       span.classList.add("purple")
    } else{
        span.classList.remove("purple")
       span.classList.add("blue")
    }
})