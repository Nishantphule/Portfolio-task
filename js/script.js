
// skills section
const skills = [
    {
        skill:"Javascript",
        img:"https://cdn-images-1.medium.com/max/2000/1*6ahbWjp_g9hqhaTDSJOL1Q.png"
    },
    {
        skill:"HTML5",
        img:"https://th.bing.com/th/id/OIP.bI8KDjd8-nDvzTX_Uok7FwHaHa?pid=ImgDet&rs=1"
    },
    {
        skill:"CSS3",
        img:"https://th.bing.com/th/id/OIP.xhnzhHcorvOTDzjLVg0LAwHaI4?pid=ImgDet&rs=1"
    },
    {
        skill:"Bootstrap",
        img:"https://th.bing.com/th/id/OIP.KJPH_yiM2ubGn9DLOmjCtAHaFj?pid=ImgDet&rs=1"
    },
    {
        skill:"React.JS",
        img:"https://nickroberts.ninja/wp-content/uploads/2017/07/react.jpg"
    },
    {
        skill:"Node.JS",
        img:"https://1.bp.blogspot.com/-mzw13XQJPYM/XgzNHXSUdXI/AAAAAAAAAYY/xeIhLBEpTQUn8huUCnWXdUX6vIR_T4UCQCPcBGAYYCw/s1600/http___pluspng.com_img-png_nodejs-png-nodejs-icon-png-50-px-1600.png"
    },
    {
        skill:"MongoDB",
        img:"https://th.bing.com/th/id/OIP.Ie_MJg_cy7B7gf4Uo7qP6wHaD4?w=290&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
        skill:"Python",
        img:"https://th.bing.com/th/id/OIP.EDJ9xoErBbZqK2tExVoJfAHaHY?w=234&h=220&c=7&r=0&o=5&pid=1.7"
    },
]


const skillSection = document.querySelector(".skills-section")

skills.forEach((skill) => {
    const skillCard = document.createElement("div")
    skillCard.className += "skill-card" 
    
    const skillName = document.createElement("h4")
    skillName.className += "skill-title"
    skillName.innerHTML = skill.skill
    
    const skillImg = document.createElement("img")
    skillImg.className += "skill-img"
    skillImg.src = skill.img
    
    skillCard.append(skillImg,skillName)
    skillSection.appendChild(skillCard)
})


// projects section

const projects = [
    {
        name:"Ice & Fire book api",
        lang:"Javascript,HTML,CSS & bootstrap",
        webLink:"https://ice-n-fire-api-hackathone.netlify.app/"
    },
    {
        name:"Weather Forecast App",
        lang:"Javascript,HTML,CSS & bootstrap",
        webLink:"https://weather-forecast-api-app.netlify.app/"
    },
    {
        name:"React-crud-user-App",
        lang:"React,Javascript,CSS,mockapi & Material UI",
        webLink:"https://react-app-user-crud.netlify.app/users"
    },
    {
        name:"ToDo-App",
        lang:"Javascript,HTML,CSS & bootstrap",
        webLink:"https://todo-list-myapp.netlify.app/"
    }
    
]

const projectsArea = document.getElementById("projects")

projects.forEach((project) => {

    projectsArea.innerHTML += `
    
    <div class="card col-lg-5">
    
    <div class="card-header">
    <h2>${project.name}</h2>
    </div>
    
    <div class="card-body">
    <p>${project.lang}</p>
    <button class="btn btn-lg btn-block btn-outline-info btn-link"><a href="${project.webLink}" target="_blank">See Work</a></button>
    </div>
    
  </div> `
})