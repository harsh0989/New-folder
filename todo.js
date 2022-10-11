function getuser() {
    console.log("hello")
    var useid = localStorage.getItem("userid");
    console.log(useid);
    let dis="";
    dis=`<h1>Welcome user ${useid}</h1>`;
    document.getElementById("welcom").innerHTML=dis;
    fetch(`https://jsonplaceholder.typicode.com/users/${useid}/todos`)
    .then((data1)=>{
        console.log(data1)
        return data1.json();
      })
    .then((objectdata1)=>{
        console.log(objectdata1[0].title);
        let todo="";
        objectdata1.map((values1)=>{
            todo+=`<tr>
            <th scope="row">${values1.id}</th>
            <td>${values1.title}</td>
            <td>${values1.completed}</td>
            <td>@mdo</td>
          </tr>`
        })
        document.getElementById("tododata").innerHTML=todo
    })
}