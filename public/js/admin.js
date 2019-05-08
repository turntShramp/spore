
$(document).ready((event) => {
    $("#saveBtn").click((event) => {
        event.preventDefault();
        console.log("here");

        console.log($("#mushForm"));
        let newMushroom = {}
        newMushroom.latinName = $("#latinName").val();
        newMushroom.commonName = $("#commonName").val();
        newMushroom.pronunciation = $("#pronunciation").val();
        newMushroom.content = $("#content").val();
        newMushroom.mushPhoto = $("#mushPhoto").val();
        newMushroom.mushThumb = $("#mushThumbnail").val();

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