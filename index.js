var initialPrice =  document.querySelector("#initial-price");
var quantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-price");
var btnCheck = document.querySelector("#btn-check");
var output= document.querySelector(".output-container");

btnCheck.addEventListener("click", validate);

function validate(){
    hideMessage();
    if(!initialPrice.value){
        showMessage("I hate every minute of training. But I said, \n 'Don't Quit. Suffer now and live the rest of your life as a champion'\n- Muhammad Ali\n Give me your INITIAL PRICE🤔");
    }else{
        if(!quantity.value){
            showMessage("It is quality rather than quantity that matters. But Here, we need QUANTITY😜");
        }else{
            if(!currentPrice.value){
                showMessage("Everything has its price.. where is your CURRENT PRICE ⁉");
            }
            else{
                var costPrice = Number(initialPrice.value) * Number(quantity.value);
                var sellingPrice = Number(currentPrice.value) *Number(quantity.value);
                var percent = calculateProfitAndLoss(costPrice,sellingPrice);
                showMessage(percent[0],percent[1]);
            }

        }
    }
}

function hideMessage(){
    output.style.display="none";
}

function showMessage(message,color){
    output.style.display="block";
    output.style.color =color;
    output.innerText = message;
}

function calculateProfitAndLoss(costPrice, sellingPrice){
    var profit = [];
    var loss = [];
    if(sellingPrice > costPrice){
        var profitvalue = sellingPrice - costPrice ;
        var profitPercent = Math.round((profitvalue/costPrice) *100);
        profit[0] = "Its Profit !!  Profit is "+profitvalue +" and profit percent is "+profitPercent; 
        profit[1] ="Green";
        return profit;
    }
    else if(costPrice > sellingPrice){
        var lossvalue = costPrice - sellingPrice ;
        var lossPercent = Math.round((lossvalue/costPrice) * 100);
        loss[0] ="Oh no.. Loss is " +lossvalue+" and loss percentage is " +lossPercent;
        loss[1] ="red";
        return loss;
    }

}