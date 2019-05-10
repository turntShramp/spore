
$(document).ready((event) => {
    
    $("#mushPhoto").change(photoUpload);
    $("#mushThumbnail").change(photoUpload);
    
    $("#saveBtn").click((event) => {

        console.log($("#mushPhoto").attr("data-url"));

        event.preventDefault();
        let newMushroom = {}

        newMushroom.latinName = $("#latinName").val();
        newMushroom.commonName = $("#commonName").val();
        newMushroom.pronunciation = $("#pronunciation").val();
        newMushroom.content = $("#content").val();
        newMushroom.mushPhoto = $("#mushPhoto").attr("data-url");
        newMushroom.mushThumb = $("#mushThumbnail").attr("data-url");

        let formData = $("input[name='mushForm']:checked");

        console.log(formData);
        let attributes = [];

        formData.each((check) => {
            if($(formData[check]).data("id"))
                attributes.push($(formData[check]).data("id"));
        });
        newMushroom.attributes = attributes;

        $.ajax({
            method: "POST",
            url: "/api/admin",
            data: { mushroom: newMushroom }
        }).then((response) => {
            console.log(response);
        });
    });
});

function photoUpload(event) {

    console.log(event.currentTarget)

    let formData = new FormData();

    const fileInput = event.currentTarget.files[0];

    formData.append("photo", fileInput, fileInput.name);
    formData.append("name", fileInput.name);
    formData.append("type", fileInput.type);
    formData.append("path", $(event.currentTarget).data("folder"));

    $.ajax({
        url: "/api/storePhoto",
        data: formData,
        method: "POST",
        processData: false,
        contentType: false
    }).then(response => {
        console.log(response);
        $(event.currentTarget).attr("data-url", response.Location)
    });
}