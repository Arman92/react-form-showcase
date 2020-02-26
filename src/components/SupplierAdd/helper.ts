import * as yup from 'yup';

import { Supplier } from '../../models/supplier';

export const defaultFormValues: Supplier = {
  name: '',
  code: '',
  currency: '',
  discount: 0,
  paymentTerm: '',
  taxRule: '',
  carrier: '',
  taxNumber: 0,
  note: '',
};

// Validation Schema for Supplier Form
export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(3, 'Name min length is 3 characters')
    .max(512, 'Name Max Length is 512 Characters'),
  code: yup.string().max(32, 'Code Max Length is 32 Characters'),
  currency: yup.string().required('Currency Is Required'),
  discount: yup
    .number()
    .min(0, 'Discount can not be negative')
    .max(99.99, 'Discount can not exceed 99.99%'),
  paymentTerm: yup.string().required('Payment Term Is Required'),
  taxRule: yup.string().required('Tax Rule Is Required'),
  taxNumber: yup.string().max(32, 'Tax Number Max Length is 32 Characters'),
  note: yup.string().max(1024, 'Note Max Length is 1024 Characters'),
});
