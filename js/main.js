
$(document).ready(function () {
    //console.log( "ready!" );


    $('#form1').submit((e) => {
        e.preventDefault();
        dataUser();

    })
});



// });


function dataUser() {
    var id = $('#id').val();
    var name = $('#name').val();
    var cellphonNumber = $('#cellphonNumber').val();

    $.ajax({
        data:{
            'clave': id,
            'nombre': name,
            'celular': cellphonNumber
        },

        url: './index.php',
        type: 'POST',
        dataType: 'json',
        //action:"{{ route('./index.php') }}",
        success: function (r){
            if (r==1){
                alert()
            }
 

        }
    });
}



