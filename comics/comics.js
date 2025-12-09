pageCount = 0;

function backPage()
{
    //alert("WASSUP?");
    if (pageCount > 0){
        pageCount = pageCount - 1;
    }
    switch (pageCount){
        case 0:
            document.getElementById("comic-page").src = "../images/comics/pu1/PU_Chap1_1.png";
            break;
        case 1:
            document.getElementById("comic-page").src = "../images/comics/pu1/PU_Chap1_2.png";
            break;
        case 2:
            document.getElementById("comic-page").src = "../images/comics/pu1/PU_Chap1_3.png";
            break;
        case 3:
            document.getElementById("comic-page").src = "../images/comics/pu1/PU_Chap1_4.png";
            break;
        default:
            document.getElementById("comic-page").src = "../images/comics/pu1/PU_Chap1_1.png";
            break;
    }
    //alert(pageCount);
}

function nextPage()
{
    if (pageCount < 3) {
        pageCount = pageCount + 1;
    }
    switch (pageCount){
        case 0:
            document.getElementById("comic-page").src = "../images/comics/pu1/PU_Chap1_1.png";
            break;
        case 1:
            document.getElementById("comic-page").src = "../images/comics/pu1/PU_Chap1_2.png";
            break;
        case 2:
            document.getElementById("comic-page").src = "../images/comics/pu1/PU_Chap1_3.png";
            break;
        case 3:
            document.getElementById("comic-page").src = "../images/comics/pu1/PU_Chap1_4.png";
            break;
        default:
            document.getElementById("comic-page").src = "../images/comics/pu1/PU_Chap1_1.png";
            break;
    }
    //alert(pageCount);
}

function startOver()
{
    pageCount = 0;
    document.getElementById("comic-page").src = "../images/comics/pu1/PU_Chap1_1.png";
    //alert(pageCount);
}