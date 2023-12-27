var Sitename = document.getElementById('SiteName');
var SiteuRL = document.getElementById('SiteURL');
var list = [];
if(localStorage.getItem('tool') !== null) {
    list = JSON.parse(localStorage.getItem('tool'))
    displayelement()
}

function addelement() {
    if(validationname() && validationurl() == true) {
     product = {
        name : document.getElementById('SiteName').value,
        URL : document.getElementById('SiteURL').value,
    }
    list.push(product);
    localStorage.setItem('tool', JSON.stringify(list))
   displayelement()
   clearelement()
}else {
   Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
 
});
}
}

function displayelement() {
    var cartonna = '';
    for(var i = 0; i < list.length; i++) {
        cartonna += `     <tr>
                        <td>${i+1}</td>
                        <td>${list[i].name}</td>
                        <td><a class="btn btn-success" href='${list[i].URL}'><i class="fa-solid fa-eye"></i> Visit</a></td>
                        <td><button onclick=' deleteproduct(${i})' class='btn  '>Delete</button></td>
                    </tr>`
    }
  document.getElementById('demo').innerHTML= cartonna;

    
}



function deleteproduct(index) {
     product = {
        name : document.getElementById('SiteName').value,
        URL : document.getElementById('SiteURL').value,
    }
    list.splice( index , 1)
    localStorage.setItem('tool', JSON.stringify(list))
      displayelement()
}

function clearelement() {
 Sitename.value= '';   
 SiteuRL.value= '';   
}

function validationname() {
    var text = Sitename.value;
    var regexname = /^[A-Z][a-z]{2,8}$/

    if(regexname.test(text)) {
        Sitename.classList.add('is-valid')
        Sitename.classList.remove('is-invalid')
        return true
    }
    else {
          Sitename.classList.add('is-invalid')
          Sitename.classList.remove('is-valid')
          return false
    }
}

function validationurl() {
 var email = SiteuRL.value;
 var regexurl = /^http(s)?:\/\/www\.[a-z]{3,10}\.com$/
 if (regexurl.test(email)) {
     SiteuRL.classList.add('is-valid')
     SiteuRL.classList.remove('is-invalid')
        return true
 }
 SiteuRL.classList.add('is-invalid')
 SiteuRL.classList.remove('is-valid')
 return false
}