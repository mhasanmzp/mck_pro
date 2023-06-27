using cdb from '../db/invoice';

service invoice {
entity invoice as projection on cdb.invoice;

  entity readData {
        id:Integer;
        amount:Integer;
    }
    entity writedata {
        id:Integer;
        amount:Integer;
    }
    entity deleteData {
        id:Integer;
        amount: Integer;
    }
}

// service showamount {
// entity amount as select from cdb.invoice{amount,quantity} where amount>5000;

//   // entity InvoiceDetails as select from db.invoice;            // Returns all fields of invoice entity.      // Returns a single field.
  

// action rejectIdoc(data : String) returns {Status : Integer};
// }