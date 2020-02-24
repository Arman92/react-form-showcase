export type SupplierName = {
  name: string;
  code: string;
  currency: '' | 'usd' | 'eur';
  discount: number | null;
  paymentTerm: '' | 'long-term' | 'short-term';
  taxRule: string;
  carrier: string;
  taxNumber: number | null;
  note: string;
};
