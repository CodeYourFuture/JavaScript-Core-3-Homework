let show=getAllShows();
let load=false;
let List=[];
const rootElem = document.getElementById("root-grid");
const container=document.getElementById("container");
const searchCont=document.getElementById("search");
let txtSelect=document.createElement("select");
let txtShow=document.createElement("select");
let txtSearch=document.createElement("input");
let match=document.createElement("spam");
let btnBack=document.createElement("button");
txtSearch.setAttribute("type","text");
txtSearch.classList.add("txtSearch");
txtSelect.classList.add("txtSelect");
txtShow.classList.add("txtShow");
match.classList.add("displayNo");
searchCont.appendChild(txtShow);
searchCont.appendChild(txtSelect);
searchCont.appendChild(txtSearch);
searchCont.appendChild(match);

//*****************************display one and two entries on screen */
function displayOne(width,height,length){
  if(length===1){
  document.getElementsByClassName("episode-img")[0].setAttribute("style",`width:${width}rem;height:${height}rem`);
    document.getElementsByClassName("episode-description")[0].setAttribute("style",`width:${width}rem;height:auto`);
  }
  if(length===2){
    document.getElementsByClassName("episode-img")[0].setAttribute("style",`width:${width}rem;height:${height}rem`);
    document.getElementsByClassName("episode-description")[0].setAttribute("style",`width:${width}rem;height:auto`);
  }
}
//**************this function is helper function return the episodecode
function episodeCode(sNo,epNo){
    if(sNo>=10){
      sNo="S"+sNo.toString();
    }
    else{
      sNo="S0"+sNo;
    }
    if(epNo>=10){
      epNo="E"+epNo.toString();
    }
    else{
      epNo="E0"+epNo;
    }
    return sNo+epNo;
}
//*******************search the term in name and summary of objects
function search(txtSearch){
  //searchList array contain all episodes according to terms typed
  let searchList=[];
  //make rootElem div empty for entries of search terms
  rootElem.innerHTML="";
  //fill searchList array of object with episodes according to terms
    for(let i=0;i<List.length;i++){
     if(List[i].name!=null && List[i].summary!=null && List[i].image!=null && List[i].number!=null && List[i].season!=null){
        if((List[i].name.toLowerCase().includes(txtSearch.value.toLowerCase()))
        ||(List[i].summary.toLowerCase().includes(txtSearch.value.toLowerCase()))){
          searchList.push({name:List[i].name,img:List[i].image.medium,
            summary:List[i].summary,season:List[i].season,number:List[i].number});
        }
      }
    }
    //if episodes exist according to terms used put them in rootElem div through call display()
    if(searchList.length>0){
       for(let j=0;j<searchList.length;j++){
       if(searchList[j].name!=null && searchList[j].summary!=null && searchList[j].img!=null && searchList[j].number!=null && searchList[j].season!=null){
         display(searchList[j].name,searchList[j].img,searchList[j].summary,
           searchList[j].season,searchList[j].number);
         }
       }  
     } 
     //increase image div container if only one image at whole screen
     if(searchList.length===1){
       displayOne(32,20,1);
     }
     //increase image div container if only two image at whole screen
     if(searchList.length===2){
       displayOne(25,13,2);
     }
  //show the total no of episode and selected one
  match.textContent="";
  match.textContent="Displaying "+searchList.length+"/"+List.length+" Episodes";
}
//**********automatically display content by default
//******************function to put entries in rootElem div */
function display(name,img,summary,season,number,load){
  episodeContainer=document.createElement("div");
  heading=document.createElement("h4");
  image=document.createElement("img");
  description=document.createElement("p");
  episodeContainer.classList.add("episode-container");
  heading.classList.add("episode-title");
  image.classList.add("episode-img");
  description.classList.add("episode-description");
  heading.textContent=name;
  image.src=img;
  description.innerHTML=summary;
  let sNo=season;
  let epN0=number;
  let episodeCodeNumber=episodeCode(sNo,epN0);
  heading.textContent+="-"+episodeCodeNumber;
  episodeContainer.appendChild(heading);
  episodeContainer.appendChild(image);
  episodeContainer.appendChild(description);
  rootElem.appendChild(episodeContainer);
  if(load===true){//implement only loading time
    var option = document.createElement('option');
    option.text = option.value = episodeCodeNumber+"-"+name;
    txtSelect.add(option);
    load=false;
  }
}
//*******************search the episode according terms */
txtSearch.addEventListener("keyup",function(){
  //empty rooElem and put new entries according to search term
  if(txtSearch.value===""){
    rootElem.innerHTML="";
    btnBack.remove();
     for(i=0;i<List.length;i++){  //create html elements;
      if(List[i].name!=null && List[i].summary!=null&& List[i].image!=null && List[i].number!=null && List[i].season!=null){
        display(List[i].name,List[i].image.medium,List[i].summary,
        List[i].season,List[i].number,txtSelect);
      }
      }  
     match.textContent="Displaying "+List.length+"/"+List.length+" Episodes";
  }else{
    btnBack.remove();
     search(txtSearch);
  }
});
//********************back to all episode main page*/
btnBack.addEventListener("click",function(){
  //empty rootElem div and load again
  rootElem.innerHTML="";
  searchCont.setAttribute("style","width:100%")
  makePageForEpisodes(List);
  btnBack.remove();//no need this button now
  searchCont.appendChild(txtSearch);
  searchCont.appendChild(match);
});
//******************this event triggers when choose a show name */
txtShow.addEventListener("change",function(e){
  btnBack.remove();
  //empty txtSelect for new episodes and rootElm div for new entries
  txtSelect.innerHTML="";
  rootElem.innerHTML="";
  load=true;//because loading again txt select
  let  url;
  //select the all episodes of selected show as a url against id of show
  for(obj of show){
    if(obj.name===txtShow.value){
      url=`https://api.tvmaze.com/shows/${obj.id}/episodes`;
    }
  }
  //fetch all the episodes from url and put entries in rootElem div
      fetch(url).then(function response(res){
        return res.json();
      })
      .then(function data(d){
        List=d;//put episodes in array of objects List
        match.textContent="Displaying:"+List.length+"/"+List.length+" Episodes";
        for(let i=0;i<List.length;i++){
          if(List[i].name!=null && List[i].summary!=null && List[i].image!=null && List[i].number!=null && List[i].season!=null){
            display(List[i].name,List[i].image.medium,List[i].summary,
            List[i].season,List[i].number,load);
          }
        }
       });
});
//*******************this event trigger when choose a episodes */
txtSelect.addEventListener("change",function(e){
    //selected value in txr select input
    let epName=txtSelect.value.slice(7);
    let cnt=1;//count of episode
    //check whether the selected episode exist in array List or not
   //if exist call display() and adjust html element for that episode
    for(let obj of List){
      if(obj.name===epName){
       txtSearch.value="";
        searchCont.setAttribute("style","width:100%")
        rootElem.innerHTML="";
        if(obj.name!=null && obj.summary!=null && obj.image!=null && obj.number!=null && obj.season!=null){
          display(obj.name,obj.image.medium,obj.summary,
          obj.season,obj.number);
        }
        match.textContent="Displaying:"+cnt+"/"+List.length+" Episodes";
        btnBack.textContent="<<";
        btnBack.setAttribute("style","width:5rem;height:3rem;font-weight:bold")
        searchCont.appendChild(btnBack);
        displayOne(32,20,1);
      }
      cnt++;
    }
 });
