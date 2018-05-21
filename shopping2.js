
var basket =(function(){

    var addItem,
        newItem,
        checkProdutcs,
        lengthProducts,
        quantitySelected,
        itemSelected,
        billProducts,
        conta = 0,
        totalValue = 0,
        receiptProducts, 
        VAT,
        basketProducts=[],
        item=[
            fruit0 = {
                type: "Apple",
                uCost: 0.50,
                quantity: 0

            },
            fruit1 = {
                type: "Pear",
                uCost: 0.65,
                quantity: 0
            },
            fruit2 = {
                type: "Melon",
                uCost: 1.3,
                quantity: 0
            },
            fruit3 = {
                type: "Strawberry",
                uCost: 1.6,
                quantity: 0
            },
            fruit4 = {
                type: "Orange",
                uCost: 0.56,
                quantity: 0
            }
        ];

    addItem = function(){
        let con =0
        basketProducts = item.map(function(a){
            
                a.quantity = totalProducts[con];
                con = con + 1;
           
            return a
          
        });
        
        return basketProducts;
    };    

    checkProdutcs = function(){
        return lengthProducts = item.length;
    };

    billProducts = function (){
        
        var  VATValue = 5;
        totalValue = 0;
            
        basketProducts.forEach(produ);

        function produ(value){

            
            value.cost = value.uCost * value.quantity;
            return totalValue = totalValue + value.cost;
            
        };

        VAT = VATValue / 100 * totalValue;
        VAT = Number(VAT.toFixed(2));
        totalValue = totalValue + VAT;
        totalValue = Number(totalValue.toFixed(2));
    };

    receiptProducts = function(){
        let info = document.getElementById('receiptProduct'),
          
            VATPosi,
            totalPosi,
            posi;

            if (conta > 0){
                for(var i=1;i < conta+1; i++){
                    mierda = document.getElementById('reta'+i);
                    mierda.setAttribute('class' , 'hide');
                    mierda.removeAttribute("id");
                }
            };
         
           conta = 0;
        
        basketProducts.forEach (receipt);
            function receipt (it){
                
                if(it.quantity > 0){

                    conta = conta + 1;
                    
                    posi = document.getElementById ('receiptFixed');
                    let row = document.createElement ('tr');

                    let produt0 = document.createElement ('th'),
                        produt1 = document.createElement ('th'),
                        produt2 = document.createElement ('th'),
                        produt3 = document.createElement ('th');
  
                    posi.insertAdjacentElement('afterEnd', row);
                    row.insertAdjacentElement ('afterBegin' , produt0)
                    produt0.insertAdjacentElement('afterEnd', produt1);
                    produt1.insertAdjacentElement('afterEnd', produt2);
                    produt2.insertAdjacentElement('afterEnd', produt3);
                
                    produt0.innerHTML = it.type;
                    produt1.innerHTML = it.uCost;
                    produt2.innerHTML = it.quantity;
                    produt3.innerHTML = it.cost;

                    
                    row.setAttribute('id', 'reta'+ conta );
                    
                };
                
            };

        console.log(conta)
        VATPosi = document.getElementById ('tax');
        VATPosi.innerHTML ="VAT: " + VAT + " £";
        totalPosi = document.getElementById('totalh');
        totalPosi.innerHTML ="Total: " + totalValue + " £";
       
    };   
           
    return {
        add: addItem,
        check: checkProdutcs,
        bill: billProducts,
        receipt: receiptProducts
    }
})();
var button,
    checkProdutcsBasket,
    totalProducts = [];


button = document.getElementById('b');
button.addEventListener ('click', takeQuanty);

function takeQuanty (){
    checkProdutcsBasket = basket.check();
    totalProducts = [];
    
        
    for(i = 0 ; i < checkProdutcsBasket ; i++){
        let a = document.getElementById ('quantity' + i);
        a = a.value;
        totalProducts.push(a); 
      };
    
    basket.add();
    basket.bill();
    basket.receipt();
 };



 

      




