import React, { useState, useEffect, FC } from 'react';
import * as yup from 'yup';

import { Container, FormRow, FormField, FormActions } from './styled';
import { Input } from '../Shared/Input';
import { Button } from '../Shared/Button';
import { Select } from '../Shared/Select';
import { Supplier } from '../../models/supplier';
import { defaultFormValues, validationSchema } from './helper';

type Props = {
  // Will be get called when use submits the (valid) form.
  onFormSubmitted?: (formValues: Supplier) => void;
};

export const SupplierAdd: FC<Props> = ({ onFormSubmitted }: Props) => {
  const [values, setValues] = useState<Supplier>(defaultFormValues); //      Form values
  const [errors, setErrors] = useState<{ [key: string]: string }>({}); //    Form validation errors
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({}); // Form elements 'touched' status
  const [isValid, setIsValid] = useState(false); //                          Flag to determine if form values are valid

  // Handles form elements value change, it shall update the form values according to user input.
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const field = e.target.dataset.field ?? '';

    setValues({ ...values, [field]: e.target.value });
  };

  // Handles form elements blur change to determine if the field has been touched by user.
  const handleBlurEvent = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const field = e.target.dataset.field ?? '';

    setTouched({ ...touched, [field]: true });
  };

  // Handles cancel button click, resets the form to initial values.
  const handleCancelClick = () => {
    setValues(defaultFormValues);
  };

  // Handle form submission, for now it doesn't do anything/
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isValid) {
      // Form is valid, if the parent component has provided 'onFormSubmitted' callback, let's invoke it.
      if (onFormSubmitted) onFormSubmitted(values);
    } else {
      for (const key of Object.keys(values)) {
        touched[key] = true;

        setTouched({ ...touched });
      }
    }
  };

  // Validate the form for errors every time user changes the form values.
  useEffect(() => {
    validationSchema
      .validate(values, { abortEarly: false })
      .then(() => {
        setErrors({});
        setIsValid(true);
      })
      .catch((root: yup.ValidationError) => {
        // Iterate over the errors to extract only the needed data (field name and error desc).
        const newErrors: { [key: string]: string } = {};

        for (const error of root.inner) {
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
            <div>
              <label htmlFor="txtMoPO-SupplierName#1001">Name*</label>
              <Input
                id="txtMoPO-SupplierName#1001"
                name="txtMoPO-SupplierName#1001"
                type="text"
                placeholder="Enter Supplier Name"
                data-field="name"
                value={values.name ?? ''}
                className={errors.name && touched.name ? 'input-error' : ''}
                onChange={handleInputChange}
                onBlur={handleBlurEvent}
              />
            </div>
            {touched.name && errors.name ? <span className="error-message">{errors.name}</span> : null}
          </FormField>
          <FormField>
            <div>
              <label htmlFor="txtMoPO-SupplierCode#1001">Code</label>
              <Input
                id="txtMoPO-SupplierCode#1001"
                name="txtMoPO-SupplierCode#1001"
                type="text"
                placeholder="Enter Supplier Code"
                data-field="code"
                value={values.code ?? ''}
                className={errors.code && touched.code ? 'input-error' : ''}
                onChange={handleInputChange}
                onBlur={handleBlurEvent}
              />
            </div>
            {touched.code && errors.code ? <span className="error-message">{errors.code}</span> : null}
          </FormField>
        </FormRow>

        <FormRow>
          <FormField>
            <div>
              <label htmlFor="txtMoPO-SupplierCurrency#1001">Currency*</label>
              <Select
                id="selMoPO-SupplierCurrency#1001"
                value={values.currency}
                data-field="currency"
                className={errors.currency && touched.currency ? 'input-error' : ''}
                onChange={handleInputChange}
                onBlur={handleBlurEvent}>
                <option value="" disabled={true}>
                  Choose...
                </option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
              </Select>
            </div>
            {touched.currency && errors.currency ? <span className="error-message">{errors.currency}</span> : null}
          </FormField>
          <FormField>
            <div>
              <label htmlFor="txtMoPO-SupplierDiscount#1001">Discount</label>
              <Input
                id="txtMoPO-SupplierDiscount#1001"
                type="number"
                step="0.01"
                placeholder="Enter Discount %"
                data-field="discount"
                value={values.discount ?? ''}
                className={errors.discount && touched.discount ? 'input-error' : ''}
                onChange={handleInputChange}
                onBlur={handleBlurEvent}
              />
            </div>
            {touched.discount && errors.discount ? <span className="error-message">{errors.discount}</span> : null}
          </FormField>
        </FormRow>

        <FormRow>
          <FormField>
            <div>
              <label htmlFor="selMoPO-SupplierPayTerm#1001">Payment Term*</label>
              <Select
                id="selMoPO-SupplierPayTerm#1001"
                value={values.paymentTerm}
                data-field="paymentTerm"
                className={errors.paymentTerm && touched.paymentTerm ? 'input-error' : ''}
                onChange={handleInputChange}
                onBlur={handleBlurEvent}>
                <option value="" disabled={true}>
                  Choose...
                </option>
                <option value="long-term">Long-Term</option>
                <option value="short-term">Short-Term</option>
              </Select>
            </div>
            {touched.paymentTerm && errors.paymentTerm ? (
              <span className="error-message">{errors.paymentTerm}</span>
            ) : null}
          </FormField>
          <FormField>
            <div>
              <label htmlFor="selMoPO-SupplierTaxRule#1001">Tax Rule*</label>
              <Select
                id="selMoPO-SupplierTaxRule#1001"
                value={values.taxRule}
                data-field="taxRule"
                className={errors.taxRule && touched.taxRule ? 'input-error' : ''}
                onChange={handleInputChange}
                onBlur={handleBlurEvent}>
                <option value="" disabled={true}>
                  Choose...
                </option>
                <option value="rule1">Rule 1</option>
                <option value="rule2">Rule 2</option>
              </Select>
            </div>
            {touched.taxRule && errors.taxRule ? <span className="error-message">{errors.taxRule}</span> : null}
          </FormField>
        </FormRow>

        <FormRow>
          <FormField>
            <div>
              <label htmlFor="txtMoPO-SupplierCarrier#1001">Carrier</label>
              <Select
                id="txtMoPO-SupplierCarrier#1001"
                value={values.carrier}
                data-field="carrier"
                className={errors.carrier && touched.carrier ? 'input-error' : ''}
                onChange={handleInputChange}
                onBlur={handleBlurEvent}>
                <option value="" disabled={true}>
                  Choose...
                </option>
                <option value="carrier-1">Carrier 1</option>
                <option value="carrier-2">Carrier 2</option>
              </Select>
            </div>
            {touched.carrier && errors.carrier ? <span className="error-message">{errors.carrier}</span> : null}
          </FormField>
          <FormField>
            <div>
              <label htmlFor="txtMoPO-SupplierTaxNum#1001">Tax Number</label>
              <Input
                id="txtMoPO-SupplierTaxNum#1001"
                type="number"
                placeholder="Enter Tax Number"
                data-field="taxNumber"
                className={errors.taxNumber && touched.taxNumber ? 'input-error' : ''}
                value={values.taxNumber ?? ''}
                onChange={handleInputChange}
                onBlur={handleBlurEvent}
              />
            </div>
            {touched.taxNumber && errors.taxNumber ? <span className="error-message">{errors.taxNumber}</span> : null}
          </FormField>
        </FormRow>

        <FormRow>
          <FormField>
            <div>
              <label htmlFor="txtMoPO-SupplierNote#1001">Note</label>
              <textarea
                id="txtMoPO-SupplierNote#1001"
                data-field="note"
                value={values.note ?? ''}
                className={errors.note && touched.note ? 'input-error' : ''}
                style={{ flex: 1 }}
                onChange={handleInputChange}
                onBlur={handleBlurEvent}
              />
            </div>
            {touched.note && errors.note ? <span className="error-message">{errors.note}</span> : null}
          </FormField>
        </FormRow>

        <FormActions>
          <Button type="button" className="btn btn-orange btn-small btn-fill" onClick={handleCancelClick}>
            Cancel
          </Button>
          <Button type="submit" className="btn btn-blue btn-small btn-fill">
            Save
          </Button>
        </FormActions>
      </form>
    </Container>
  );
};
