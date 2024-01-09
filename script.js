function toggleNav() {
    var navLinks = document.getElementById("navlinks");
    navLinks.classList.toggle("active");
}



document.getElementById("form").addEventListener("submit",function(event){
    event.preventDefault();
    const names= document.getElementById("names").value ;
    const emails= document.getElementById("emails").value ;
    const dates= document.getElementById("dates").value ;
    const tim= document.getElementById("tim").value ;
    const personSelected= document.getElementById("personSelected").value;

    const client=[];
    const person={
        name:names,
        emails: emails,
        dates: dates,
        tim: tim,
        personSelected:personSelected,
    }
    client.push(person);
    console.log(client)
    alert("new data")

    const submittedclient= JSON.stringify(client);
    localStorage.setItem("client",submittedclient);
    const savedclient= localStorage.getItem("client");
    console.log(savedclient);
    
    document.getElementById("form").reset();
    
})