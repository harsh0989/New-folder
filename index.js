function getuser() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((data) => {
      console.log(data)
      return data.json();
    })
    .then((objectData) => {
      console.log(objectData[0].name);

      let tabledata = "";
      objectData.map((values) => {
        // console.log(values.id)

        //var i=1;
        //console.log(values[i].id)
        var Userid = values.id
        console.log(Userid)
        //i++;




        tabledata += ` <tr>
      <td id="ids">${values.id}</td>
      <td >${values.name}</td>
      <td ><a href="usertodo.html" onclick="getUserID(${Userid})">todo</a></td>
      <td ><a href=#>Album</a></td>
    </tr>`
        console.log(tabledata)
        // let idnum=document.getElementById("ids").accessKey()
        // console.log(idnum)

      })
      document.getElementById("tablebody").innerHTML = tabledata;
    })
}


function test() {
  console.log("clicked")

}
function getUserId(id) {
  console.log(id);
  localStorage.setItem("userid", id);

}

console.log(localStorage)

