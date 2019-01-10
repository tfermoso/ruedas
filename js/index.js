$(document).ready(()=>{
    $('#file').change((e)=>{
     
        let reader=new FileReader();
        reader.readAsDataURL(e.target.files[0]);

        reader.onload=function(){
           $("#imagen").attr('src',reader.result);
        }
    })
})