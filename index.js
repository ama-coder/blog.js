// blog.js created by ama
//copy right : GPL-3

const xhttp = new XMLHttpRequest();


var getPostsInfo = (path) => {

    xhttp.onload = function() {
    return JSON.parse(this.responseText);
    }
    xhttp.open("get",path,true);
    xhttp.send();
}

var getPost = (postname,postsInfo) => {

    let postPath;

    console.log(postsInfo.count);

    if (postsInfo == null) {
        console.error("postes info not fetcged (try getPostsInfo())");
        return;
    }
    for (var i=0; i<=postsInfo.count;i++)
    { 
        if(postname == postsInfo.posts[i]) {
            postPath = postsInfo.path[i];
            return postPath;
           // break;
        }
    }
    // for (var i in postsInfo.count) 
    // {
       
    // }
}