//put the episodes entries in div rooElem at the loading time
function makePageForEpisodes(episodeList) {
  load=true;//restrict load txtSelect input one time
  match.textContent="Displaying "+episodeList.length+"/"+episodeList.length+" Episodes";
  //calling display() to put entries on rootElem and load txtSelect
  for(i=0;i<episodeList.length;i++){ 
    if(episodeList[i].name!=null && episodeList[i].summary!=null && episodeList[i].image!=null && episodeList[i].number!=null && episodeList[i].season!=null){
      display(episodeList[i].name,episodeList[i].image.medium,episodeList[i].summary,
      episodeList[i].season,episodeList[i].number,load);
    }
  }
}
//*******************8loading time function
function setup() {
  //sort the given array of object "show"
  show.sort((a, b) => (a.name > b.name) ? 1 : -1)
 //remove the first object as it do not contain proper data
  show.shift();
  //add the array of objects in select input txtShow
  for(let obj of show){
    let option=document.createElement("option");
    option.text=option.value=obj.name;
    txtShow.add(option);
  }
  //take the first object of array episodes list url
   let  url=`https://api.tvmaze.com/shows/${show[0].id}/episodes`;
    fetch(url).then(function response(res){
      return res.json();
    })
    .then(function data(d){
      List=d;
      //call a function to display episodes on screen
        makePageForEpisodes(List);
     });
}

//*************load event */
window.onload = setup;
