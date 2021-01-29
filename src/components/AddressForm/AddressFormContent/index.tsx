import React from 'react'
import {
  RowBlock,
  FieldWrapper,
  BasicLabel,
  BasicInput,
  CustomerNote,
  ShippingBlock,
} from './AddressFormElements'
import CountryList from '../CountryList'
import { Subtitle } from '../../../styles/Global/utils'

interface AddressFormProps {
  register: any
  errors: any
}

const AddressFormContent: React.FC<AddressFormProps> = ({ register, errors }) => {
  return (
    <>
      <RowBlock>
        <FieldWrapper>
          <BasicLabel>First name</BasicLabel>
          <BasicInput name="first_name" ref={register({ required: true })} />
          {errors.first_name && <span>This field is required</span>}
        </FieldWrapper>
        <FieldWrapper>
          <BasicLabel>Last name</BasicLabel>
          <BasicInput name="last_name" ref={register({ required: true })} />
          {errors.last_name && <span>This field is required</span>}
        </FieldWrapper>
      </RowBlock>

      <FieldWrapper>
        <BasicLabel>Company (optional)</BasicLabel>
        <BasicInput name="company" ref={register} />
      </FieldWrapper>

      <FieldWrapper>
        <BasicLabel>Country</BasicLabel>
        <CountryList register={register} />
      </FieldWrapper>

      <FieldWrapper>
        <BasicLabel>Street address</BasicLabel>
        <BasicInput name="address_1" ref={register({ required: true })} />
        {errors.address_1 && <span>This field is required</span>}
      </FieldWrapper>

      <FieldWrapper>
        <BasicLabel>Street address 2 (optional) </BasicLabel>
        <BasicInput name="address_2" ref={register} />
        {errors.address_1 && <span>This field is required</span>}
      </FieldWrapper>

      <FieldWrapper>
        <BasicLabel>Town / City</BasicLabel>
        <BasicInput name="city" ref={register({ required: true })} />
        {errors.address_1 && <span>This field is required</span>}
      </FieldWrapper>

      <FieldWrapper>
        <BasicLabel>State / County</BasicLabel>
        <BasicInput name="state" ref={register({ required: true })} />
        {errors.address_1 && <span>This field is required</span>}
      </FieldWrapper>

      <FieldWrapper>
        <BasicLabel>Postcode / ZIP</BasicLabel>
        <BasicInput name="postcode" ref={register({ required: true })} />
        {errors.address_1 && <span>This field is required</span>}
      </FieldWrapper>

      <FieldWrapper>
        <BasicLabel>Phone</BasicLabel>
        <BasicInput name="phone" ref={register({ required: true })} />
        {errors.address_1 && <span>This field is required</span>}
      </FieldWrapper>

      <FieldWrapper>
        <BasicLabel>Email address</BasicLabel>
        <BasicInput name="email" ref={register({ required: true })} />
        {errors.address_1 && <span>This field is required</span>}
      </FieldWrapper>
      <ShippingBlock>
        <BasicInput type="checkbox" readOnly checked />
        <BasicLabel>Shipping addess same as billing addess</BasicLabel>
      </ShippingBlock>
      <Subtitle>Additional Information</Subtitle>
      <FieldWrapper>
        <BasicLabel>Order notes (optional) </BasicLabel>
        <CustomerNote name="customer_note" ref={register} />
      </FieldWrapper>
    </>
  )
}

export default AddressFormContent
