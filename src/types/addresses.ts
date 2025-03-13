// A single amount entry with (unit, quantity)
export interface AddressAmount {
    unit: string;       
    quantity: string;   
  }
  
  // Returned by GET /addresses/{address}
  export interface AddressDetail {
    address: string;             
    amount: AddressAmount[];     
    stake_address?: string;      
    type: string;                
    script: boolean;             
  }
  