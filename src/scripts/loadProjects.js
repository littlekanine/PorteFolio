async function loadProjects() {
  try {
    const response = await fetch("src/data/projectsData/projects.json");
    console.log(response);
    const projects = await response.json();
    const projectItemsContainer = document.getElementById("project-items");
    console.log(projectItemsContainer);

    projects.forEach((project) => {
      const projectItem = document.createElement("div");
      projectItem.className = "item";
      projectItem.tabIndex = 0;
      projectItem.style.backgroundImage = `url(${project.image})`;

      const projectTitle = document.createElement("h3");
      projectTitle.textContent = project.titre;
      projectItem.appendChild(projectTitle);

      const projectImg = document.createElement("img");
      projectImg.src = project.image;
      projectImg.alt = project.nom;
      projectItem.appendChild(projectImg);

      projectItemsContainer.appendChild(projectItem);
    });
  } catch (error) {
    console.error("non");
  }
}

window.onload = loadProjects;
