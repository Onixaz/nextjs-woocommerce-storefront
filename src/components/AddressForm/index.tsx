import React from 'react'
import * as AddressFormStyles from './styled'
import { countries } from './countryList'
import { Subtitle } from '../../styles/utils'

interface AddressFormProps {
  register: any
  errors: any
}

const AddressForm: React.FC<AddressFormProps> = ({ register, errors }) => {
  return (
    <>
      <AddressFormStyles.RowBlock>
        <AddressFormStyles.FieldWrapper>
          <AddressFormStyles.Label>First name</AddressFormStyles.Label>
          <AddressFormStyles.Input name="first_name" ref={register({ required: true })} />
          {errors.first_name && (
            <AddressFormStyles.Error>This field is required</AddressFormStyles.Error>
          )}
        </AddressFormStyles.FieldWrapper>
        <AddressFormStyles.FieldWrapper>
          <AddressFormStyles.Label>Last name</AddressFormStyles.Label>
          <AddressFormStyles.Input name="last_name" ref={register({ required: true })} />
          {errors.last_name && (
            <AddressFormStyles.Error>This field is required</AddressFormStyles.Error>
          )}
        </AddressFormStyles.FieldWrapper>
      </AddressFormStyles.RowBlock>

      <AddressFormStyles.FieldWrapper>
        <AddressFormStyles.Label>Company (optional)</AddressFormStyles.Label>
        <AddressFormStyles.Input name="company" ref={register} />
      </AddressFormStyles.FieldWrapper>

      <AddressFormStyles.FieldWrapper>
        <AddressFormStyles.Label>Country</AddressFormStyles.Label>
        <select
          onChange={(e) => console.log(e.target.value)}
          style={{ margin: '0.25rem 1rem', padding: '0.5rem', fontSize: 'calc(0.9rem + 0.1vw)' }}
          name="country"
          ref={register}
        >
          {' '}
          {countries.map((country: string, index: number) => {
            return (
              <React.Fragment key={index}>
                <option value={country}>{country}</option>
              </React.Fragment>
            )
          })}
        </select>
        {/* <CountryList register={register} /> */}
      </AddressFormStyles.FieldWrapper>

      <AddressFormStyles.FieldWrapper>
        <AddressFormStyles.Label>Street address</AddressFormStyles.Label>
        <AddressFormStyles.Input name="address_1" ref={register({ required: true })} />
        {errors.address_1 && (
          <AddressFormStyles.Error>This field is required</AddressFormStyles.Error>
        )}
      </AddressFormStyles.FieldWrapper>

      <AddressFormStyles.FieldWrapper>
        <AddressFormStyles.Label>Street address 2 (optional) </AddressFormStyles.Label>
        <AddressFormStyles.Input name="address_2" ref={register} />
      </AddressFormStyles.FieldWrapper>

      <AddressFormStyles.FieldWrapper>
        <AddressFormStyles.Label>Town / City</AddressFormStyles.Label>
        <AddressFormStyles.Input name="city" ref={register({ required: true })} />
        {errors.city && <AddressFormStyles.Error>This field is required</AddressFormStyles.Error>}
      </AddressFormStyles.FieldWrapper>

      <AddressFormStyles.FieldWrapper>
        <AddressFormStyles.Label>State / County</AddressFormStyles.Label>
        <AddressFormStyles.Input name="state" ref={register({ required: true })} />
        {errors.state && <AddressFormStyles.Error>This field is required</AddressFormStyles.Error>}
      </AddressFormStyles.FieldWrapper>

      <AddressFormStyles.FieldWrapper>
        <AddressFormStyles.Label>Postcode / ZIP</AddressFormStyles.Label>
        <AddressFormStyles.Input name="postcode" ref={register({ required: true })} />
        {errors.postcode && (
          <AddressFormStyles.Error>This field is required</AddressFormStyles.Error>
        )}
      </AddressFormStyles.FieldWrapper>

      <AddressFormStyles.FieldWrapper>
        <AddressFormStyles.Label>Phone</AddressFormStyles.Label>
        <AddressFormStyles.Input name="phone" ref={register({ required: true })} />
        {errors.phone && <AddressFormStyles.Error>This field is required</AddressFormStyles.Error>}
      </AddressFormStyles.FieldWrapper>

      <AddressFormStyles.FieldWrapper>
        <AddressFormStyles.Label>Email address</AddressFormStyles.Label>
        <AddressFormStyles.Input
          name="email"
          ref={register({
            required: 'This field is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && <AddressFormStyles.Error>{errors.email.message}</AddressFormStyles.Error>}
      </AddressFormStyles.FieldWrapper>
      <AddressFormStyles.ShippingBlock>
        <AddressFormStyles.Input type="checkbox" readOnly checked />
        <AddressFormStyles.Label>Shipping addess same as billing addess</AddressFormStyles.Label>
      </AddressFormStyles.ShippingBlock>
      <Subtitle>Additional Information</Subtitle>
      <AddressFormStyles.FieldWrapper>
        <AddressFormStyles.Label>Order notes (optional) </AddressFormStyles.Label>
        <AddressFormStyles.CustomerNote
          name="customer_note"
          placeholder="Notes about your order, e.g. special notes for delivery."
          ref={register}
        />
      </AddressFormStyles.FieldWrapper>
    </>
  )
}

export default AddressForm
