// 获取所有按钮
// var btnList = document.querySelectorAll('.btn-group .btn');
// // 获取购物车旁边的徽标
var totalQty = document.getElementsByName('totalQty')[0];

// for (const key in btnList) {
//     if (btnList.hasOwnProperty(key)) {
//         const element = btnList[key];
//         switch (element.name) {
//             case 'increase': element.addEventListener('click', increaseValue); break;
//             case 'decrease': element.addEventListener('click', decreaseValue); break;
//             case 'addToCart': element.addEventListener('click', addToCart); break;
//         }
//     }


// }
var add=document.getElementsByName('increase')
console.log(add)
var red=document.getElementsByName('decrease')
var tocart=document.getElementsByName('addToCart')
console.log(tocart)

for(var i=0;i<add.length;i++){
    add[i].addEventListener('click',increaseValue);
}
for(var i=0;i<red.length;i++){
    red[i].addEventListener('click',decreaseValue);
}

for(var i=0;i<tocart.length;i++){
    tocart[i].addEventListener('click',addToCart);
}


    function increaseValue(e) {
        var qtyObj = e.target.nextElementSibling;
        var qty = parseInt(qtyObj.innerText);
        qty++;
        qtyObj.innerText = qty;
        console.log(qty);
    }
    function decreaseValue(e) {
        var qtyObj = e.target.previousElementSibling;
        var qty = parseInt(qtyObj.innerText);
        if (qty > 1) qty--;
        else qty = 0;
        qtyObj.innerText = qty;
        console.log(qty);
    }

    function addToCart(e) {
        var qtyObj = e.target.previousElementSibling.previousElementSibling;
        var qty = parseInt(qtyObj.innerText);
        var total = parseInt(totalQty.innerText);
        total += qty;
        totalQty.innerText = total;
    }