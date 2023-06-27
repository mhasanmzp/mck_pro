const express = require('express');
app = express()
const cds = require('@sap/cds')


class invoice extends cds.ApplicationService {

    async init() {
        const db = await cds.connect.to('db');

        const {invoice} = cds.entities ('cdb');

        this.on('READ','readData', async (req) => {
            
                let results = await SELECT.from(invoice);
                console.log(JSON.stringify(results));
                console.log("hello");
                return results;
            })
      
            this.on ('READ','writedata', async (req) => {
                // var { data } = req.data
                // let approvedata = JSON.parse(data)
                let approvedata = [
                    {
                        "id"         : 17,
                        "items"      : "Oranges" ,
                        "description": "Oranges are Riped",
                        "quantity"   : 11,
                        "amount"     : 100,
                    },
                    {
                        "id"     : 18,
                        "items"      : "Guava" ,
                        "description": "These are green",
                        "quantity"   : 10,
                        "amount"     : 12,
                    }
                    
                    ]

                    for(var i=0;i<approvedata.length;i++){
        
                        
                        await INSERT.into(invoice).columns (
                            'id', 'items', 'description', 'quantity','amount'
                        ) .values (
                            approvedata[i]['id'], approvedata[i].items,approvedata[i]['description'],approvedata[i]['quantity'],approvedata[i]['amount']
                        ) ;
                        }

                        let results =  await SELECT.from(invoice);
                    return results
                })
                this.on('READ','deleteData', async (req) => {
                    let del = await DELETE.from(invoice).where({"id":17}); 
                    let results =  await SELECT.from(invoice);
                    return results
                })
        await super.init();
                }
    }

module.exports = {invoice}