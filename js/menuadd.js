onload = function(){

    const addButtons = document.querySelectorAll('.fa-shopping-cart');
    const modalOrderList = document.querySelector(".modal-orderlist ul");
    const show = document.querySelector("#orderSubmit");
    const disabled = document.querySelectorAll(".add-order-button");

    const menu = [
        {id:1, name : "Ashe Reshteh", price:9},
        {id:2 , name : "Kashke bademjoon", price:6},
        {id:3 , name : "masto khiar", price:6},
        {id:4 , name : "Mirza ghasemi", price:7.6},
        {id:5 , name : "Salad shirazi", price:3},
        {id:6 , name : "Tah digi", price:1.5},
        {id:7 , name : "falafel", price:4.5},
        {id:8 , name : "Non pani sabzi", price:2.5},

        {id:9, name : "Polo gheymeh", price:11},
        {id:10 , name : "Polo ghormeh sabzi", price:11},
        {id:11 , name : "Joje kabab", price:13},
        {id:12 , name : "Cholo kabab", price:13},
        {id:13 , name : "Polo morgh", price:11.5},
        {id:14 , name : "shishlik", price:15},
        {id:15 , name : "Polo bademjoon", price:10.5},
        {id:16 , name : "fesenjon", price:11.5},

        {id:17, name : "baghlava", price:8.5},
        {id:18 , name : "Bastani akbar mashti", price:5},
        {id:19, name : "Halva", price:4},
        {id:20 , name : "Shole zard", price:5},
        {id:21, name : "Sohan", price:3.5},
        {id:22 , name : "Tiramisu", price:4.5},
        {id:23 , name : "Ferni", price:1.5},
        {id:24 , name : "Koko sabzi", price:1.5},

        {id:25 , name : "Chay zaferoni", price:1.5},
        {id:26 , name : "chay", price:1},
        {id:27 , name : "dough", price:2},
        {id:28 , name : "Sharbat khakeshir", price:2},
        {id:29 , name : "Sharbat bidmeshk", price:2},
        {id:30 , name : "Sharbate ablimoo", price:1.5},
        {id:31 , name : "Ab", price:1},
        {id:32 , name : "Ab anar", price:4.5},
    ];

    let addMenus = [];

    addButtons.forEach((addButton) => {
        addButton.addEventListener('click', (e) => {
            e.preventDefault();
            const ul = e.target.parentElement.parentElement.parentElement;
            const itemId = ul.dataset['id'];
            const item = menu.find(m => m.id === parseInt(itemId));
            let newMenu = {
                name:item.name,
                price:item.price,
            }
            addMenus.push(newMenu);
        })
        })

        show.addEventListener('click', () => {
            // for (var i = 0; i < addMenus.length; i++) {
            //     var a = addMenus;
            //     var li = document.createElement('li');
            //     li.textContent = addMenus[i];
            //     document.getElementById('modal-orderlist').appendChild(li);
            // }



                const names = addMenus.map(item => item["name"])
                const prices = addMenus.map(item => item["price"])
                const quantities = addMenus.map(item => item["quantity"])
                // console.log(names)
                // console.log(prices)
                // console.log(quantities)

                names.map(function( value ) {
                    console.log( value );
                    var li = document.createElement('li');
                    li.textContent = value;
                    var list = document.getElementById('modal-orderlist-name');
                    list.insertBefore(li, list.children[1]);
                });

                prices.map(function( value ) {
                    console.log( value );
                    var li = document.createElement('li');
                    li.textContent = value;
                    var list = document.getElementById('modal-orderlist-price');
                    list.insertBefore(li, list.children[1]);
                });

                quantities.map(function( value ) {
                    // console.log( value );

                    // li.textContent = value;
                    var counter = document.getElementById('count');
                    counter.innerHTML+='<tr><td><button class="minus">－</button><input type="text" name="input01" value="1" readonly class="number"><button class="plus">＋</button></td></tr>';
                    // list.insertBefore(li, list.children[1]);
                })

                addMenus = [];
        })



    }