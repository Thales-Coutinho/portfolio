document.addEventListener('DOMContentLoaded', function () {
  var prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  var userLanguage = navigator.language || navigator.userLanguage;
  var languagePrefix = userLanguage.substring(0, 2);

  if (languagePrefix === 'pt') {
    document.getElementById('language-select').value = 'pt';
    setLanguage('pt');
  } else {
    document.getElementById('language-select').value = 'en';
    setLanguage('en');
  }

  if (prefersDarkMode) {
    document.getElementById('checkDarkMode').checked = true;
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  else {
    document.getElementById('checkDarkMode').checked = false;
    document.documentElement.setAttribute('data-theme', 'light');
  }
});

function languageChange() {
  var language = document.getElementById('language-select').value;
  setLanguage(language);
}

function setLanguage(language) {
  var textEnElements = document.getElementsByClassName('text-en');
  var textPtElements = document.getElementsByClassName('text-pt');
  
  if (language === 'pt') {
    for (var i = 0; i < textEnElements.length; i++) {
      textEnElements[i].style.display = 'none';
    }
    for (var i = 0; i < textPtElements.length; i++) {
      textPtElements[i].style.display = 'block';
    }
  } else {
    for (var i = 0; i < textEnElements.length; i++) {
      textEnElements[i].style.display = 'block';
    }
    for (var i = 0; i < textPtElements.length; i++) {
      textPtElements[i].style.display = 'none';
    }
  }
}

function DarkModeChange() {
  if (document.getElementById("checkDarkMode").checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}