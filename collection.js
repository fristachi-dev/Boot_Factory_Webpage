

$(document).ready(function () {

    //Recieve Item hash
    let urlFrag = window.location.hash.substring(1)
    urlFrag = decodeURI(urlFrag);
    let catalog;

    //Catalog Obj
    let productMens = [
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
            "color": "Black",
            "brand": "Florsheim",
            "path": "assets/catalog/mens/accessories/peddle-belt.png",
            "style": "misc belt"
        },
        {
            "name": "Stitch Men's Belt",
            "price": 19.95,
            "color": "Light Brown",
            "brand": "Steve Madden",
            "path": "assets/catalog/mens/accessories/stitch-belt.png",
            "style": "misc belt"
        },
        {
            "name": "Rodrigo Messenger Bag",
            "price": 69.99,
            "color": "Taupe",
            "brand": "Florsheim",
            "path": "assets/catalog/mens/accessories/rodrigo-bag.webp",
            "style": "misc bag"
        },

    ]

    let productWomens = [
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

    ]

    let productMisc = [
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
            "color": "Black",
            "brand": "Florsheim",
            "path": "assets/catalog/mens/accessories/peddle-belt.png",
            "style": "misc belt"
        },
        {
            "name": "Stitch Men's Belt",
            "price": 19.95,
            "color": "Light Brown",
            "brand": "Steve Madden",
            "path": "assets/catalog/mens/accessories/stitch-belt.png",
            "style": "misc belt"
        },
        {
            "name": "Rodrigo Messenger Bag",
            "price": 69.99,
            "color": "Taupe",
            "brand": "Florsheim",
            "path": "assets/catalog/mens/accessories/rodrigo-bag.webp",
            "style": "misc bag"
        },
    ]

    let arr = [];
    arr = urlFrag.split('-');

    //Page versions
    if (arr[0] == 'Mens') {
        catalog = productMens;
        $('.catalog-banner').css('background-image', 'url(./assets/banners/forest1.png)');
        $('.search-slip').hide();
    } else if (arr[0] == 'Womens') {
        catalog = productWomens;
        $('.catalog-banner').css('background-image', 'url(./assets/banners/forest1.png)');
        $('.search-chukka').hide();
    } else if (arr[0] == 'Accessories') {
        catalog = productMisc;
        $('.catalog-banner').css('background-image', 'url(./assets/banners/forest1.png)');
        $('.side-bar div').hide();
    }

    //Page title
    $('.sb-title').html('Shopping ' + arr[0]);


    //Sidebar Dropdown Toggle
    $('.sb-expand', this).on('click', function (event) {
        $(this).next().toggleClass("height");
        $('.fa-chevron-down', this).toggleClass('none');
        $('.fa-chevron-up', this).toggleClass('block');
    });

    //Dropdown Highlight
    $('.side-bar li, .search-misc').on('click', function () {
        $('.side-bar ul li').css('background', 'white');
        $('.search-misc').css('background', 'white');
        $(this).css('background', '#f0f0f0');
    });

    //Populate Catalog
    for (let i = 0; i < catalog.length; i++) {

        $('.cat-ul').append(
            `
            <li class="item ` + catalog[i].style + ` ` + catalog[i].color + `">
                <img src=` + catalog[i].path + `>
                <div>
                    <span class="value">` + catalog[i].name + `</span>
                    <span class="right">` + catalog[i].price + `</span>
                </div>
                <p>` + catalog[i].color + `</p>
            </li>
            `
        );
    }
    if (urlFrag != 'Accessories') {
        $('.misc').hide();
    }
    //Nav dropdown filter
    if (typeof arr[1] !== 'undefined') {
        $('.item').hide();
        $('.' + arr[1]).show();
    }

    //Dropdown Search Style
    $('.search-all').on('click', function () {
        $('.item').show();
        $('.misc').hide();
    });
    $('.search-chukka').on('click', function () {
        $('.item').hide();
        $('.chukka').show();
    });
    $('.search-chelsea').on('click', function () {
        $('.item').hide();
        $('.chelsea').show();
    });
    $('.search-combat').on('click', function () {
        $('.item').hide();
        $('.combat').show();
    });
    $('.search-lace').on('click', function () {
        $('.item').hide();
        $('.lace').show();
    });
    $('.search-slip').on('click', function () {
        $('.item').hide();
        $('.slip').show();
    });

    //Dropdown Search Color
    $('.color-all').on('click', function () {
        $('.item').show();
        $('.misc').hide();
    });
    $('.color-brown').on('click', function () {
        $('.item').hide();
        $('.Brown, .Cognac').show();
    });
    $('.color-black').on('click', function () {
        $('.item').hide();
        $('.Black').show();
    });
    $('.color-grey').on('click', function () {
        $('.item').hide();
        $('.Grey').show();
    });
    $('.color-navy').on('click', function () {
        $('.item').hide();
        $('.Navy').show();
    });
    $('.color-white').on('click', function () {
        $('.item').hide();
        $('.White').show();
    });

    //Dropdown Accessories
    $('.search-misc').on('click', function () {
        $('.item').hide();
        $('.misc').show();
    });


    // let temp;
    // $('.item', this).on('click', function (e) {
    //     temp = $('img', this).attr('src');
    //     temp = temp.slice(0, -6);
    //     temp = temp + '1.webp';
    //     $('img', this).attr('src', temp);
    // });

    //Change Img on item hover
    $('.item', this).hover(function () {
        if ($(this).hasClass('misc') === false) {
            temp = $('img', this).attr('src');
            temp = temp.slice(0, -6);
            temp = temp + '1.webp';
            $('img', this).attr('src', temp);
        }

    }, function () {
        if ($(this).hasClass('misc') === false) {
            temp = $('img', this).attr('src');
            temp = temp.slice(0, -6);
            temp = temp + '0.webp';
            $('img', this).attr('src', temp);
        }
    }
    );

    ////////////////////////

    //Pass Item to product page
    let item = '';
    $('.item', this).on('click', function () {
        item = $('.value', this).html();
        window.location.href = './product.html' + '#' + item;
    });


    //Nav menu href
    let value = '';
    $('.box ul li').on('click', function () {
        value = $(this).attr('value');
        window.location.href = './collection.html' + '#' + value;
        location.reload();
    });



    // //Populate Product Details
    // let i = product.findIndex(x => x.name === item);


});