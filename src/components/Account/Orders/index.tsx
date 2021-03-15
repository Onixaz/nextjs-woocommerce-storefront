import React from 'react'
import useSWR from 'swr'
import { Order } from '../../../types'

const AccountOrders: React.FC = () => {
  const { data } = useSWR('/api/orders/retrieve')
  console.log(data)
  return (
    <div>
      <ul>
        {data?.map((item: Order) => {
          return (
            <li>
              <span>
                {item.id} {item.date_created} {item.status} {item.total}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AccountOrders
