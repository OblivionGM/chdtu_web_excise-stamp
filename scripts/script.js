generateBarcode('AAAA', '123456')

function createStamp() {
    var prod = $('#prod').val();
    var reg = $('#reg').val();
    var date = $('#date').val();
    var tax = $('#tax').val();
    var serial = $('#serial').val();
    var num = $('#num').val();

    $('.stamp__prod').html(prod);
    $('.stamp__region').html(reg);
    $('.stamp__date').html(date);
    $('.stamp__tax').html(tax + ' грн');
    generateBarcode(serial, num);
}

function generateBarcode(serial, number) {
    let code = serial + number;
    $("#barcode").barcode(code, "code128", {
        bgColor: 'transparent',
        fontSize: 14,
        barHeight: 35
    });
}