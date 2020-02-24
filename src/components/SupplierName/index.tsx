import * as React from "react";
import { Container, FormRow, FormField, FormActions } from "./styled";
import { Input } from "../Shared/Input";
import { Button } from "../Shared/Button";

export const SupplierName = () => {
  return (
    <Container>
      <form onSubmit>
        <FormRow>
          <FormField>
            <label htmlFor="txtMoPO-SupplierName#1001">Name*</label>
            <Input
              id="txtMoPO-SupplierName#1001"
              name="txtMoPO-SupplierName#1001"
              type="text"
              placeholder="Enter Supplier Name"
            />
          </FormField>
          <FormField>
            <label htmlFor="txtMoPO-SupplierCode#1001">Code</label>
            <Input
              id="txtMoPO-SupplierCode#1001"
              name="txtMoPO-SupplierCode#1001"
              type="text"
              placeholder="Enter Supplier Code"
            />
          </FormField>
        </FormRow>

        <FormRow>
          <FormField>
            <label htmlFor="txtMoPO-SupplierCurrency#1001">Currency*</label>
            <select id="selMoPO-SupplierCurrency#1001" placeholder="Choose...">
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
            </select>
          </FormField>
          <FormField>
            <label htmlFor="txtMoPO-SupplierDiscount#1001">Discount</label>
            <Input
              id="txtMoPO-SupplierDiscount#1001"
              type="number"
              placeholder="Enter Discount %"
            />
          </FormField>
        </FormRow>

        <FormRow>
          <FormField>
            <label htmlFor="selMoPO-SupplierPayTerm#1001">Payment Term*</label>
            <select id="selMoPO-SupplierPayTerm#1001" placeholder="Choose...">
              <option value="long-term">Long-Term</option>
              <option value="short-term">Short-Term</option>
            </select>
          </FormField>
          <FormField>
            <label htmlFor="selMoPO-SupplierTaxRule#1001">Tax Rule*</label>
            <select id="selMoPO-SupplierTaxRule#1001" placeholder="Choose...">
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
            </select>
          </FormField>
        </FormRow>

        <FormRow>
          <FormField>
            <label htmlFor="txtMoPO-SupplierCarrier#1001">Carrier</label>
            <select id="txtMoPO-SupplierCarrier#1001" placeholder="Choose...">
              <option value="carrier-1">Carrier 1</option>
              <option value="carrier-2">Carrier 2</option>
            </select>
          </FormField>
          <FormField>
            <label htmlFor="txtMoPO-SupplierTaxNum#1001">Tax Number</label>
            <Input
              id="txtMoPO-SupplierTaxNum#1001"
              type="number"
              placeholder="Enter Tax Number"
            />
          </FormField>
        </FormRow>
        <FormRow>
          <label htmlFor="txtMoPO-SupplierNote#1001">Note</label>
          <textarea id="txtMoPO-SupplierNote#1001"></textarea>
        </FormRow>

        <FormActions>
          <Button type="submit">Save</Button>
          <Button>Cancel</Button>
        </FormActions>
      </form>
    </Container>
  );
};
