using { OrderBookService } from '../../srv/services';

annotate OrderBookService.BookOrders with @odata.draft.enabled;
annotate OrderBookService.BookOrders with @Capabilities : { 
    Deletable  : true,
    Insertable : true,
 };