const moduleThumbEle = document.getElementById('module-thumb');
const milestoneAccordionEle = document.getElementById('milestone-accordion');
const milestoneTitleEle = document.getElementById('milestone-Title');
const inputEle = document.getElementById('input');
const moduleTitleEle = document.getElementById('module-title');





// load data bny fetching

const loadModulesData = () => {
    const url = "http://openapi.programming-hero.com/api/course/curriculum"
    fetch(url).then(response => response.json()).then(modulesData => displayModulesData(modulesData.data))
}

const displayModulesData = (modulesData) => {
    // console.log(modulesData[0]);
    // console.log(modulesData[0].name);
    let c = 1;
    modulesData.forEach(milestones => {
        // console.log(milestones.modules);
        const milestonesDiv = document.createElement("div");
        // milestones.classList.add("accordion-item")
        milestonesDiv.innerHTML =
            `
            <button class="accordions" onclick="loadPicture('${milestones.image}','${milestones.name}')">${milestones.name}</button>
            <div id="panel">
                ${milestones.modules.map(module => {
                return ` 
             <div id="module-div">
             <p class="my-2">${module.name} </p>
             <hr>
             </div>`


            }).join(" ")}
            </div>

        `
        console.log(c);
        c++;
        milestoneAccordionEle.appendChild(milestonesDiv)



        // const moduless = document.getElementById("panel");


    });


    // accordion function
    var acc = document.getElementsByClassName("accordions");
    var i;

    for (i = 0; i < c; i++) {
        acc[i].addEventListener("click", function () {

            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }


    return 
}





loadModulesData();

const loadPicture = (image,name) => {
    moduleThumbEle.src=image;
    moduleTitleEle.innerText=name;
}