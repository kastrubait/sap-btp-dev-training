using {epam.sap.dev.orderbook as order} from '../../db/shema';

annotate order.BookOrders with @title : '{i18n>bookTitle}' {
    orderUUID       @UI.Hidden;
    bookName        @title            : '{i18n>bookname}';
    bookOrderId     @title            : '{i18n>bookID}';
    authorfirstName @title            : '{i18n>firstname}';
    authorlastName  @title            : '{i18n>lastname}';
    quantity        @title            : '{i18n>quantity}';
    price           @title            : '{i18n>price}'  @Measures.ISOCurrency      : currencyCode_code;
    status          @title            : '{i18n>status}'  @Common.Text              : status.name  @Common.TextArrangement : #TextFirst;
    totalPrice      @title            : '{i18n>totalprice}'  @Measures.ISOCurrency : currencyCode_code;
    totalLocal      @title            : '{i18n>totallocal}'  @Measures.ISOCurrency : localCurrencyCode_code;
}
