document.addEventListener('DOMContentLoaded', function() {
  var prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  var userLanguage = navigator.language || navigator.userLanguage;
  var languagePrefix = userLanguage.substring(0, 2);
  console.log(prefersDarkMode)

  if (languagePrefix === 'pt') {
    document.getElementById('language-select').value = 'pt';
    document.getElementById('title-en').style.display = 'none';
    document.getElementById('title-pt').style.display = 'block';
  } else{
    document.getElementById('language-select').value = 'en';
    document.getElementById('title-en').style.display = 'block';
    document.getElementById('title-pt').style.display = 'none';
  }

  if(prefersDarkMode){
    document.getElementById('checkDarkMode').checked = true;
  }
  else{
    document.getElementById('checkDarkMode').checked = false;
  }
});

document.getElementById('language-select').addEventListener('change', function() {
  var language = this.value;
  if (language === 'en') {
    document.getElementById('title-en').style.display = 'block';
    document.getElementById('title-pt').style.display = 'none';
  } else if (language === 'pt') {
    document.getElementById('title-en').style.display = 'none';
    document.getElementById('title-pt').style.display = 'block';
  }
});