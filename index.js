// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})


function togglePDF(pdfFilePath, pdfContainer, pdfEmbed) {
  var pdfContainer = document.getElementById(pdfContainer);
  var pdfEmbed = document.getElementById(pdfEmbed);

  if (pdfContainer.classList.contains("project-details__documents-hidden")) {
      // Show PDF container
      pdfContainer.classList.remove("project-details__documents-hidden");
      pdfContainer.classList.add("project-details__documents-fullWidth");
      pdfContainer.style.height = '600px'; // Set height to accommodate PDF
      pdfContainer.classList.add("project-details__documents-fullWidth");
      pdfEmbed.setAttribute("src", pdfFilePath);

  } else {
      // Hide PDF container
      pdfContainer.classList.remove("project-details__documents-fullWidth");
      pdfContainer.classList.add("project-details__documents-hidden");
      pdfContainer.style.height = "0"; // Set height to 0 to hide PDF
      pdfEmbed.setAttribute("src", ""); // Clear the PDF source
  }
}

