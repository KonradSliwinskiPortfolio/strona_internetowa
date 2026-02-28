// główne zakładki
function openTab(tabName) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";

    if (tabName === "projects") {
      openSubTab('autoenkoder');
    }
    if (tabName === "ongoing") {
      openOngoingSubTab('ongoing1');
    }
}

function openSubTab(subTabName) {
    var i, subtab;
    subtab = document.querySelectorAll("#projects .subtabcontent");
    for (i = 0; i < subtab.length; i++) {
      subtab[i].style.display = "none";
    }
    document.getElementById(subTabName).style.display = "block";
}

function openOngoingSubTab(subTabName) {
    var i, subtab;
    subtab = document.querySelectorAll("#ongoing .subtabcontent");
    for (i = 0; i < subtab.length; i++) {
      subtab[i].style.display = "none";
    }
    document.getElementById(subTabName).style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
    openTab('home');
});

function switchLanguage(lang) {
  const pl = document.getElementById('cv-pl');
  const eng = document.getElementById('cv-eng');

  if(lang === 'PL') {
    pl.style.display = 'block';
    eng.style.display = 'none';
  } else if(lang === 'ENG') {
    pl.style.display = 'none';
    eng.style.display = 'block';
  }
}