$(function(){

    var $button=$('<div class="switch-preview-button">✇</div>');

    $button.on("click",function(){
        var url=location.href;
        url=url.replace("/edit","/TEMP")
            .replace("/preview","/edit")
            .replace("/TEMP","/preview");
        location.href=url;
    })

    $("body").append($button);
})