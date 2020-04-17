const painting1 = {img:'./images/theme/And The Band Played On.jpg', name: 'And The Band Played On', size: 'HXW, 42X44 - $234.14 - $500, 32X34 - $137.85 - $300, 22X23 - $80.48 - $200, 14X13 - $30.34'}
const painting2 = {name:"Fisherman's Warehouse",img: "./images/theme/Fisherman's Warehouse.jpg",size:'44X44 - $245.29, 34X34 - $146.47, 24X24 - $83.98, 14X14 - $32.67'}
const painting3 = {name:'Noon Rest',img:'./images/theme/Krehbiel.NoonRest.jpg',size:'44X44 - $245.29, 34X34 - $146.47, 24X24 - $83.98, 14X14 - $32.67'}
const painting4 = {name:'Pack Mules at Green Door', img:'./images/theme/Krehbiel.PackMulesatGreenDoor.jpg',size:'44X38 - $211.84, 34X29 - $124.93, 24X21 $73.48, 14X12 $28.01'}
const painting5 = {name:'Saddled Up and Waiting',img:'./images/theme/Krehbiel.SaddledUpandWaiting.jpg',size:'38X44 - $211.84, 34X29 - 124.93, 24X20 - $69.98, 14X12 - $28.01'}
const painting6 = {name:'Santa Fe',img:'./images/theme/Krehbiel.SantaFe.1922.jpg', size:'41X44 - 31X34 - 22X24 - 13X14'}
const painting7 = {name:'Myriad Blues of Winter',img:'./images/theme/Myriad Blues of Winter.jpg',size:' 42X44 - 32X34 - 22X23 - 14X13'}
const painting8 = {name:'SO232423',img:'./images/theme/SO232423.jpg',size:' 42X44 - 32X34 - 22X23 - 14X13'}
const painting9 = {name:'SO273441',img:'./images/theme/SO273441.jpg',size:'35X44 - 27X34 - 19X24 - 11X14'}
const painting10 = {name:'SO3644-OverTV',img:'./images/theme/SO3644-OverTV.jpg',size:'36X44 - 28X34 - 20X24 - 11X14'}
const painting11 = {name:'Sunny Winter Day',img:'./images/theme/Sunny Winter Day.jpg',size:' 42X44 - 32X34 - 22X23 - 14X13'}
const painting12 = {name:'Wet Snow and Woods',img:'./images/theme/Wet Snow and Woods.jpg',size:'36X44 - 28X34 - 20X24 - 11X14'}
const painting13 = {name:'Winter in Mauve and Blues',img:'./images/theme/Winter in Mauve and Blues.jpg',size:' 42X44 - 32X34 - 22X23 - 14X13'}
const painting14 = {name:'Melody of Colors',img:'./images/theme/Melody of Colors.jpg',size:' 42X44 - 32X34 - 22X23 - 14X13'}

let selected = painting1

const b1 =  document.querySelector('#b1')
b1.addEventListener('click',function(){
    let b = document.querySelector('#img-selected')
    b.src = painting1.img
    let t = document.querySelector('#selected-painting')
    t.textContent = painting1.name
    selected = painting1
    console.log(selected)
})

const b2 =  document.querySelector('#b2')
b2.addEventListener('click',function(){
    let b = document.querySelector('#img-selected')
    b.src = painting2.img
    let t = document.querySelector('#selected-painting')
    t.textContent = painting2.name
    selected = painting2
    console.log(selected)
})

const b3 =  document.querySelector('#b3')
b3.addEventListener('click',function(){
    console.log('testing b3')
    let b = document.querySelector('#img-selected')
    b.src = painting3.img
    let t = document.querySelector('#selected-painting')
    t.textContent = painting3.name
    selected = painting3
    console.log(selected)
})

const b4 =  document.querySelector('#b4')
b4.addEventListener('click',function(){
    console.log('testing b4')
    let b = document.querySelector('#img-selected')
    b.src = painting4.img
    let t = document.querySelector('#selected-painting')
    t.textContent = painting4.name
    selected = painting4
    console.log(selected)
})

