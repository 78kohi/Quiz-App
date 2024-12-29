let lightMode = localStorage.getItem('lightmode')
const switchThemeBtn = document.querySelector('.theme-switch')

const enableLightMode = () => {
  document.body.classList.add('lightmode')
  localStorage.setItem('lightmode', 'active')
}
const disableLightMode = () => {
  document.body.classList.remove('lightmode')
  localStorage.setItem('lightmode', null)
}

if(lightMode === 'active') enableLightMode()

switchThemeBtn.addEventListener('click', () => {
  lightMode = localStorage.getItem('lightmode')
  lightMode !== 'active' ? enableLightMode() : disableLightMode()
});