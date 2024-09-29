/*function getData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((Response)=>Response.json())
    .then((result)=>console.log(result))
}
getData()*/
let root=document.getElementById('root')
async function getData(){
    try{
        let Response=await fetch('https://jsonplaceholder.typicode.com/users')
        let result=await Response.json();
        
        console.log(result)
        result.map((v)=>{
            let cardDiv=document.createElement('div')
            root.append(cardDiv)
            cardDiv.setAttribute('class','userCard')
            let name=document.createElement('h1')
            cardDiv.append(name)
            name.innerHTML=v.name
            let email=document.createElement('h3')
            cardDiv.append(email)
            email.innerHTML=v.email
            let address=document.createElement('p')
            cardDiv.append(address)
            address.innerHTML=v.address.city+" "+v.address.street
        })
   } catch (error){

   }
} 
getData()