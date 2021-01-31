
//Nav fade
// window.onscroll = function (ev) {

//     if (window.scrollY > 1) {
//         $('nav').addClass('navToggle');
//     } else {
//         $('nav').removeClass('navToggle');
//     }

//     // console.log(document.body.offsetHeight)
//     // console.log(window.innerHeight)

// };

let mobile = false;

$(document).ready(function () {

    //Mobile Nav
    $('.menu-button').on('click', function () {

        if (!mobile) {
            $('.mobile-menu').addClass('block');
            mobile = true;
        } else {
            $('.mobile-menu').removeClass('block');
            mobile = false;
        }
    });

    //Nav Dropdown
    //Men
    $('.nav-men, .dropdown-men').hover(function () {
        $('.dropdown-women').addClass('none');
        $('.dropdown-men').addClass('fade');
        $('.box').addClass('fade');
    }, function () {
        $('.dropdown-women').removeClass('none');
        $('.dropdown-men').removeClass('fade');
        $('.box').removeClass('fade');
    });
    //Women
    $('.nav-women, .dropdown-women').hover(function () {
        $('.dropdown-men').addClass('none');
        $('.dropdown-women').addClass('fade');
        $('.box').addClass('fade');
    }, function () {
        $('.dropdown-men').removeClass('none');
        $('.dropdown-women').removeClass('fade');
        $('.box').removeClass('fade');

    });

    //Banner
    // $('.shop-women').hover(function () {
    //     $('.banner-womens').css('transform', 'scale(.9)');
    // }, function () {
    //     $('.banner-womens').css('transform', 'scale(.8)');
    // });

    // $('.shop-men').hover(function () {
    //     $('.banner-mens').css('transform', 'scale(.9)');
    // }, function () {
    //     $('.banner-mens').css('transform', 'scale(.8)');
    // });


    let product = [
        {
            "name": "Ankeny ll",
            "price": 154.99,
            "color": "Black",
            "brand": "Sorel",
            "path": "assets/catalog/mens/ankeny-ll/0.webp",
            "style": "lace"
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
            "name": "Barstyn Bootie",
            "price": 139.99,
            "color": "Cognac",
            "brand": "Lucky Brand",
            "path": "assets/catalog/womens/barstyn-bootie/0.webp",
            "style": "slip"
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
            "name": "1460 Combat Boot",
            "price": 149.99,
            "color": "Black",
            "brand": "Dr. Martens",
            "path": "assets/catalog/womens/1460-combat/0.webp",
            "style": "combat"
        },
        {
            "name": "Rustic Chelsea",
            "price": 164.99,
            "color": "Grey",
            "brand": "Rustic Asphalt",
            "path": "assets/catalog/mens/rustic-chelsea/0.webp",
            "style": "chelsea"
        }

    ]

    //Product carousel
    $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4
    });

    //Populate product carousel
    for (let i = 0; i < 8; i++) {
        $('.ss-' + i + ' img').attr('src', product[i].path);
        $('.ss-' + i + ' h3').html(product[i].name);
        $('.ss-' + i + ' h4').html(product[i].color);
        $('.ss-' + i + ' h5').html('$' + product[i].price);
    }

    //carousel hover img
    let temp = '';
    $('.slider img', this).hover(function () {
        temp = $(this).attr('src');
        temp = temp.slice(0, -6);
        temp = temp + '1.webp';
        $(this).attr('src', temp);

    }, function () {
        temp = $(this).attr('src');
        temp = temp.slice(0, -6);
        temp = temp + '0.webp';
        $(this).attr('src', temp);
    }
    );


    //grid href
    let value = '';
    $('.banner-btn div, .grid-container div').on('click', function () {
        value = $(this).attr('value');
        window.location.href = './collection.html' + '#' + value;
    });

    //carousel href
    let item = '';
    $('.slider div', this).on('click', function (e) {
        item = $('h3', this).html();
        e.stopPropagation();
        window.location.href = './product.html' + '#' + item;
    });


    //Nav menu href
    $('.box ul li').on('click', function () {
        value = $(this).attr('value');
        window.location.href = './collection.html' + '#' + value;
    });


});


