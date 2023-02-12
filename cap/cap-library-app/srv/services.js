const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {

    let { Booking } = this.entities;

    this.on('returnTheBook', 'Booking', async (req) => {
        const { bookingUUID } = req.params[0];
        return UPDATE(Booking, bookingUUID).with({
            bookingStatus_ID: '1',
            endDate: (new Date).toISOString().slice(0, 10),
            endTime: (new Date).toISOString().slice(11, 19)
        });
    });

})
