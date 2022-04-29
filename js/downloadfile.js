// function downloadFILE() {

//     document.querySelector(".download-file").addEventListener("click",function () {
//         var zip = new JSZip();
//         var folder = zip.folder("folder");
        
//         zip.file("hello.txt", "Hello World\n");
//         folder.file("message.txt","Hello World, This is message form wapgee!");
        
//         zip.generateAsync({type:"blob"})
//         .then(function(zip) {
//         saveAs(zip, "test.zip");
//         });
//     });

// }


/* Data Download
***********************************/
function dataDOWNLOAD() {
  
    $('[data-download]').each(function (){

        var dataDOWNLOAD         =   $(this).data("download");
        var dataFOLDER           =   $(this).data("download--folder");
        var dataFILE             =   $(this).data("download--file");
        var dataTYPE             =   $(this).data("download--type");
        var downloadBUTTON       =   $(this).data("download--button");

        

        $(".download-zip").on("click", function() {

            var zip     =   new JSZip();
            var folder  =   zip.folder("folder");

            zip.file("hello.txt", "Hello World\n");
            folder.file("message.txt","Hello World, This is message form wapgee!");

            zip.generateAsync({type:"blob"})
            .then(function(zip) {
            saveAs(zip, "PTsettings.zip");
            });
        });

    });
}