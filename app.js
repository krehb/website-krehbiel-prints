
userJSON1 = localStorage.getItem('user1')
user = JSON.parse(userJSON1)

renderQuantiy = `Shopping(${user.quanity})`
console.log(renderQuantiy)

shopCart = document.querySelector('.shopping')

shopCart.textContent = `Shopping-Cart(${user.quanity})`