const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {

    let { Books, Readers, Authors, Booking } = this.entities;

    this.before('NEW', 'Books', async (req) => {
        const { maxID } = await SELECT.one`max(bookID) as maxID`.from(Books);
        req.data.bookID = maxID + 1;
    });

    this.before('NEW', 'Readers', async (req) => {
        const { maxID } = await SELECT.one`max(readerID) as maxID`.from(Readers);
        req.data.readerID = maxID + 1;
    });

    this.before('NEW', 'Authors', async (req) => {
        const { maxID } = await SELECT.one`max(authorID) as maxID`.from(Authors);
        req.data.authorID = maxID + 1;
    });

    this.before('NEW', 'Booking', async (req) => {
        const { maxID } = await SELECT.one`max(bookingID) as maxID`.from(Booking);
        req.data.bookingID = maxID + 1;
    });

    this.on('returnTheBook', 'Booking', async (req) => {
        const { bookingUUID } = req.params[0];
        return UPDATE(Booking, bookingUUID).with({
            bookingStatus_ID: '1',
            endDate: (new Date).toISOString().slice(0, 10),
            endTime: (new Date).toISOString().slice(11, 19)
        });
    });

})
