// this is the way to display the data usesing json

// fetch('data.json')
// .then(response => response.json())
// .then(extension => {
//     const container = document.getElementsByClassName("extensions-list")[0];
//     extension.forEach(ext => {
//         const card = document.createElement("div");
//         card.className = "extension-card";
//         card.innerHTML = `
//         <img src="${ext.logo}" alt="${ext.name}" />
//         <h3>${ext.name}</h3>
//         <p>Status: ${ext.isActive ? 'Active' : 'Inactive'} </p>
//         `;
//         container.appendChild(card);
//     })
// })
// .catch(error => console.error('Error loading JSON', error));

function myFunction() {
  const display = document.querySelector(".title-bar-style");
  const src = display.src;

  if (src.includes("icon-sun.svg")) {
    display.src = "assets/images/icon-moon.svg";
    document.body.classList.add("light-mode");
  } else if (src.includes("icon-moon.svg")) {
    display.src = "assets/images/icon-sun.svg";
    document.body.classList.remove("light-mode");
  }
}

// All, active and inactive apps

document.querySelectorAll('.header-single-sub-title').forEach((tab) => {
  tab.addEventListener('click', () => {
    const filter = tab.textContent.trim().toLowerCase(); // 'all', 'active', 'inactive'
    const cards = document.querySelectorAll('.app-card');

    cards.forEach((card) => {
      const checkbox = card.querySelector('input[type="checkbox"]');
      const isActive = checkbox.checked;

      if (filter === 'all') {
        card.style.display = 'flex';
      } else if (filter === 'active') {
        card.style.display = isActive ? 'flex' : 'none';
      } else if (filter === 'inactive') {
        card.style.display = !isActive ? 'flex' : 'none';
      }
    });
  });
});


