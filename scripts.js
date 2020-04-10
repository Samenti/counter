let counterValue = 0

$('#increase').click(() => {
    ++counterValue
    $('h2').text(counterValue.toString());
});

$('#decrease').click(() => {
    --counterValue
    $('h2').text(counterValue.toString());
});