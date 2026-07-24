async function loadData(){

const {data,error}= await supabaseClient
.from("contacts")
.select("*")
.order("id",{ascending:false});


let table="";

data.forEach(item=>{

table += `
<tr>
<td>${item.name}</td>
<td>${item.place}</td>
<td>${item.mobile}</td>
</tr>
`;

});

document.getElementById("data").innerHTML=table;

}

loadData();

// Refresh every 3 seconds
setInterval(loadData, 3000);
