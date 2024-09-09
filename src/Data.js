
export const NavigationItems = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'Shop', link: '/shop' },
    { id: 3, name: 'Blog', link: '/blog' },
    { 
        id: 4, 
        name: 'Pages', 
        PagesInnerLink: [
            { id: 4.1, name: 'My Account', link: '/' },
            { id: 4.2, name: 'Login / Register', link: '/' },
            { id: 4.3, name: 'Store Locator', link: '/' },
            { id: 4.4, name: 'Lookbook', link: '/lookbook' },
            { id: 4.5, name: 'Faq', link: '/faq' },
            { id: 4.6, name: 'Terms', link: '/terms' },
            { id: 4.7, name: '404 Error', link: '/page-not-found' },
            { id: 4.8, name: 'Coming Soon', link: '/coming-soon' },
        ]
    },
    { id: 5, name: 'About', link: '/about' },
    { id: 6, name: 'Contact', link: '/contact' },
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
        boxClass: 'collection_box_1',
        image: require('./img/collection-img1.jpg'),
        text: 'Hot List',
        heading: 'Collection',
        headingInner: 'Women',
        route: 'shop/women',
    },
    {
        id: 2,
        boxClass: 'collection_box_2',
        image: require('./img/collection-img2.jpg'),
        text: 'Hot List',
        heading: 'Collection',
        headingInner: 'Men',
        route: 'shop/men',
    },
    {
        id: 3,
        boxClass: 'collection_box_3',
        image: require('./img/collection-img3.jpg'),
        text: 'Hot List',
        heading: 'Collection',
        headingInner: 'Kids',
        route: 'shop/kids',
    },
    {
        id: 4,
        boxClass: 'collection_box_4',
        heading: 'Cards',
        headingInner: 'E-Gift',
        description: 'Surprise someone with the gift they really want.',
        route: 'shop/gift',
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

export const LookbookData = [
    {
        id: 1,
        boxClass: 'lookbook_1',
        image: require('./img/banner_1.jpg'),
        text: 'STARTING AT $19',
        headingInner: "Women's T-Shirts",
    },
    {
        id: 2,
        boxClass: 'lookbook_2',
        image: require('./img/lookbook2.webp'),
        text: 'STARTING AT $39',
        headingInner: "Men's Sportswear",
    },
    {
        id: 3,
        boxClass: 'lookbook_3',
        image: require('./img/lookbook3.webp'),
        text: 'STARTING AT $21',
        headingInner: "Slim fit cotton shorts",
    },
    {
        id: 4,
        boxClass: 'lookbook_4',
        image: require('./img/lookbook4.webp'),
        text: 'STARTING AT $39',
        headingInner: "Knee-legth cotton shorts",
    },
    {
        id: 5,
        boxClass: 'lookbook_5',
        image: require('./img/lookbook5.webp'),
        text: 'STARTING AT $19',
        headingInner: "Canvas Trainers",
    },
    {
        id: 6,
        boxClass: 'lookbook_6',
        image: require('./img/lookbook6.webp'),
        text: 'STARTING AT $21',
        headingInner: "Branded Caps",
    },
];

export const TermsPageData = [
    {
        id: 1,
        heading: "Your use of this is governed by these terms of use",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
    {
        id: 2,
        heading: "Use of the content on this website",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
    {
        id: 3,
        heading: "How long will It take to get my package",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
    {
        id: 4,
        heading: "Will I receive the same product that see the picture",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
    {
        id: 5,
        heading: "Limitation of liability",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
    {
        id: 6,
        heading: "Governing Law & Jurisdiction",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
];

export const BlogPageData = [
    {
        id: 1,
        Image: require('./img/blog-1.webp'),
        Admin: 'By Admin',
        Date: 'April 05, 2023',
        Heading: 'Woman with good shoes is never be ugly place',
        Description: 'Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.',
        to: '/blog-detail',
        ButtonText: 'Continue Reading',
    },
    {
        id: 2,
        Image: require('./img/blog-2.webp'),
        Admin: 'By Admin',
        Date: 'April 05, 2023',
        Heading: 'Heaven upon heaven moveth every have.',
        Description: 'Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.',
        to: '/blog-detail',
        ButtonText: 'Continue Reading',
    },
    {
        id: 3,
        Image: require('./img/blog-3.webp'),
        Admin: 'By Admin',
        Date: 'April 05, 2023',
        Heading: "Tree doesn't good void, waters without created",
        Description: 'Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.',
        to: '/blog-detail',
        ButtonText: 'Continue Reading',
    },
    {
        id: 4,
        Image: require('./img/blog-4.webp'),
        Admin: 'By Admin',
        Date: 'April 05, 2023',
        Heading: 'Given Set was without from god divide rule Hath',
        Description: 'Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.',
        to: '/blog-detail',
        ButtonText: 'Continue Reading',
    },
    {
        id: 5,
        Image: require('./img/about-hero-img.webp'),
        Admin: 'By Admin',
        Date: 'April 05, 2023',
        Heading: 'Tree earth fowl given moveth deep lesser After',
        Description: 'Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.',
        to: '/blog-detail',
        ButtonText: 'Continue Reading',
    },
    {
        id: 6,
        Image: require('./img/blog-5.webp'),
        Admin: 'By Admin',
        Date: 'April 05, 2023',
        Heading: 'Us yielding Fish sea night night the said him two',
        Description: 'Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.',
        to: '/blog-detail',
        ButtonText: 'Continue Reading',
    },
];

export const BlogDetailReviewData = [
    {
        id: 1,
        name: 'Janice Miller',
        date: 'April 06, 2023',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est…',
        starIcons: [
            { id: 1-1, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-2, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-3, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-4, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-5, icon: <i className="star_icon ri-star-fill"></i>, },
        ],
    },
    {
        id: 2,
        name: 'Benjam Porter',
        date: 'April 23, 2023',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est…',
        starIcons: [
            { id: 1-1, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-2, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-3, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-4, icon: <i className="star_icon ri-star-fill"></i>, },
            { id: 1-5, icon: <i className="star_icon ri-star-fill"></i>, },
        ],
    },
];

export const SHOP_DATA = [
    {
      title: 'Hats',
      items: [
        {
          id: 1,
          name: 'Brown Brim',
          imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
          price: 25,
        },
        {
          id: 2,
          name: 'Blue Beanie',
          imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
          price: 18,
        },
        {
          id: 3,
          name: 'Brown Cowboy',
          imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
          price: 35,
        },
        {
          id: 4,
          name: 'Grey Brim',
          imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
          price: 25,
        },
        {
          id: 5,
          name: 'Green Beanie',
          imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
          price: 18,
        },
        {
          id: 6,
          name: 'Palm Tree Cap',
          imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
          price: 14,
        },
        {
          id: 7,
          name: 'Red Beanie',
          imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
          price: 18,
        },
        {
          id: 8,
          name: 'Wolf Cap',
          imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
          price: 14,
        },
        {
          id: 9,
          name: 'Blue Snapback',
          imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
          price: 16,
        },
      ],
    },
    {
      title: 'Sneakers',
      items: [
        {
          id: 10,
          name: 'Adidas NMD',
          imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
          price: 220,
        },
        {
          id: 11,
          name: 'Adidas Yeezy',
          imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
          price: 280,
        },
        {
          id: 12,
          name: 'Black Converse',
          imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
          price: 110,
        },
        {
          id: 13,
          name: 'Nike White AirForce',
          imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
          price: 160,
        },
        {
          id: 14,
          name: 'Nike Red High Tops',
          imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
          price: 160,
        },
        {
          id: 15,
          name: 'Nike Brown High Tops',
          imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          price: 160,
        },
        {
          id: 16,
          name: 'Air Jordan Limited',
          imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
          price: 190,
        },
        {
          id: 17,
          name: 'Timberlands',
          imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          price: 200,
        },
      ],
    },
    {
      title: 'Jackets',
      items: [
        {
          id: 18,
          name: 'Black Jean Shearling',
          imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
          price: 125,
        },
        {
          id: 19,
          name: 'Blue Jean Jacket',
          imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
          price: 90,
        },
        {
          id: 20,
          name: 'Grey Jean Jacket',
          imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
          price: 90,
        },
        {
          id: 21,
          name: 'Brown Shearling',
          imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
          price: 165,
        },
        {
          id: 22,
          name: 'Tan Trench',
          imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
          price: 185,
        },
      ],
    },
    {
      title: 'Womens',
      items: [
        {
          id: 23,
          name: 'Blue Tanktop',
          imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          price: 25,
        },
        {
          id: 24,
          name: 'Floral Blouse',
          imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
          price: 20,
        },
        {
          id: 25,
          name: 'Floral Dress',
          imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
          price: 80,
        },
        {
          id: 26,
          name: 'Red Dots Dress',
          imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
          price: 80,
        },
        {
          id: 27,
          name: 'Striped Sweater',
          imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          price: 45,
        },
        {
          id: 28,
          name: 'Yellow Track Suit',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          price: 135,
        },
        {
          id: 29,
          name: 'White Blouse',
          imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          price: 20,
        },
      ],
    },
    {
      title: 'Mens',
      items: [
        {
          id: 30,
          name: 'Camo Down Vest',
          imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
          price: 325,
        },
        {
          id: 31,
          name: 'Floral T-shirt',
          imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
          price: 20,
        },
        {
          id: 32,
          name: 'Black & White Longsleeve',
          imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
          price: 25,
        },
        {
          id: 33,
          name: 'Pink T-shirt',
          imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
          price: 25,
        },
        {
          id: 34,
          name: 'Jean Long Sleeve',
          imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
          price: 40,
        },
        {
          id: 35,
          name: 'Burgundy T-shirt',
          imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
          price: 25,
        },
      ],
    },
];

export const FaqData = [
  {
      category: "Orders",
      questions: [
          {
              id: 1,
              question: "Bring of had which their whose you're it own?",
              answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
          },
          {
              id: 2,
              question: "Over shall air can't subdue fly divide him?",
              answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
          },
          {
              id: 3,
              question: "Waters one you'll creeping?",
              answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
          }
      ]
  },
  {
      category: "Shipping",
      questions: [
          {
              id: 1,
              question: "Bring of had which their whose you're it own?",
              answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          },
          {
              id: 2,
              question: "Over shall air can't subdue fly divide him?",
              answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          },
          {
              id: 3,
              question: "Waters one you'll creeping?",
              answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
      ]
  },
  {
      category: "Payment",
      questions: [
          {
              id: 1,
              question: "Bring of had which their whose you're it own?",
              answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          },
          {
              id: 2,
              question: "Over shall air can't subdue fly divide him?",
              answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          },
          {
              id: 3,
              question: "Waters one you'll creeping?",
              answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
      ]
  }
];