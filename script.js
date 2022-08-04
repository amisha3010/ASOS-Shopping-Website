

  //cart items 

  var addToCartButtons = document.getElementsByClassName("cart");
  for(var i=0; i<addToCartButtons.length; i++){
      var cartbutton= addToCartButtons[i];
      cartbutton.addEventListener('click',addToCartClicked);
  }

  function addToCartClicked(event){
var cartbutton=event.target;
var  shopItem= cartbutton.parentElement.parentElement;
var title= shopItem.querySelectorAll("h5")[0].innerText;
var price= shopItem.querySelectorAll("h4")[0].innerText;
var image= shopItem.querySelectorAll("img")[0].src;
addItemToCart(image,title,price)

  }
  function addItemToCart(image,title,price){
      var cartRow= document.createElement('div');
      cartRow.classList.add('cart-row');
      var cartItems=document.getElementsByClassName('cart-items')[0];
      var cartRowContents= `
      <table width="100%">
      <tbody>
          <tr>
              <td><a href="#"><i class="fa-regular fa-circle-xmark"></i></a></td>
              <td>Remove</td>
              <td>${image}</td>
              <td>${title}</td>
              <td>${price}</td>
              <td><input type="number" value="1"></td>
          </tr>
      </tbody>
  </table>
      `
      cartRow.innerHTML=cartRowContents;
      cartItems.append(cartRow);
  }