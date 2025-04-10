
// główne zakładki
function openTab(tabName) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
    // Ustawienie domyślnych podzakładek przy przejściu do odpowiedniej zakładki
    if (tabName === "projects") {
      openSubTab('autoenkoder');
    }
    if (tabName === "ongoing") {
      openOngoingSubTab('ongoing1');
    }
  }
  
  // Funkcja do przełączania podzakładek w zakładce "projekty"
  function openSubTab(subTabName) {
    var i, subtab;
    subtab = document.querySelectorAll("#projects .subtabcontent");
    for (i = 0; i < subtab.length; i++) {
      subtab[i].style.display = "none";
    }
    document.getElementById(subTabName).style.display = "block";
  }
  
  // Funkcja do przełączania podzakładek w zakładce "projekty_w_trakcie"
  function openOngoingSubTab(subTabName) {
    var i, subtab;
    subtab = document.querySelectorAll("#ongoing .subtabcontent");
    for (i = 0; i < subtab.length; i++) {
      subtab[i].style.display = "none";
    }
    document.getElementById(subTabName).style.display = "block";
  }
  
  // Ustawienie domyślnej widoczności pierwszej zakładki
  document.addEventListener("DOMContentLoaded", function() {
    openTab('home');
  });
  