const b5 =  document.querySelector('#b5')
b5.addEventListener('click',function(){
    console.log('testing b5')
    let b = document.querySelector('#img-selected')
    b.src = painting5.img
    let t = document.querySelector('#selected-painting')
    t.textContent = painting5.name
    selected = painting5
    console.log(selected)
})

const b6 =  document.querySelector('#b6')
b6.addEventListener('click',function(){
    console.log('testing b6')
    let b = document.querySelector('#img-selected')
    b.src = painting6.img
    let t = document.querySelector('#selected-painting')
    t.textContent = painting6.name
    selected = painting6
    console.log(selected)
})

const b7 =  document.querySelector('#b7')
b7.addEventListener('click',function(){
    console.log('testing b7')
    let b = document.querySelector('#img-selected')
    b.src = painting7.img
    let t = document.querySelector('#selected-painting')
    t.textContent = painting7.name
    selected = painting7
    console.log(selected)
})

const b8 =  document.querySelector('#b8')
b8.addEventListener('click',function(){
    console.log('testing b8')
    let b = document.querySelector('#img-selected')
    b.src = painting8.img
    let t = document.querySelector('#selected-painting')
    t.textContent = painting8.name
    selected = painting8
    console.log(selected)
})

const b9 =  document.querySelector('#b9')
b9.addEventListener('click',function(){
    console.log('testing b9')
    let b = document.querySelector('#img-selected')
    b.src = painting9.img
    let t = document.querySelector('#selected-painting')
    t.textContent = painting9.name
    selected = painting9
    console.log(selected)
})

const b10 =  document.querySelector('#b10')
b10.addEventListener('click',function(){
    console.log('testing b10')
    let b = document.querySelector('#img-selected')
    b.src = painting10.img
    let t = document.querySelector('#selected-painting')
    t.textContent = painting10.name
    selected = painting10
    console.log(selected)
})

const b11 =  document.querySelector('#b11')
b11.addEventListener('click',function(){
    console.log('testing b11')
    let b = document.querySelector('#img-selected')
    b.src = painting11.img
    let t = document.querySelector('#selected-painting')
    t.textContent = painting11.name
    selected = painting11
    console.log(selected)
})

const b12 =  document.querySelector('#b12')
b12.addEventListener('click',function(){
    console.log('testing b12')
    let b = document.querySelector('#img-selected')
    b.src = painting12.img
    let t = document.querySelector('#selected-painting')
    t.textContent = painting12.name
    selected = painting12
    console.log(selected)
})

const b13 =  document.querySelector('#b13')
b13.addEventListener('click',function(){
    console.log('testing b13')
    let b = document.querySelector('#img-selected')
    b.src = painting13.img
    let t = document.querySelector('#selected-painting')
    t.textContent = painting13.name
    selected = painting13
    console.log(selected)
})

const b14 =  document.querySelector('#b14')
b14.addEventListener('click',function(){
    console.log('testing b14')
    let b = document.querySelector('#img-selected')
    b.src = painting14.img
    let t = document.querySelector('#selected-painting')
    t.textContent = painting14.name
    selected = painting14
    console.log(selected)
})



const user1 = {
    name: 1,
    selcetd: 'painting1',
    quanity: 1
}




const quanity = document.querySelector('#painting-quanity')
quanity.addEventListener('input',function(e){
    user1.quanity = e.target.value
    console.log(user1.quanity)
})

const cart = document.querySelector('#adding-to-cart')
cart.addEventListener('click',function(){
    const userJSON = JSON.stringify(user1)
    localStorage.setItem('user1',userJSON)
    let shopping = document.querySelector('.shopping')
    shopping.textContent = `Shopping-Cart(${user1.quanity})`    
})

userJSON1 = localStorage.getItem('user1')
user = JSON.parse(userJSON1)

renderQuantiy = `Shopping(${user.quanity})`
console.log(renderQuantiy)

shopCart = document.querySelector('.shopping')

shopCart.textContent = `Shopping-Cart(${user.quanity})`

