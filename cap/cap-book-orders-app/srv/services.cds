using epam.sap.dev.orderbook as book from '../db/shema';
using sap.common from '@sap/cds/common';

service OrderBookService {
    entity BookOrders as projection on book.BookOrders actions {
        action sendBook();
        action approveBook();
    };
    entity Statuses as projection on book.Statuses;
}

service Techicalservice @(requires  : 'system-user') {
    entity BookOrders as projection on book.BookOrders;
    entity Statuses   as projection on book.Statuses;
    entity Currencies as projection on common.Currencies;
}