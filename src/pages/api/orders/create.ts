import { poster } from '../../../utils/functions'

const dummyData = {
  payment_method: 'cod',
  payment_method_title: 'Cash on Delivery',
  set_paid: false,
  billing: {
    first_name: 'John',
    last_name: 'Doe',
    address_1: '969 Market',
    address_2: '',
    city: 'San Francisco',
    state: 'CA',
    postcode: '94103',
    country: 'US',
    email: 'john.doe@example.com',
    phone: '(555) 555-5555',
  },
  shipping: {
    first_name: 'John',
    last_name: 'Doe',
    address_1: '969 Market',
    address_2: '',
    city: 'San Francisco',
    state: 'CA',
    postcode: '94103',
    country: 'US',
  },
  line_items: [
    {
      product_id: 58,
      quantity: 2,
    },
    {
      product_id: 59,
      quantity: 1,
    },
  ],
  shipping_lines: [
    {
      method_id: 'flat_rate',
      method_title: 'Flat Rate',
      total: '10.00',
    },
  ],
}

const apiKey = process.env.WOO_CONSUMER_KEY
const apiSecret = process.env.WOO_CONSUMER_SECRET

export default (req: any, res: any) => {
  poster('https://elementor.local/wp-json/wc/v3/orders', apiKey!, apiSecret!, dummyData)
    .then((response) => response.json())
    .then((data) => res.status(200).json({ text: data }))
}
