var slideIndex = 0;
var listFooter = [
  { name: "PRODUCT"  },
  { name: "Start a Trial"  },
  { name: "How It Works"  },
  { name: "Features"  },
  { name: "Pricing"  },
  { name: "Watch Demo"  },
  { name: "RESOURCES"  },
  { name: "All Resources"  },
  { name: "Blog"  },
  { name: "FAQs"  },
  { name: "Help Center"  },
  { name: "COMPANY"  },
  { name: "About Us"  },
  { name: "Why Phantom"  },
  { name: "Contact Us"  },
  { name: "Careers"  },
  { name: "Partners"  },

];
  


  showTable(listFooter.splice(0,listFooter.length / 2 - 2),"footer-right-1")
  showTable(listFooter.splice(0,listFooter.length / 2 ),"footer-right-2")
  showTable(listFooter.splice(0,listFooter.length ),"footer-right-3")

function showTable(arr,id)  {
  
    document.getElementById(id).innerHTML = arr.map(
        (user) =>
          `<p class="footer-right-heading s-16">${user.name}</p>`
      ).join("");
}