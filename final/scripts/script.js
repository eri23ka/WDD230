/* ----HAMBURGER ---*/
function openMenu() {
    document.querySelector(".headernav-link").classList.remove("hidden");
    document.querySelector("#open-btn").classList.add("hidden");
    document.querySelector("#close-btn").classList.remove("hidden");
  }
  
  function closeMenu() {
    document.querySelector(".headernav-link").classList.add("hidden");
    document.querySelector("#open-btn").classList.remove("hidden");
    document.querySelector("#close-btn").classList.add("hidden");
  }

/*--last visited--*/
document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("visits")){
      const visits = JSON.parse(localStorage.getItem("visits"));
      document.getElementById("update").innerHTML = JSON.parse(localStorage.getItem("visits"))[visits.length-1];
      const newVisits = visits.concat(new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(
        new Date()
      ));
      localStorage.setItem("visits", JSON.stringify(newVisits));
    }else{
      localStorage.setItem("visits", JSON.stringify([new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(
        new Date()
      )]));
      const visits = JSON.parse(localStorage.getItem("visits"));
      document.getElementById("update").innerHTML = JSON.parse(localStorage.getItem("visits")[visits.length-1]);
  
    }
    document.querySelector("#year").innerHTML = new Date().getFullYear();
    let today = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(
      new Date()
    );
  });

/*--- order ---*/
const listOrders = () => {
    const orders = JSON.parse(localStorage.getItem("myOrders"));
    const orderElement = document.getElementById("orders");
    if(!orders || orders.length === 0){
      const message = document.createElement('p');
      message.classList.add('text-center');
      message.textContent = 'No orders made click on the "Order" button or visit the fresh page';
  
  
      orderElement.append(message);
    }else{
      orders.forEach(order=>{
        const orderP = document.createElement('p');
        const orderImg = document.createElement('img');
        const orderFruits = document.createElement('span');
       
        orderImg.setAttribute('src', "./images/vegie smoothie.png");
        orderImg.setAttribute('alt', 'order bullet icon'); 
       
        orderFruits.innerHTML = [...order.fruits];
   
        orderP.append(orderImg);
        orderP.append(orderFruits);
    
        orderElement.append(orderP);
      });
    }
  }
  
  listOrders();