//let showSelected=document.getElementById("showSelected");
let showContainer=document.getElementById("showContainer");
let showBoundary=document.createElement("div");
showBoundary.id="showBoundary";
let episodeContainer=document.getElementById("episode-container");
let foundShowList=[];
//let search=document.getElementById("search");
    home=document.createElement("button");
    home.textContent="Show All";
    home.id="home";
    filtering=document.createElement("span");
    txtFiltering=document.createElement("input");
    txtFiltering.setAttribute("type","text");
    foundShow=document.createElement("span");
    showSelected=document.createElement("select");
    showSearch=document.createElement("div");
    filtering.id="filtering";
    filtering.textContent="filtering for"
    txtFiltering.id="txtFiltering";
    txtFiltering.setAttribute("style","width:10rem;height:2rem");
    foundShow.id="foundShow";
    showSelected.id="showSelected";
    showSearch.classList.add("showSearch");
    btnShowCast=document.createElement("button");
    btnShowCast.id="btnShowCast";
    btnShowCast.textContent="Cast";
    btnShowCast.setAttribute("style","width:5rem");
    showCastContainer=document.createElement("div");
    showCastContainer.classList.add("showCastContainer");
    btnBackToShow=document.createElement("button");
    btnBackToShow.id="btnBackToShow";
    btnBackToShow.textContent="Home";
    showSearch.appendChild(home);
    showSearch.appendChild(filtering);
    showSearch.appendChild(txtFiltering);
    showSearch.appendChild(foundShow);
    showSearch.appendChild(showSelected);
    showSearch.appendChild(btnShowCast);
    showSearch.appendChild(btnBackToShow);
    showContainer.appendChild(showSearch);
    showContainer.appendChild(showBoundary);
    showContainer.appendChild(showCastContainer);

    let btnHome=document.createElement("button");
    btnHome.id="searchCont"
//btnHome.classList.add("search");
    btnHome.textContent="Home";
//back to home from cast page
btnBackToShow.addEventListener("click",function(){
    showCastContainer.style.display="none";
    showBoundary.style.display="block";
    txtFiltering.style.display="block";
    showSelected.style.display="block";
    filtering.style.display="block";
    home.style.display="block";
    foundShow.style.display="block";
})
//********************show the casts of show

