const Bills = require("../../models/Bills");

const ObjectId = require("mongoose").Types.ObjectId;

module.exports = {
    // ------------------ POST ------------------
    // Create a bill for a users payment
    
    createBillforPayment: (userId, billAmount, eventId, cb) => {
        userId = ObjectId(userId);
        eventId = ObjectId(eventId);
        Bills.create(
            {"accountId": userId,
            "amountOwed": billAmount,
            "eventPaidFor": eventId,
            "isPaid": true,
            "note": "paid"}
            )
        .then(cb)
    }
    
};