

$(document).ready(function () {

    //Catalog Obj
    let product = [
        {
            "name": "Scroll Chukka",
            "price": 124.99,
            "color": "Light Brown",
            "brand": "Dr. Scholls",
            "path": "assets/catalog/mens/scroll-chukka/0.webp",
            "style": "chukka"
        },
        {
            "name": "Sussex Chukka Boot",
            "price": 114.99,
            "color": "Brown",
            "brand": "Dr. Martens",
            "path": "assets/catalog/mens/sussex-chukka-boot/0.webp",
            "style": "chukka"
        },
        {
            "name": "Bunsin Lace-Up",
            "price": 119.99,
            "color": "Cognac",
            "brand": "Madden",
            "path": "assets/catalog/mens/bunsin-combat-boot/0.webp",
            "style": "combat"
        },
        {
            "name": "Dr.Martens Comb Boots",
            "price": 159.99,
            "color": "Black",
            "brand": "Dr. Martens",
            "path": "assets/catalog/mens/combs-boot/0.webp",
            "style": "combat"
        },
        {
            "name": "Deelin Boot",
            "price": 89.99,
            "color": "Black",
            "brand": "Madden",
            "path": "assets/catalog/mens/deelin-boot/0.webp",
            "style": "lace"
        },
        {
            "name": "Corbin Chelsea",
            "price": 149.99,
            "color": "Cognac",
            "brand": "Thomas and Vine",
            "path": "assets/catalog/mens/corbin-chelsea/0.webp",
            "style": "chelsea"
        },
        {
            "name": "Drifter Steel Toe Boot",
            "price": 189.99,
            "color": "Brown",
            "brand": "Lugz",
            "path": "assets/catalog/mens/drifter-steel-toe/0.webp",
            "style": "combat"
        },
        {
            "name": "Rustic Chelsea",
            "price": 164.99,
            "color": "Grey",
            "brand": "Rustic Asphalt",
            "path": "assets/catalog/mens/rustic-chelsea/0.webp",
            "style": "chelsea"
        },
        {
            "name": "Ankeny ll",
            "price": 154.99,
            "color": "Black",
            "brand": "Sorel",
            "path": "assets/catalog/mens/ankeny-ll/0.webp",
            "style": "lace"
        },
        {
            "name": "Gervis Cukka Boot",
            "price": 69.99,
            "color": "Navy",
            "brand": "Tommy Hilfiger",
            "path": "assets/catalog/mens/gervis-chukka/0.webp",
            "style": "chukka"
        },
        {
            "name": "Raleigh Boot",
            "price": 124.99,
            "color": "Grey",
            "brand": "Bullboxer",
            "path": "assets/catalog/mens/raleigh-boot/0.webp",
            "style": "lace"
        },
        {
            "name": "Kezar Boot",
            "price": 189.99,
            "color": "Grey",
            "brand": "Sorel",
            "path": "assets/catalog/mens/kezar-boot/0.webp",
            "style": "lace"
        },
        {
            "name": "Yamka Wedge Chelsea",
            "price": 74.99,
            "color": "Light Brown",
            "brand": "Lucky Brand",
            "path": "assets/catalog/womens/yamka-chelsea/0.webp",
            "style": "chelsea"
        },
        {
            "name": "Rogue-Lo Snow Boot",
            "price": 109.99,
            "color": "Grey",
            "brand": "Kamik",
            "path": "assets/catalog/womens/rogue-lo/0.webp",
            "style": "lace"
        },
        {
            "name": "Pathfield Boot",
            "price": 139.99,
            "color": "White",
            "brand": "White Montain",
            "path": "assets/catalog/womens/pathfield-boot/0.webp",
            "style": "combat"
        },
        {
            "name": "Horrace Chelsea",
            "price": 129.99,
            "color": "Cognac",
            "brand": "Franco Sarto",
            "path": "assets/catalog/womens/horrace-chelsea/0.webp",
            "style": "chelsea"
        },
        {
            "name": "Lottie Chelsea Boot",
            "price": 104.99,
            "color": "Black",
            "brand": "Michael Kors",
            "path": "assets/catalog/womens/lottie-chelsea/0.webp",
            "style": "chelsea"
        },
        {
            "name": "1460 Combat Boot",
            "price": 149.99,
            "color": "Black",
            "brand": "Dr. Martens",
            "path": "assets/catalog/womens/1460-combat/0.webp",
            "style": "combat"
        },
        {
            "name": "Abree Mini Bootie",
            "price": 159.99,
            "color": "Grey",
            "brand": "UGG",
            "path": "assets/catalog/womens/ugg-bootie/0.webp",
            "style": "slip"
        },
        {
            "name": "Barstyn Bootie",
            "price": 139.99,
            "color": "Cognac",
            "brand": "Lucky Brand",
            "path": "assets/catalog/womens/barstyn-bootie/0.webp",
            "style": "slip"
        },
        {
            "name": "Ankeny ll",
            "price": 154.99,
            "color": "Black",
            "brand": "Sorel",
            "path": "assets/catalog/mens/ankeny-ll/0.webp",
            "style": "lace"
        },
        {
            "name": "Gervis Cukka Boot",
            "price": 69.99,
            "color": "Navy",
            "brand": "Tommy Hilfiger",
            "path": "assets/catalog/mens/gervis-chukka/0.webp",
            "style": "chukka"
        },
        {
            "name": "Raleigh Boot",
            "price": 124.99,
            "color": "Grey",
            "brand": "Bullboxer",
            "path": "assets/catalog/mens/raleigh-boot/0.webp",
            "style": "lace"
        },
        {
            "name": "Kezar Boot",
            "price": 189.99,
            "color": "Grey",
            "brand": "Sorel",
            "path": "assets/catalog/mens/kezar-boot/0.webp",
            "style": "lace"
        },
        {
            "name": "Comfort Men Crew Booy Socks",
            "price": 14.99,
            "color": "Multicolor",
            "brand": "Timberland",
            "path": "assets/catalog/mens/accessories/comfort-men.webp",
            "style": "misc sock"
        },
        {
            "name": "Ribben Men Crew Booy Socks",
            "price": 14.99,
            "color": "Multicolor",
            "brand": "Timberland",
            "path": "assets/catalog/mens/accessories/ribben-men.webp",
            "style": "misc sock"
        },
        {
            "name": "Solid Men Crew Booy Socks",
            "price": 14.99,
            "color": "Multicolor",
            "brand": "Timberland",
            "path": "assets/catalog/mens/accessories/solid-men.webp",
            "style": "misc sock"
        },
        {
            "name": "Peddle Men's Leather Belt",
            "price": 27.99,
            "color": "",
            "brand": "Florsheim",
            "path": "assets/catalog/mens/accessories/peddle-belt.png",
            "style": "misc belt"
        },
        {
            "name": "Stitch Men's Belt",
            "price": 19.95,
            "color": "",
            "brand": "Steve Madden",
            "path": "assets/catalog/mens/accessories/stitch-belt.png",
            "style": "misc belt"
        },
        {
            "name": "Rodrigo Messenger Bag",
            "price": 69.99,
            "color": "",
            "brand": "Florsheim",
            "path": "assets/catalog/mens/accessories/rodrigo-bag.webp",
            "style": "misc bag"
        },
        {
            "name": "Superlite Womens No Show Socks",
            "price": 19.99,
            "color": "Multicolor",
            "brand": "Adidas",
            "path": "assets/catalog/womens/accessories/noshow-socks.webp",
            "style": "misc sock"
        },
        {
            "name": "Solid Womens No Show Socks",
            "price": 14.99,
            "color": "Black",
            "brand": "Mix No. 6",
            "path": "assets/catalog/womens/accessories/mix6-socks.webp",
            "style": "misc sock"
        },
        {
            "name": "Zenawien Satchel",
            "price": 69.99,
            "color": "Light Brown",
            "brand": "Aldo",
            "path": "assets/catalog/womens/accessories/zenawien-bag.webp",
            "style": "misc bag"
        },
        {
            "name": "Kimmie Crossbody Bag",
            "price": 39.99,
            "color": "Grey",
            "brand": "Violet Ray",
            "path": "assets/catalog/womens/accessories/kimmie-bag.webp",
            "style": "misc bag"
        },

    ]

    //Recieve Item hash
    let item = window.location.hash.substring(1)
    item = decodeURI(item);

    //Populate Product Details
    let i = product.findIndex(x => x.name === item);
    $('.name').html(product[i].name);
    $('.price').html('$' + product[i].price);
    $('.color').html('Color: ' + product[i].color);
    $('.brand').html(product[i].brand);
    $('.afterpay').html('or 4 interest-free payments of $' + Math.round(product[i].price / 4) + '.00');
    $('.main-img').attr('src', product[i].path);

    let styleArr = product[i].style.split(' ')
    if (styleArr[1] == 'sock') {
        $('.shoe-size').hide();
        $('.belt-size').hide();
    } else if (styleArr[1] == 'belt') {
        $('.shoe-size').hide();
        $('.sock-size').hide();
        $('.pt-width').hide();
    } else if (styleArr[1] == 'bag') {
        $('.shoe-size').hide();
        $('.sock-size').hide();
        $('.belt-size').hide();
        $('.pt-width').hide();
    } else {
        $('.sock-size').hide();
        $('.belt-size').hide();
    }

    //Toggle Item Width
    $('.standard, .wide').on('click', function (e) {
        $('.standard, .wide').toggleClass('active');
    });

    //Select Item Size
    $('.size div div').on('click', function () {
        $('.size div div').removeClass('size-active');
        $(this).addClass('size-active');
    });

    //Populate Item Imgs
    let tempStr = product[i].path;
    if (styleArr[0] != "misc") {
        for (let i = 0; i < 7; i++) {
            $('.side-img-' + i).attr('src', tempStr);
            tempStr = tempStr.slice(0, -6);
            tempStr = tempStr + i + '.webp';
        }
    } else {
        $('img-sidebar ul').hide();
    }


    //Change main Img on hover
    let count = 1;
    $('.main-img-1').hide();

    //Alternate between img and img-1 for fade effect
    $('.side-img', this).on('click', function () {
        if (count % 2 == 0) {
            $('.main-img-1').fadeOut(400);
            $('.main-img').fadeIn(400).attr('src', $(this).attr('src'));
        } else {
            $('.main-img').fadeOut(400);
            $('.main-img-1').fadeIn(400).attr('src', $(this).attr('src'));
        }
        count += 1;
        console.log(count % 2)
    });

    //Open guide toggle
    $('.find-size span').on('click', function () {
        $('.size-guide').toggleClass('block');
    });
    $('.size-guide-x').on('click', function () {
        $('.size-guide').toggleClass('block');
    });

    //Active image border
    $('.img-sidebar img').on('click', function () {
        $('.img-sidebar img').removeClass('img-size');
        $(this).addClass('img-size');
    });

    //nav menu link
    let value = '';
    $('.box ul li').on('click', function () {
        value = $(this).attr('value');
        window.location.href = './collection.html' + '#' + value;
    });

});

