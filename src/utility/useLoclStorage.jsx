function setTheme(theme) {
  localStorage.setItem('theme', theme);
}

function getTheme() {
  return localStorage.getItem('theme');
}
export { setTheme, getTheme };
