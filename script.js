async function saveData(){

const name = document.getElementById("name").value;
const place = document.getElementById("place").value;
const mobile = document.getElementById("mobile").value;


const { error } = await supabaseClient
.from("contacts")
.insert([
{
name:name,
place:place,
mobile:mobile
}
]);

if(error){
alert(error.message);
}
else{
alert("Saved Successfully");
}

}
