
   
var userDetail = [
  {
    name: "99.9%", heading: "Build a site for your developer-first technology product."
  },
  {
    name: "'18", heading: "We’re young but have already reached some huge milestones."
  },
  {
    name: "2.4m", heading: "Average monthly signups since we launched in June 2018."
  },
  {
    name: "0.03", heading: "Another random metric to give you a little more company context."
  },

];

document.getElementById("table").innerHTML = userDetail
  .map(
    (user) =>
      `<div class="table-contact"> 
        <h2 class="table-quantity">${user.name}</h2>
        <p class="table-heading s-16-color">${user.heading}</p>
      </div>`
  )
  .join("");

var slideIndex = 0;
var listProduct = [
  { name: "Upload Up to 10 Tracks"  },
  { name: "Upload Trackout Stems"  },
  { name: "Upload Sound Kits"  },
  { name: "Keep 70% of Revenue from every sale"  },
  { name: "Accept Credit Card Payments"  },
  { name: "Fast payouts funds"  },
  { name: "Free Demo Downloads"  },
  { name: "Custom Voice Tag"  },
  { name: "Offer Bulk Discounts"  },
  { name: "Upload Up to 75 Tracks"  },
  { name: "Upload Trackout Stems"  },
  { name: "Upload Sound Kits"  },
  { name: "Keep 100% of Revenue from every sale"  },
  { name: "Accept Credit Card Payments"  },
  { name: "Fast payouts funds"  },
  { name: "Free Demo Downloads"  },
  { name: "Custom Voice Tag"  },
  { name: "Offer Bulk Discounts"  },
  { name: "Automatically split  payments with your collaborators."  },
  { name: "Engaging & personalised content"  },
  { name: "Automatically split  payments with your collaborators."  },
  { name: "Engaging & personalised content"  },
];

  showTable(listProduct.splice(0,listProduct.length / 2 - 2),"navigation-list-1")
  showTable(listProduct.splice(0,listProduct.length - 4),"navigation-list-2")
  showTable(listProduct.splice(0,listProduct.length - 2),"gender-list")
  showTable(listProduct.splice(0,listProduct.length),"gender-list2")

function showTable(arr,id)  {
  
    document.getElementById(id).innerHTML = arr.map(
        (user) =>
          `<div class="productItem">
            <img  src ="/img/icon/tickedIcon.svg" />
            <p class= "productIrem-heading">${user.name}</p>
          </div>`
      ).join("");
}


var Detail = [
  {
    icon: "./img/icon/star.svg", name:"Exclusive content",  heading: "Be certain that you will find only high-quality, original content due to our careful selection process of invites being sent out only to worthy producers."
  },
  {
    icon: "./img/icon/benefit4.svg", name:"No Fees",  heading: "With respect to musical compositions, we do not hide any information related to extra charges involved in the whole process. We’re compromise to "
  },
  {
    icon: "./img/icon/benefit2.svg", name:"Diverse Selection",  heading: "Be certain that you will find only high-quality, original content due to our careful selection process of invites being sent out only to worthy producers."
  },
  {
    icon: "./img/icon/benefit5.svg", name:"Contracts Customzation",  heading: "Be certain that you will find only high-quality, original content due to our careful selection process of invites being sent out only to worthy producers."
  },
  {
    icon: "./img/icon/benefit3.svg", name:"Community",  heading: "Be certain that you will find only high-quality, original content due to our careful selection process of invites being sent out only to worthy producers."
  },
  {
    icon: "./img/icon/benefit6.svg", name:"Promotional Advertisement",  heading: "Be certain that you will find only high-quality, original content due to our careful selection process of invites being sent out only to worthy producers."
  },
  

];

document.getElementById("benefit-list").innerHTML = Detail
  .map(
    (user) =>
      `<div class="benefit-tag"> 
        <div class = "benefit-bg">
          <img src="${user.icon}" alt="" class="benefit-icon">
        </div>
        <div class="benefit-content">
          <h2 class="benefit-contact">${user.name}</h2>
          <p class="bebefit-heading s-14-color">${user.heading}</p>
        </div>
      </div>`
  )
  .join("");

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
//   setTimeout(showSlides, 2000);
// }



// document.getElementById("listItem").innerHTML = listProduct
//   .map(
//     (user) =>
//       `<div class="productItem">
//       <h1>${user.name}</h1>
//       <h4>${user.price}</h4>
    
//     </div>`
//   )
//   .join("");


var slideIndex = 0;
var listMember = [
  { name: "How long is therecruiment process?"  },
  { name: "How long is therecruiment process?"  },
  { name: "How long is therecruiment process?"  },
  { name: "How long is therecruiment process?"  },
];
  
    document.getElementById("supper-list").innerHTML = listMember.map(
        (user) =>
          `
          <div class="supper-nav"> 
              <p class="supper-nav-contact">${user.name}</p>
              <div class="supper-img">
                <img src="./img/icon/Vector (1).svg" alt="" class="supper-icon">
              </div>
          </div>
          `
      ).join("");

      
var slideIndex = 0;
var listStay = [
  { name: "Free 7-day trial"  },
  { name: "No credit card required"  },
  { name: "Cancel anytime"  },
];
  
    document.getElementById("stay-list").innerHTML = listStay.map(
        (user) =>
          `
            <div class="stay-list-icon">
              <img class="stay-list-img" src="/img/icon/stay-icon.svg" alt="">
            </div>
              <p class="stay-list-heading">${user.name}</p>
          `
      ).join("");



      document.getElementById("supper-list").innerHTML = listMember.map(
        (user) =>
          `
          <div class="supper-nav"> 
              <p class="supper-nav-contact">${user.name}</p>
              <div class="supper-img">
                <img src="./img/icon/Vector (1).svg" alt="" class="supper-icon">
              </div>
          </div>
          `
      ).join("");

      

