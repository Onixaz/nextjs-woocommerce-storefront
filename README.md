# Next.js WooCommerce Storefront Theme 
Using Next.js, TypeScript and Styled-components.

#### *Under development*

![demo](https://github.com/Onixaz/nextjs-woocommerce-storefront/blob/main/public/demo.gif)




## The Goal

The idea behind this repo was to showcase the power of Next.js by building a frontend for WooCommerce using nothing but Woo's REST API only. This means truly headless Woo without any redirects for checkouts etc. I also wanted to create a reusable base for the development of Wordpress/WooCommerce themes using React with server-side rendering.




## Features
* WooCommerce Storefront theme inspired responsive design.
* Static generation using getStaticProps and getStaticPaths.
* WooCommerce REST API abstraction using Next's API routes (serverless functions).
* Cart system using CoCart plugin.
* Checkout system using Stripe as a payment method example.


## Demo



Live demo: https://nextjs-woo-storefront.netlify.app/


## How to use

Install required plugins on your Wordpress:
* [WooCommerce](https://wordpress.org/plugins/woocommerce/) (obviously)
* [JWT Authentication for WP REST API](https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)
* [Cocart Lite](https://wordpress.org/plugins/cart-rest-api-for-woocommerce)
* [Password Reset with Code for WordPress REST API](https://wordpress.org/plugins/bdvs-password-reset/) (to be implemented)

Change Permalinks to "Post Name (Settings -> Permalinks). Also make sure your "JWT Authentication for WP REST API" plugin is configured correctly. 


You'll need to import some products. For testing you can use sample data from Woo https://docs.woocommerce.com/document/importing-woocommerce-sample-data/ just like I did.

To test in-app payments you'll need to register a Stripe account for the publishable key and secret. (https://stripe.com/docs/keys) 

**Next clone this repo, cd into it and npm install.**

Create **.env.local** file in the root of the project. 

It should consist of 


``` 
NEXT_PUBLIC_WOO_API_URL=https://example.com
WP_JWT_AUTH_SECRET_KEY=your-random-secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
STRIPE_SECRET_KEY=your-stripe-secret-key

```

Note that NEXT_PUBLIC_WOO_API_URL and NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY should have NEXT_PUBLIC prefix, since these variables need to be exposed to the browser. 

WP_JWT_AUTH_SECRET_KEY which will be used to sign jwt should match the one you define in wp-config.php when configuring "JWT Authentication for WP REST API" plugin.

Finally **npm run dev.**

Note: In case you're not getting the **x-cocart-api key** (which is stored in local storage) from a Wordpress response headers, allow all cross origin headers using [https://github.com/co-cart/co-cart-tweaks](https://github.com/co-cart/co-cart-tweaks)

##  Todo

* Client side fetching for dynamic data like prices / account page. 
* Pages for categories
* Variable products
* Shipping options
* User registration
* Coupons system
* Blog / About/Contact Pages
* More payment methods
* Code cleanup / refactor
* Tests

#### Contributions are welcome

MIT License
