
export const NavigationItems = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'Shop', link: '/' },
    { id: 3, name: 'Blog', link: '/' },
    { 
        id: 4, 
        name: 'Pages', 
        PagesInnerLink: [
            { id: 4.1, name: 'My Account', link: '/' },
            { id: 4.2, name: 'Login / Register', link: '/' },
            { id: 4.3, name: 'Store Locator', link: '/' },
            { id: 4.4, name: 'Lookbook', link: '/' },
            { id: 4.5, name: 'Faq', link: '/' },
            { id: 4.6, name: 'Terms', link: '/' },
            { id: 4.7, name: '404 Error', link: '/' },
            { id: 4.8, name: 'Coming Soon', link: '/' },
        ]
    },
    { id: 5, name: 'About', link: '/' },
    { id: 6, name: 'Contact', link: '/' },
];

export const HeaderTools = [
    { id: 1, icon: <i className="icon user_icon ri-user-line"></i> },
    { id: 2, icon: <i className="icon heart_icon ri-heart-line"></i> },
    { id: 3, icon: <i className="icon shop_icon ri-shopping-bag-line"></i> },
];

export const SocialIcons = [
    { id: 1, icon: <i className="icon ri-facebook-fill"></i> },
    { id: 2, icon: <i className="icon ri-twitter-fill"></i> },
    { id: 3, icon: <i className="icon ri-youtube-fill"></i> },
    { id: 4, icon: <i className="icon ri-instagram-line"></i> },
    { id: 5, icon: <i className="icon ri-pinterest-fill"></i> },
];

export const HeroSliderContent = [
    {
        id: 1,
        title: 'New Trend',
        heading: 'Summer Sale Stylish',
        heading2: 'Womens',
        buttonText: 'Discover More',
        image: require('./img/slideshow-character1.webp'),
        backgroundPattern: require('./img/hero-slideshow-pattern.webp'),
        markupText: 'Summer',
    },
    {
        id: 2,
        title: 'Summer 2020',
        heading2: 'Hello New Season',
        description: 'Limited Time Offer - Up to 60% off & Free Shipping',
        buttonText: 'Discover More',
        image: require('./img/slideshow-character2.webp'),
        backgroundPattern: require('./img/hero-slideshow-pattern.webp'),
    },
];

export const CollectionSectionData = [
    {
        id: 1,
        boxClass: 'box_1',
        image: require('./img/collection-img1.jpg'),
        text: 'Hot List',
        heading: 'Collection',
        headingInner: 'Women',
    },
    {
        id: 2,
        boxClass: 'box_2',
        image: require('./img/collection-img2.jpg'),
        text: 'Hot List',
        heading: 'Collection',
        headingInner: 'Men',
    },
    {
        id: 3,
        boxClass: 'box_3',
        image: require('./img/collection-img3.jpg'),
        text: 'Hot List',
        heading: 'Collection',
        headingInner: 'Kids',
    },
    {
        id: 4,
        boxClass: 'box_4',
        heading: 'Cards',
        headingInner: 'E-Gift',
        description: 'Surprise someone with the gift they really want.',
    },
];

export const ProductCartData = [
    {
        id: 1,
        image: require('./img/product_1.webp'),
        heading: 'Cropped Faux Leather Jacket',
        price: 29,
        starIcons: [
            { id: 1-1, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-2, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-3, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-4, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-5, icon: <i className="star_icon ri-star-fill"></i>, },
        ],
        text: '8k+ reviews',
    },
    {
        id: 2,
        image: require('./img/product_2.webp'),
        heading: 'Calvin Shorts',
        price: 62,
        starIcons: [
            { id: 1-1, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-2, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-3, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-4, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-5, icon: <i className="star_icon ri-star-fill"></i>, },
        ],
    },
    {
        id: 3,
        image: require('./img/product_3.webp'),
        heading: 'Kirby T-Shirt',
        price: 17,
        starIcons: [
            { id: 1-1, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-2, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-3, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-4, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-5, icon: <i className="star_icon ri-star-fill"></i>, },
        ],
    },
    {
        id: 4,
        image: require('./img/product_4.webp'),
        heading: 'Cableknit Shawl',
        price: 99,
        starIcons: [
            { id: 1-1, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-2, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-3, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-4, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-5, icon: <i className="star_icon ri-star-fill"></i>, },
        ],
    },
    {
        id: 5,
        image: require('./img/product_5.webp'),
        heading: 'Colorful Jacket',
        price: 28,
        starIcons: [
            { id: 1-1, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-2, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-3, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-4, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-5, icon: <i className="star_icon ri-star-fill"></i>, },
        ],
    },
    {
        id: 6,
        image: require('./img/product_6.webp'),
        heading: 'Shirt In Botanical Cheetah Print',
        price: 64,
        starIcons: [
            { id: 1-1, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-2, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-3, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-4, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-5, icon: <i className="star_icon ri-star-fill"></i>, },
        ],
    },
    {
        id: 7,
        image: require('./img/product_7.webp'),
        heading: 'Cotton Jersey T-Shirt',
        price: 18,
        starIcons: [
            { id: 1-1, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-2, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-3, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-4, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-5, icon: <i className="star_icon ri-star-fill"></i>, },
        ],
    },
    {
        id: 8,
        image: require('./img/product_8.webp'),
        heading: 'Zessi Dresses',
        price: 118,
        starIcons: [
            { id: 1-1, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-2, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-3, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-4, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-5, icon: <i className="star_icon ri-star-fill"></i>, },
        ],
    },
];

