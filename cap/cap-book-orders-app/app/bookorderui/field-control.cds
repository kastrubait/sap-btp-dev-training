using { OrderBookService } from '../../srv/services';

annotate OrderBookService.BookOrders with {
    bookOrderId @mandatory;
};