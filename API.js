let data = [
    {
        name: "Saad",
        status: "Designer",
        course: "Software Engineering",
        img: "https://unsplash.com/photos/background-pattern-OpB9Wf4Cakk"
    },
    {
        name: "Saad",
        status: "Designer",
        course: "Software Engineering",
    },
    {
        name: "Saad",
        status: "Designer",
        course: "Software Engineering",
    }
    
]



let show = ""
data.forEach(element => {
    show += `
    
    <div class="card m-3" style="width: 18rem;">
    <img src="./img1.avif" class="card-img-top" alt="...">
    <div class="card-body">
        <h3 class="card-title"><b><u>${element.name}</u></b></h3>
        <h5 class="card-title"><b><i>${element.status}</i></b></h5>
        <h5 class="card-title"><b><i>${element.course}</i></b></h5>
    

    </div>
    </div>

`

document.getElementById("show-all-data").innerHTML = show



});


{/* <img src= ${element.img} class="card-img-top" alt="img" style="cursor: pointer;"> */}