
// 购物车实例化
var cart = new ShoppingCart();
// 获取购物车根节点
let cartRoot = document.querySelector("#cartRoot");
// 获取订单根节点
var cartListNode = document.querySelector('#cartContent');
//定义一组字符串命名规则-JSON
// 数据
const dataNameJson =
    {
        "price": "[data-name='price']",
        "qty": "[data-name='qty']",
        "imgSrc": '[data-name="imgSrc"]',
        "subPrice": '[data-name="subPrice"]',
        "selectedQty": '[data-name="selectedQty"]',
        "selectedAmount": '[data-name="selectedAmount"]',
        "units": '[data-name="units"]'
    };
//订单操作
const operatorNameJson =
    {
        "checkItem": "[data-operator='checkItem']",
        "increase": "[data-operator='increase']",
        "decrease": "[data-operator='decrease']",
        "deleteItem": "[data-operator='deleteItem']"
    };

// 全局操作
const operatorGlobal = {
    "clearAll": "[data-operator='clearAll']"
}
// console.log(cart);

//显示购物车所有订单列表
function displayOrderList() {
    //获取购物车
    let cartData = cart.getDataFromLocalStorage();
    // console.log(cartData);
    //获取购物车的JSON数据中的订单列表
    let orderList = cartData.orderList;
    //挂接到父元素，找到孩子节点
    let cartContent = document.querySelector("#cartContent");
    //获取id
    let exampleNode = document.querySelector('#orderExample');
    for (let i = 0; i < orderList.length; i++) {

        //重新定义一个order,把orderList元素重新赋值给order
        let order = orderList[i];
        //克隆样本节点
        let orderNew = exampleNode.cloneNode(true);
        orderNew.id = order.id;
        // console.log(orderNew); 
        //挂接到父元素，找到孩子节点       
        cartContent.appendChild(orderNew);
        //移除新节点到隐藏属性
        orderNew.classList.remove("d-none");


        //获取图片的所有节点
        let imgSrcNew = orderNew.querySelector('[data-name="imgSrc"]');
        // console.log(imgSrcNew);
        imgSrcNew.src = 'images/' + order.imgSrc;

        //获取名字的所有节点
        let nameNew = orderNew.querySelector('[data-name="title"]');
        // console.log(nameNew);
        nameNew.textContent = order.title;
        // console.log(nameNew.textContent);

        //获取单价的所有节点
        let priceNew = orderNew.querySelector('[data-name="price"]');
        //  console.log(priceNew);
        priceNew.textContent = order.price;

        //获取选择框设置转态
        let checkboxNew = orderNew.querySelector('[data-operator="checkItem"]');
        //  console.log(checkboxNew);
        checkboxNew.checked = order.selectStatus;

        //获取数量的所有的节点
        let qtyNew = orderNew.querySelector('[data-name="qty"]');
        // console.log(qtyNew);
        qtyNew.textContent = order.qty;

        //获取小计的所有节点
        let subPriceNew = orderNew.querySelector('[data-name="subPrice"]');
        // console.log(order.price);
        // console.log(order.qty);
        // console.log(subPriceNew);
        subPriceNew.textContent = (order.price * order.qty);

        //给删除按钮




    }


}

//显示商品总样本数
//显示已选中商品到总件数和总价格
function displaySelectedTotal() {

    //获取总数相关节点,并设置对应值

    let totalNode = cartRoot.querySelector(dataNameJson.units);
    // console.log(totalNode);
    // totalNode.textContent = cart.units();
    totalNode.textContent = cart.getDataFromLocalStorage().units;

    totalNode = cartRoot.querySelector(dataNameJson.selectedQty);
    totalNode.textContent = cart.getSelectedQty();

    totalNode = cartRoot.querySelector(dataNameJson.selectedAmount);
    totalNode.textContent = (cart.getSelectedAmount()).toFixed(2);

}
//为相关节点注册事件
function regEvent() {
    // 获取清空购物车节点
    let element = cartRoot.querySelector(operatorGlobal.clearAll);
    // console.log(element);
    // 注册单击事件触发函数
    element.onclick = clearAllEventFun;


    //获取一组订单删除按钮
    element = cartRoot.querySelectorAll(operatorNameJson.deleteItem);
    // console.log(element);
    //为每一个删除按钮设计单击事件—触发
    for (const i in element) {
        element[i].onclick =deleteItemEventFun ;
    }


}
// 清空事件触发函数
function clearAllEventFun() {
    cart.clearCart();
    // 获取订单根节点
    //保留样本节点
    let ExampleNode = (document.querySelector('#orderExample')).cloneNode(true);
    //清除订单根节点的所有元素
    cartListNode.innerHTML = "";
    //将样本节点挂接回列表根节点
    cartListNode.appendChild(ExampleNode);
    // 更新商品总数据
    displaySelectedTotal();
}

// //删除事件触发函数
function deleteItemEventFun(e) {
    // console.log(e);

    // 获取订单根节点
    //获取获取当前被单击的删除按钮
    let currentBtn = e.target;
    //获取单击按钮的父节点的父节点
    let node = currentBtn.parentNode.parentNode;
    // 
    //删除父节点的id 
    cart.deleteItem(node.id);
    //移除订单根节点的父节点
    cartListNode.removeChild(node);

    displaySelectedTotal();

}

function init() {
    //显示订单列表
    displayOrderList();
    //显示总数据
    displaySelectedTotal();
    //为相关节点注册事件
    regEvent();
   
}
//调用初始化函数
init();


