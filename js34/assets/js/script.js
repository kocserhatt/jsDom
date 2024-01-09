const projectList = document.querySelector('#projects');
const addBtn = document.querySelector('#addBtn');
let projects;


if(localStorage.projects){
    projects = JSON.parse(localStorage.projects)
}else{
    projects = [];
}

console.log(projects);



function getProjects(){
    projectList.innerHTML = '';
    for (let i = 0; i <projects.length; i++) {
        projectList.innerHTML += `
        <li id="${i}">
            ${projects[i].name} 
            <button class="editBtn">Düzenle</button> 
            <button class="deleteBtn">Sil</button>
        </li>`
    }
    bindDeleteBtns();
    bindEditBtns();
}



function addProject(){
    const answer = prompt('Eklemek istediğiniz proje nedir?');
    projects.push({name: answer, languages: []})
    localStorage.projects = JSON.stringify(projects)
    bindDeleteBtns();
    bindEditBtns();
    getProjects();
}

addBtn.addEventListener('click', addProject)


function bindDeleteBtns(){
    const deleteBtns = document.querySelectorAll('.deleteBtn');
    for (const deleteBtn of deleteBtns) {
        deleteBtn.addEventListener('click', function(){
            this.parentElement.remove();
            projects.splice(Number(this.parentElement.id), 1)
            console.log(projects);
            localStorage.projects = JSON.stringify(projects)
            getProjects();
        })
    }
}

function bindEditBtns(){
    const editBtns = document.querySelectorAll('.editBtn');
    for (const editBtn of editBtns) {
        editBtn.addEventListener('click', function(){
            const answer = prompt('Neyle değiştireceksin?');
            this.previousSibling.textContent = answer
        })
    }
}


getProjects();