function showCast(arr){
    showCastImg=document.createElement("div");
    showCastImg.classList.add("showCastImg");
    img=document.createElement("img");
    img.src=arr.person.image.medium;
    showCastName=document.createElement("p");
    showCastName.textContent=arr.person.name;
    showCastImg.appendChild(showCastName);
    showCastImg.appendChild(img);
    showCastContainer.appendChild(showCastImg);
    showCastImg.addEventListener("click",function(e){
        //http://api.tvmaze.com/people/1/castcredits
        console.log( showCastName.textContent)
    });
}
btnShowCast.addEventListener("click",function(){
    console.log("x")
    txtFiltering.style.display="none";
    showSelected.style.display="none";
    filtering.style.display="none";
    home.style.display="none";
    foundShow.style.display="none";
    showCastContainer.innerHTML="";
    showBoundary.style.display="none";
    showCastContainer.style.display="block";
    //all shows casts
    if(showSelected.length===0){
        for(let j=0;j<show.length;j++){
            let url=`http://api.tvmaze.com/shows/${show[j].id}?embed=cast`;
            fetch(url).then(function(response){
                return response.json();
            }).then(function(content){
                //console.log(content._embedded);
                if(content._embedded.cast.length>0){
                    for(let i=0;i<content._embedded.cast.length;i++){
                        showCast(content._embedded.cast[i]);
                        console.log(content);
                    }
                }
            }).catch(function(error){
                console.log("error:"+error);
            });
        }
    }else{//only selected show casts
       // alert(showSelected[4].index);
       let showId=[];
       for(let i=0;i<showSelected.length;i++){
           showId.push(show.filter(function(objSelected){
                return objSelected.name.includes(showSelected[i].value);
           }));
           
       }
       for(let i=0;i<showId.length;i++){
        url=`http://api.tvmaze.com/shows/${showId[i][0].id}?embed=cast`;
        console.log(url)
        fetch(url).then(function(response){
            return response.json();
        }).then(function(content){
            if(content._embedded.cast.length>0){
                for(let i=0;i<content._embedded.cast.length;i++){
                    showCast(content._embedded.cast[i]);
                    console.log(content);
                }
            }
        }).catch(function(error){
            console.log("error:"+error);
        });
       }
       
    }
});
///////first page display all the shows
function showList(show){
    
//*******display the content of showContent div
for(let obj of show){
    if(obj.image!=null && obj.summary!=null && obj.rating!=null){
        let showDiv=document.createElement("div");
        showDiv.classList.add("show");
        let showContent=document.createElement("div");
        //contain all the content name img,description,details of episode
        showContent.classList.add("showContent");
        let h1=document.createElement("h1");//name
        let imgDiv=document.createElement("div");//img div
        let img=document.createElement("img");//img
        let p=document.createElement("p");//description
        //add classes name img description
        h1.classList.add("showName");
        imgDiv.classList.add("showImg");
        p.classList.add("showDescription");
        //add data to above
        h1.textContent=obj.name;
        img.src=obj.image.medium;
        p.innerHTML=obj.summary;
        //append data to above
        showDiv.appendChild(h1);
        imgDiv.appendChild(img);
        showContent.appendChild(imgDiv);
        showContent.appendChild(p);
        //create list element of details
        let ul=document.createElement("ul");
        let rated=document.createElement("li");
        let genres=document.createElement("li");
        let status=document.createElement("li");
        let runTime=document.createElement("li");
        //add classes to above
        ul.classList.add("showDetail");
        rated.classList.add("rated");
        genres.classList.add("detail");
        status.classList.add("detail");
        runTime.classList.add("detail");
        //add data to above
        rated.innerHTML="<b>Rated</b>:"+obj.rating.average;
        genres.innerHTML="<b>Genres</b>:"+obj.genres;
        status.innerHTML="<b>Status</b>:"+obj.status;
        runTime.innerHTML="<b>RunTime</b>:"+obj.runtime;
        //append data to above
        ul.appendChild(rated);
        ul.appendChild(genres);
        ul.appendChild(status);
        ul.appendChild(runTime);
        //finally append whole content
        showContent.appendChild(ul);
        showDiv.appendChild(showContent);
        //showContainer.appendChild(showDiv);
        showBoundary.appendChild(showDiv);
        ///////////
        h1.addEventListener("click",function(e){
            
            callEpisodes(h1.textContent);
           // document.getElementById("container").innerHTML='<object type="text/html" data="episodes.html" ></object>';
        });
        //////////////
    }
}

}
function callEpisodes(txtName){
    for(obj of show){
        if(obj.name===txtName){
            txtShow.textContent="";
            txtSelect.textContent="";
            episodeContainer.style.display="block";
            episodeContainer.firstChild.style="block";
            document.getElementById("search").style.display="block";
            setup(obj.id)
            showContainer.style.display="none";
          break;
        }
    }
}
//showSearch
btnHome.addEventListener("click",function(){
    //episodeContainer.innerHTML="";
    rootElem.innerHTML="";
    showContainer.style.display="block";
    episodeContainer.style.display="none";
    document.getElementById("search").style.display="none";
    btnEpisodeBack.remove();
})
//change event of txtfiltering
txtFiltering.addEventListener("keyup",function(){
    let termsNAmeSummary=[];
    if(txtFiltering.value!=""){
        termsNAmeSummary=show.filter(function(obj){
            return obj.name.toLocaleLowerCase().includes(txtFiltering.value.toLocaleLowerCase())||
                    obj.summary.toLocaleLowerCase().includes(txtFiltering.value.toLocaleLowerCase());
        });
    }
   
    if(termsNAmeSummary.length>0){
        showSelected.innerHTML="";
        termsNAmeSummary.forEach(function(obj){
            let option=document.createElement("option");
            option.text=option.value=obj.name;
            showSelected.add(option);
        });
        foundShow.textContent="found "+termsNAmeSummary.length+" shows";
        showBoundary.innerHTML="";
        showList(termsNAmeSummary);
    }
    else{
        showBoundary.innerHTML="";
        showList(show);
    }
    
});
//on change event of show selected
showSelected.addEventListener("change",function(){
    for(obj of show){
        if(obj.name===showSelected.value){
           //episodeContainer.innerHTML="";
            txtShow.textContent="";
            txtSelect.textContent="";
            episodeContainer.style.display="block";
            episodeContainer.firstChild.style="block";
            document.getElementById("search").style.display="block";
            setup(obj.id)
            showContainer.style.display="none";
            //showContainer.innerHTML="";
          break;
        }
    }
});
//show all show
home.addEventListener("click",function(){
    showBoundary.innerHTML="";
    showList(show);
    showSelected.innerHTML="";
    txtFiltering.value="";
})