export const BannerSectionData = [
    {
        id: 1,
        boxClass: 'banner_1',
        image: require('./img/banner_1.jpg'),
        text: 'STARTING AT $19',
        headingInner: "Women's T-Shirts",
    },
    {
        id: 2,
        boxClass: 'banner_2',
        image: require('./img/banner_2.jpg'),
        text: 'STARTING AT $39',
        headingInner: "Men's Sportswear",
    },
]

export const LimitedEditionData = [
    {
        id: 1,
        image: require('./img/limited-edition-img1.webp'),
        hoverImage: null,
        heading: 'Cushion Futon Slipcover',
        price: 62,
    },
    {
        id: 2,
        image: require('./img/limited-edition-img2.webp'),
        hoverImage: null,
        heading: 'Hosking Blue Area Rug',
        price: 29,
    },
    {
        id: 3,
        image: require('./img/limited-edition-img3.webp'),
        hoverImage: null,
        heading: 'Hub Accent Mirror',
        price: 17,
    },
    {
        id: 4,
        image: require('./img/limited-edition-img4.webp'),
        hoverImage: null,
        heading: 'Hub Accent Mirror',
        price: 78,
    },
    {
        id: 5,
        image: require('./img/limited-edition-img1.webp'),
        hoverImage: null,
        heading: 'Cushion Futon Slipcover',
        price: 62,
    },
    {
        id: 6,
        image: require('./img/limited-edition-img2.webp'),
        hoverImage: null,
        heading: 'Hosking Blue Area Rug',
        price: 29,
    },
    {
        id: 7,
        image: require('./img/limited-edition-img3.webp'),
        hoverImage: null,
        heading: 'Hub Accent Mirror',
        price: 17,
    },
];

export const InstagramSectionData = [
    { id: 1, image: require('./img/insta1.webp'), },
    { id: 2, image: require('./img/insta2.webp'), },
    { id: 3, image: require('./img/insta3.webp'), },
    { id: 4, image: require('./img/insta4.webp'), },
    { id: 5, image: require('./img/insta5.webp'), },
    { id: 6, image: require('./img/insta6.webp'), },
    { id: 7, image: require('./img/insta7.webp'), },
    { id: 8, image: require('./img/insta8.webp'), },
    { id: 9, image: require('./img/insta9.webp'), },
    { id: 10, image: require('./img/insta10.webp'), },
    { id: 11, image: require('./img/insta11.webp'), },
    { id: 12, image: require('./img/insta12.webp'), },
];

export const ServiceSectionData = [
    {
        id: 1,
        icon: <i className="icon ri-shopping-cart-2-line"></i>,
        heading: 'FAST AND FREE DELIVERY',
        description: 'Free delivery for all orders over $140',
    },
    {
        id: 2,
        icon: <i className="icon ri-headphone-line"></i>,
        heading: '24/7 CUSTOMER SUPPORT',
        description: 'Friendly 24/7 customer support',
    },
    {
        id: 3,
        icon: <i className="icon ri-shield-star-line"></i>,
        heading: 'MONEY BACK GUARANTEE',
        description: 'We return money within 30 days',
    },
]

export const FooterNavigationData = [
    {
        id: 1,
        heading: 'Company',
        NavigationItems: [
            { id: 1, name: 'About Us', },
            { id: 2, name: 'Careers', },
            { id: 3, name: 'Affiliates', },
            { id: 4, name: 'Blog', },
            { id: 5, name: 'Contact Us', },
        ]
    },
    {
        id: 2,
        heading: 'Shop',
        NavigationItems: [
            { id: 1, name: 'New Arrivals', },
            { id: 2, name: 'Accessories', },
            { id: 3, name: 'Men', },
            { id: 4, name: 'Women', },
            { id: 5, name: 'Shop All', },
        ]
    },
    {
        id: 3,
        heading: 'Help',
        NavigationItems: [
            { id: 1, name: 'Customer Service', },
            { id: 2, name: 'My Account', },
            { id: 3, name: 'Find a Store', },
            { id: 4, name: 'Legal & Privacy', },
            { id: 5, name: 'Contact', },
            { id: 6, name: 'Gift Card', }, // Updated id to 6
        ]
    },
];


export const PaymentLogos = [
    { id: 1, logo: require('./img/payment-logo1.png'), logoText: 'Discover Network Logo' },
    { id: 2, logo: require('./img/payment-logo2.png'), logoText: 'MasterCard Logo' },
    { id: 3, logo: require('./img/payment-logo3.png'), logoText: 'Paypal Logo' },
    { id: 4, logo: require('./img/payment-logo4.png'), logoText: 'Skrill Logo' },
    { id: 5, logo: require('./img/payment-logo5.png'), logoText: 'Visa Logo' },
];

export const LangCurrencyData = [
    {
        id: 1,
        heading: 'Language',
        selectTitle: 'United Kingdom | English',
        selectItems: [
            { id: 1-1, name: 'United Kingdom | English', value: '1', },
            { id: 1-2, name: 'United States | English', value: '2', },
            { id: 1-3, name: 'German', value: '3', },
            { id: 1-4, name: 'French', value: '4', },
            { id: 1-5, name: 'Swedish', value: '5', },
        ]
    },
    {
        id: 2,
        heading: 'Currency',
        selectTitle: '$ USD',
        selectItems: [
            { id: 1-1, name: '$ USD', value: '1', },
            { id: 1-2, name: '£ GBP', value: '2', },
            { id: 1-3, name: '€ EURO', value: '3', },
        ]
    },
];