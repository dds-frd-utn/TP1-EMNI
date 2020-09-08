
$(document).ready(function() {
    $.ajax({

    url: 'http://localhost:8080/EmniApp/rest/transaccion',
    method: 'get',
    dataType: 'json',
    success: function (data){

    $('#transacciones').DataTable( {
            dom: 'Bfrtip',  
            buttons: [
                'csv','pdf'
            ],   
            data: data,                         
            columns: [

                { "data": "nroTransaccion" },
                { "data": "fechaTransaccion" },
                { "data": "monto" },
                { "data": "descripcion" }
                    ]
                }); 
        }
    });
});



$(document).ready(function(){
    $("#enviarTransferencia").click(function(x){
        x.preventDefault();   
        let current_datetime = new Date();
        let formatted_date = current_datetime.getFullYear() + "-" + appendLeadingZeroes(current_datetime.getMonth() + 1) + "-" + appendLeadingZeroes(current_datetime.getDate()) + "T03:00:00Z[UTC]";


        let monto = $("#cargarMonto").val();
        let descripcion = $("#cargarDesc").val();
        let fechaDeposito = formatted_date;

        $.ajax({
            url: "http://localhost:8080/EmniApp/rest/transaccion/",
            type: 'post',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify({
                "fechaTransaccion": fechaDeposito,
                "monto": monto,
                "descripcion": descripcion}),
            success: function (){
                window.location.reload(true);
            },
            error: function (data) {
                console.log('Error:', data);
            }

        });
       
        

    });
          

    
    $("#eliminarTransaccion").click(function(x){
        x.preventDefault();
        let nroTransaccion = $("#inputNroTransaccion").val();
        $.ajax({
            url: "http://localhost:8080/EmniApp/rest/transaccion/" + nroTransaccion,
            type: 'delete',
            contentType: 'application/json',
            dataType: 'json',
            success: function (){
                window.location.reload(true);
            },
            error: function (data) {
                console.log('Error:', data);
            }
        });
    });
});

function appendLeadingZeroes(n){
  if(n <= 9){
    return "0" + n;
  }
  return n;
}