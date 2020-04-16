// const Art = function(name, img, size, details){
//     this.name = name,
//     this.img = img,
//     this.size = size,
//     this.details = details
//     this.status = 'unselected'
// }






// //painting data

// const painting1 = new Art ('And The Band Played On','./images/theme/And The Band Played On.jpg')
// const painting2 = new Art ("Fisherman's Warehouse", "./images/theme/Fisherman's Warehouse.jpg")
// const painting3 = new Art ('Noon Rest','./images/theme/Krehbiel.NoonRest.jpg')
// const painting4 = new Art ('Pack Mules at Green Door', './images/theme/Krehbiel.PackMulesatGreenDoor.jpg')
// const painting5 = new Art ('Saddled Up and Waiting','./images/theme/Krehbiel.SaddledUpandWaiting.jpg')
// const painting6 = new Art ('Santa Fe','./images/theme/Krehbiel.SantaFe.1922.jpg')
// const painting7 = new Art ('Myriad Blues of Winter','./images/theme/Myriad Blues of Winter.jpg')
// const painting8 = new Art ('SO232423','./images/theme/SO232423.jpg')
// const painting9 = new Art ('SO273441','./images/theme/SO273441.jpg')
// const painting10 = new Art ('SO3644-OverTV','./images/theme/SO3644-OverTV.jpg')
// const painting11 = new Art ('Sunny Winter Day','./images/theme/Sunny Winter Day.jpg')
// const painting12 = new Art ('Wet Snow and Woods','./images/theme/Wet Snow and Woods.jpg')
// const painting13 = new Art ('Winter in Mauve and Blues','./images/theme/Winter in Mauve and Blues.jpg')
// const painting14 = new Art ('Melody of Colors','./images/theme/Melody of Colors.jpg')

// let gallery = [painting1,painting2,painting3, painting4,painting5,painting6,painting7,painting8,painting9,painting10,painting11,painting12,painting13,painting14]

// //selected painting

// let paintingSelected = painting14
// let unselected = painting11


// let paintingSelect = document.querySelector('#img-selected')
// paintingSelect.src = paintingSelected.img

// let paintingSelectedpainting = document.querySelector('#selected-painting')
// paintingSelectedpainting.textContent = paintingSelected.name

// //line of small imgs




// let placeholder1 = document.querySelector('#img1')
// placeholder1.src = unselected.img

// let placeholder2 = document.querySelector('#img2')
// placeholder2.src = unselected.img

// let placeholder3 = document.querySelector('#img3')
// placeholder3.src = unselected.img

// let placeholder4 = document.querySelector('#img4')
// placeholder4.src = unselected.img

// let placeholder5 = document.querySelector('#img5')
// placeholder5.src = unselected.img

// let placeholder6 = document.querySelector('#img6')
// placeholder6.src = unselected.img

// let placeholder7 = document.querySelector('#img7')
// placeholder7.src = unselected.img

// let placeholder8 = document.querySelector('#img8')
// placeholder8.src = unselected.img

// let placeholder9 = document.querySelector('#img9')
// placeholder9.src = unselected.img

// let placeholder10 = document.querySelector('#img10')
// placeholder10.src = unselected.img

// let placeholder11 = document.querySelector('#img11')
// placeholder11.src = unselected.img

// let placeholder12 = document.querySelector('#img12')
// placeholder12.src = unselected.img

// let placeholder13 = document.querySelector('#img13')
// placeholder13.src = unselected.img

// let placeholder14 = document.querySelector('#img14')
// placeholder14.src = unselected.img



// Art.prototype.selected = function(painting){
//     painting.status = 'selected'
//     //paintingSelect.src = painting
// }


// Art.prototype.render = function(painting){
//     if(painting.status === 'selected'){
//         console.log('use for showcase')
//     } else{
//         console.log("don't use")
//     }
// }

// Art.prototype.selected(painting12)    
// Art.prototype.render(painting12)

// const b1 =  document.querySelector('#b1')
// b1.remove()