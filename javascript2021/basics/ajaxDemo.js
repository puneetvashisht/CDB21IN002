// AJAX - Async Javascript and XML(interoperable data exchange format)
// Async JavaScript and JSON


// // XML
// <person>
//     <name>Ravi</name>
//     <age>34</age>
// </person>

// // JSON
// { 
//     "name": "Ravi",
//     "age" : 34
// }

// if (window.XMLHttpRequest) {
//     // code for modern browsers
//     xmlhttp = new XMLHttpRequest();
//   } else {
//     // code for old IE browsers
//     xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//  }

//  xmlhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       // do ur stuff after response recived
//     }
//   };


//  xhttp.open("GET", "demo_url", true);
//  xhttp.setRequestHeader("Content-type", "application/json");
//  xhttp.send();


 fetch(url)
 .then(res=>console.log(res))
 .catch(err=> console.log(err))