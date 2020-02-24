import React, { useState, useEffect } from 'react';
import * as yup from 'yup';

import { Container, FormRow, FormField, FormActions } from './styled';
import { Input } from '../Shared/Input';
import { Button } from '../Shared/Button';
import { Select } from '../Shared/Select';
import { SupplierName } from '../../models/supplier-name';

const defaultFormValues: SupplierName = {
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

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
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

export const SupplierNameDialog = () => {
  const [values, setValues] = useState<SupplierName>(defaultFormValues);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const field = e.target.dataset.field ?? '';

    setValues({ ...values, [field]: e.target.value });
  };

  const handleBlurEvent = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const field = e.target.dataset.field ?? '';

    setTouched({ ...touched, [field]: true });
  };

  const handleCancelClick = () => {
    setValues(defaultFormValues);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  // Validate the form for errors
  useEffect(() => {
    validationSchema
      .validate(values, { abortEarly: false })
      .then(a => {
        setErrors({});
        setIsValid(true);
      })
      .catch((root: yup.ValidationError) => {
        // Iterate over the errors to extract only the needed data (field name and error desc).
        let newErrors: { [key: string]: string } = {};

        for (let error of root.inner) {
          newErrors[error.path] = error.message;
        }
        setErrors(newErrors);
        setIsValid(false);
      });
  }, [values]);

  return (
    <Container>
      <form onSubmit={handleFormSubmit}>
        <FormRow>
          <FormField>
            <label htmlFor="txtMoPO-SupplierName#1001">Name*</label>
            <Input
              id="txtMoPO-SupplierName#1001"
              name="txtMoPO-SupplierName#1001"
              type="text"
              placeholder="Enter Supplier Name"
              data-field="name"
              value={values['name'] ?? ''}
              className={errors.name && touched.name ? 'input-error' : ''}
              onChange={handleInputChange}
              onBlur={handleBlurEvent}
            />
          </FormField>
          <FormField>
            <label htmlFor="txtMoPO-SupplierCode#1001">Code</label>
            <Input
              id="txtMoPO-SupplierCode#1001"
              name="txtMoPO-SupplierCode#1001"
              type="text"
              placeholder="Enter Supplier Code"
              data-field="code"
              value={values['code'] ?? ''}
              className={errors.code && touched.code ? 'input-error' : ''}
              onChange={handleInputChange}
              onBlur={handleBlurEvent}
            />
          </FormField>
        </FormRow>

        <FormRow>
          <FormField>
            <label htmlFor="txtMoPO-SupplierCurrency#1001">Currency*</label>
            <Select
              id="selMoPO-SupplierCurrency#1001"
              value={values['currency']}
              data-field="currency"
              className={errors.currency && touched.currency ? 'input-error' : ''}
              onChange={handleInputChange}
              onBlur={handleBlurEvent}>
              <option value="" disabled>
                Choose...
              </option>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
            </Select>
          </FormField>
          <FormField>
            <label htmlFor="txtMoPO-SupplierDiscount#1001">Discount</label>
            <Input
              id="txtMoPO-SupplierDiscount#1001"
              type="number"
              step="0.01"
              placeholder="Enter Discount %"
              data-field="discount"
              value={values['discount'] ?? ''}
              className={errors.discount && touched.discount ? 'input-error' : ''}
              onChange={handleInputChange}
              onBlur={handleBlurEvent}
            />
          </FormField>
        </FormRow>

        <FormRow>
          <FormField>
            <label htmlFor="selMoPO-SupplierPayTerm#1001">Payment Term*</label>
            <Select
              id="selMoPO-SupplierPayTerm#1001"
              value={values['paymentTerm']}
              data-field="paymentTerm"
              className={errors.paymentTerm && touched.paymentTerm ? 'input-error' : ''}
              onChange={handleInputChange}
              onBlur={handleBlurEvent}>
              <option value="" disabled>
                Choose...
              </option>
              <option value="long-term">Long-Term</option>
              <option value="short-term">Short-Term</option>
            </Select>
          </FormField>
          <FormField>
            <label htmlFor="selMoPO-SupplierTaxRule#1001">Tax Rule*</label>
            <Select
              id="selMoPO-SupplierTaxRule#1001"
              value={values['taxRule']}
              data-field="taxRule"
              className={errors.taxRule && touched.taxRule ? 'input-error' : ''}
              onChange={handleInputChange}
              onBlur={handleBlurEvent}>
              <option value="" disabled>
                Choose...
              </option>
              <option value="rule1">Rule 1</option>
              <option value="rule2">Rule 2</option>
            </Select>
          </FormField>
        </FormRow>

        <FormRow>
          <FormField>
            <label htmlFor="txtMoPO-SupplierCarrier#1001">Carrier</label>
            <Select
              id="txtMoPO-SupplierCarrier#1001"
              value={values['carrier']}
              data-field="carrier"
              className={errors.carrier && touched.carrier ? 'input-error' : ''}
              onChange={handleInputChange}
              onBlur={handleBlurEvent}>
              <option value="" disabled>
                Choose...
              </option>
              <option value="carrier-1">Carrier 1</option>
              <option value="carrier-2">Carrier 2</option>
            </Select>
          </FormField>
          <FormField>
            <label htmlFor="txtMoPO-SupplierTaxNum#1001">Tax Number</label>
            <Input
              id="txtMoPO-SupplierTaxNum#1001"
              type="number"
              placeholder="Enter Tax Number"
              data-field="taxNumber"
              className={errors.taxNumber && touched.taxNumber ? 'input-error' : ''}
              value={values['taxNumber'] ?? ''}
              onChange={handleInputChange}
              onBlur={handleBlurEvent}
            />
          </FormField>
        </FormRow>

        <FormRow>
          <FormField>
            <label htmlFor="txtMoPO-SupplierNote#1001">Note</label>
            <textarea
              id="txtMoPO-SupplierNote#1001"
              data-field="note"
              value={values['note'] ?? ''}
              className={errors.note && touched.note ? 'input-error' : ''}
              style={{ flex: 1 }}
              onChange={handleInputChange}
              onBlur={handleBlurEvent}></textarea>
          </FormField>
        </FormRow>

        <FormActions>
          <Button type="button" className="btn btn-orange btn-small btn-fill" onClick={handleCancelClick}>
            Cancel
          </Button>
          <Button type="submit" className="btn btn-blue btn-small btn-fill" disabled={!isValid}>
            Save
          </Button>
        </FormActions>
      </form>
    </Container>
  );
};
