let blur = document.querySelector('.blur')
let spread = document.querySelector(".spread")
let vertical = document.querySelector(".vertical")
let horizontal = document.querySelector(".horizontal")
let box = document.querySelector(".box")
let color = document.querySelector(".color")
let settingsRanges = document.querySelectorAll(".settings-block input")
let  boxShadowCode= document.querySelector(".box-shadow-code")

settingsRanges.forEach(input => {
    input.addEventListener('input', () => {
        generateShadow()
    })
})

function generateShadow(){
    const property =`${horizontal.value}px ${vertical.value}px ${blur.value}px ${spread.value}px ${color.value}`
    box.style.boxShadow = property
    boxShadowCode.textContent = `box-shadow: ${ property};`
}
generateShadow()