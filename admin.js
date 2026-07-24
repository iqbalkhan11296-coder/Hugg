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

async function refreshData() {
  await loadData();
}

refreshData();
setInterval(refreshData, 3000);
