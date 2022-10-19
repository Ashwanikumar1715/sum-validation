// generating two random no...
let firstnum=parseInt(Math.random()*10);
let secondnum=parseInt(Math.random()*10);

// get the total of no...
let total=firstnum+secondnum;


//we need to diplay the no. in our container .. so
let primary=document.getElementById("primary-num");
primary.innerHTML=`<p>${firstnum}</p>`
let secondary=document.getElementById("secondary-num");
secondary.innerHTML=`<p>${secondnum}</p>`


//it is working now..

//get the guess from user


let button=document.getElementById("btn")
button.addEventListener('click',function(){
    let guess=document.getElementById("guess").value;
    guess= Number(guess);
    //validating the result now...


    if(guess==total){
        alert("correct ans go for some more!!!");
        window.location.reload();
    }
    else{
        alert("incorrect ans! the correct ans is:"+total);
        window.location.reload();
    
    }
});


// add more attractive css and explore...
