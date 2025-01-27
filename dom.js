// console.log(window);
// console.log(document);

// let element = document.getElementById("demo");
// element.innerText = "G+"
// console.log(element);

// let ele = document.getElementById("test");
// // ele.innerText= "<h1>Header</h1>"
// ele.innerHTML = "<h1>Header</h1>"
// console.log(ele);

//! 
// let ele = document.getElementsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele));
// ele[0].innerText="Hello"
// // ele[0].style.backgroundColor="tomato"

// //!spread operator :- it will takeout each and every value from the original array 
// //! and store it inisde one more new array(pure array).
// //? syntax :- [...variable];
// let x = [...ele];
// // console.log(x , Array.isArray(x));
// x.map(element=>{
//     // console.log(element);
//     element.style.backgroundColor="orange"
// })

//! 

// let ele = document.getElementsByTagName("div");
// console.log(ele);

//! 

// let ele = document.getElementsByName("formData");
// // console.log(ele , Array.isArray(ele));
// [...ele].map(inp=>{
//     console.log(inp.value);
// })

//! 
// let ele = document.querySelector("#mru");
// console.log(ele);

// let ele = document.querySelector(".test");
// console.log(ele);

// let ele = document.querySelectorAll(".test");
// console.log(ele);



// let btn = document.querySelector("#btn");
//! addEventListner("event" ,()=>{})
    // btn.addEventListener("click",()=>{
    //     // console.log("button clicked");
    //     // alert("hi")
    //     document.body.style.backgroundColor="tomato"
    // })

    // let btn = document.querySelector("#btn");
    // btn.addEventListener("dblclick",()=>{
    //     console.log("double clicked");
    // })


    // let divBlock = document.getElementById("divBlock");
    // divBlock.addEventListener("mouseover",()=>{
    //     document.body.style.backgroundColor="yellow"
    //     divBlock.style.backgroundColor="blue"
    // })

    // divBlock.addEventListener("mouseleave",()=>{
    //     document.body.style.backgroundColor="orange"
    //     divBlock.style.backgroundColor="aqua"
    // })


    // let inp =document.getElementById("inp");
    // inp.addEventListener("keydown",()=>{
    //     console.log("keydown");
    // })

    // inp.addEventListener("keyup",()=>{
    //     console.log("keyup");
    // })


     // let bgColor = document.querySelectorAll(".bgColor");
    // // console.log(bgColor);
    // [...bgColor].map((element)=>{
    //     // console.log(element);
    //     element.addEventListener("mouseover",()=>{
    //         // console.log(element.innerText);
    //         element.style.backgroundColor=element.innerText;
    //     });
    //     element.addEventListener("mouseleave",()=>{
    //         // console.log(element.innerText);
    //         element.style.backgroundColor="transparent";
    //     });
    // })



    // let ele = document.createElement("h1");
    // ele.innerText = "DYN";
    // ele.setAttribute("id","demo");
    // ele.id ="demo";
     
    // // ele.removedAttribute("id")
    // // console.log(ele);


    // let image = document.createElement("img");
    // image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJOghGA66yFMDiApnvJOeGLRUSxZgdWYVIEQ&s";
    // console.log(image);

    // document.body.appendChild(ele);
    // document.body.appendChild(image);

    // let form = document.querySelector("form");
    // let username = document.getElementById("uName");
    // let mail = document.getElementById("uMail");
    // let psw = document.getElementById("uPass");

    // form.addEventListener("submit",(event)=>{
    //     event.preventDefault();
    //     // console.log(event);
    //     // console.log("form submitted");

    //     let uname = username.value;
    //     let uemail = mail.value;
    //     let upass = psw.value;
    //     let userDetails={
    //         uname,uemail,upass
    //     }
    //     console.log(userDetails);
    //     localStorage.setItem("userData",JSON.stringify(userDetails))
    //     })
// localStorage.clear();

let mainEle = document.createElement("div");
mainEle.setAttribute("id","mainBlock");
mainEle.style.border="2px solid red";
mainEle.style.width="550px";
mainEle.style.height="550px";
console.log(mainEle);

let topEle = document.createElement("div");
topEle.setAttribute("class","topBlock");
//console.log(topEle);

let image = document.createElement("img");
image.src="https://i.pinimg.com/originals/f0/eb/7e/f0eb7e99d19b68addc83a668de90489a.jpg";
image.style.width="350px";

let bottomEle = document.createElement("div");
bottomEle.setAttribute("class","bottomBlock");
//console.log(bottomEle);

let h1 = document.createElement("h1");
h1.innerText ="CAT";
h1.style.textAlign="center"


let btn = document.createElement("button");
btn.innerText="view more";
btn.style.border="none";
btn.style.paddings="20px";
btn.style.background="dodgerblue";
btn.style.color="white";

bottomEle.appendChild(h1);
bottomEle.appendChild(btn);

topEle.appendChild(image);
mainEle.appendChild(topEle);
mainEle.appendChild(bottomEle);
document.body.appendChild(mainEle);
