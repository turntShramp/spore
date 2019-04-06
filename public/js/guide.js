console.log("here");

$("#submit_att_btn").on("click", (event) => {
    let formData = $("input[name='mushAttributes']:checked");

    let query = [];

    formData.each((check) => {
        if($(formData[check]).data("id"))
            query.push($(formData[check]).data("id"));
    });

    console.log(query);
    
    $.ajax({
        method: "POST",
        url: "/guide",
        data: { attributes: query}
    }).then((response) => {
        console.log(response);
    });
});