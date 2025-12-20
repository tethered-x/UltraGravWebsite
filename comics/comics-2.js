pageCount = 0;

function backPage()
{
    //alert("WASSUP?");
    if (pageCount > 0){
        pageCount = pageCount - 1;
    }
    switch (pageCount){
        case 0:
            document.getElementById("comic-page").src = "../images/comics/pu2/Ch1_Cover.webp";
            break;
        case 1:
            document.getElementById("comic-page").src = "../images/comics/pu2/Ch1_pg1.webp";
            break;
        case 2:
            document.getElementById("comic-page").src = "../images/comics/pu2/Ch1_pg2.webp";
            break;
        case 3:
            document.getElementById("comic-page").src = "../images/comics/pu2/Ch1_pg3.webp";
            break;
        case 4:
            document.getElementById("comic-page").src = "../images/comics/pu2/Ch1_pg4.webp";
            break;
        default:
            document.getElementById("comic-page").src = "../images/comics/pu2/Ch1_Cover.webp";
            break;
    }
    //alert(pageCount);
}

function nextPage()
{
    if (pageCount < 4) {
        pageCount = pageCount + 1;
    }
    switch (pageCount){
        case 0:
            document.getElementById("comic-page").src = "../images/comics/pu2/Ch1_Cover.webp";
            break;
        case 1:
            document.getElementById("comic-page").src = "../images/comics/pu2/Ch1_pg1.webp";
            break;
        case 2:
            document.getElementById("comic-page").src = "../images/comics/pu2/Ch1_pg2.webp";
            break;
        case 3:
            document.getElementById("comic-page").src = "../images/comics/pu2/Ch1_pg3.webp";
            break;
        case 4:
            document.getElementById("comic-page").src = "../images/comics/pu2/Ch1_pg4.webp";
            break;
        default:
            document.getElementById("comic-page").src = "../images/comics/pu2/Ch1_Cover.webp";
            break;
    }
    //alert(pageCount);
}

function startOver()
{
    pageCount = 0;
    document.getElementById("comic-page").src = "../images/comics/pu2/Ch1_Cover.webp";
    //alert(pageCount);
}