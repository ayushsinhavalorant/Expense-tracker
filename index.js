document.getElementById("form").addEventListener("submit",async(event)=>{
    event.preventDefault();
    let data={
        username:event.target.username.value,
        platform:event.target.Platform.value,
        amount:event.target.Amount.value
    }
    event.target.username.value=""
    event.target.Amount.value=""
    await axios.post("http://localhost:5000/adddata",data)
    const res =await axios.get("http://localhost:5000/getalldata")
    console.log(res.data)
    const alldelete = await axios.delete("http://localhost:5000/getalldata")
    const tablebody=document.getElementById("tabledata")
    tablebody.innerHTML=``
    let userdata=(res.data.data);
  for(let i =0;i<userdata.length;i++){
      tablebody.innerHTML+=`<tr><td>${userdata[i].username}</td><td>${userdata[i].platform}</td><td>${userdata[i].amount}</td></tr>`
  }
})
let hello =document.addEventListener("DOMContentLoaded",async ()=>{
    const res =await axios.get("http://localhost:5000/getalldata")
    const tablebody=document.getElementById("tabledata")
    let userdata=(res.data.data);
  for(let i =0;i<userdata.length;i++){
      tablebody.innerHTML+=`<tr><td>${userdata[i].username}</td><td>${userdata[i].platform}</td><td>${userdata[i].amount}</td></tr>`
  }
})