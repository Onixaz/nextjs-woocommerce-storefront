# Next.js WooCommerce Storefront Theme 
Using Next.js, TypeScript and Styled-components. 

## The Goal

The idea behind this repo was to showcase the power of Next.js by building a frontend for WooCommerce using nothing but Woo's REST API only. This means truly headless Woo without any redirects for checkouts etc. I also wanted to create a reusable base for the development of Wordpress/WooCommerce themes using React with server-side rendering. 

## Features
* WooCommerce Storefront theme inspired responsive design.
* Static generation using getStaticProps and getStaticPaths.
* WooCommerce REST APi abstraction using Next's API routes.
* Cart system using CoCart plugin.
* Checkout system using Stripe as a payment method example.




## How to use

Install required plugins:
* WooCommerce (obviously)
* [Cocart Lite](https://wordpress.org/plugins/cart-rest-api-for-woocommerce) 

Change Permalinks to "Post Name (Settings -> Permalinks).
Generate Consumer Key and Secret for REST API with Read/Write permissions (WooCommerce -> Settings -> Advanced -> REST API). This authentication method requires HTTPS. 

You'll need to import some products. For testing you can use sample data from Woo https://docs.woocommerce.com/document/importing-woocommerce-sample-data/ just like I did.

To test in-app payments you'll need to register a Stripe account for the publishable key and secret. (https://stripe.com/docs/keys) 

Next clone this repo, cd into it and npm install.

Create .env.local file in the root of the project. 

It should consist of 


``` NEXT_PUBLIC_WOO_API_URL=your-wordpress-api-url
WOO_CONSUMER_KEY=your-generated-consumer-key
WOO_CONSUMER_SECRET=your-generated-consumer-secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=stripe-publishable-key
STRIPE_SECRET_KEY=stripe-publishable-key
```

Finally npm run dev.

Note: In case you're not getting a x-cocart-api key, allow all cross origin headers using [https://github.com/co-cart/co-cart-tweaks](https://github.com/co-cart/co-cart-tweaks)

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

##### Contributions are welcome

MIT License
