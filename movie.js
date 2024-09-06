let main_container_element=document.getElementById("movie_main_review_container");
let title_input_element=document.getElementById("movie_title");
let review_input_element=document.getElementById("reviewTextarea");
let review_container=document.getElementById("reviews_container");


function add_reviews(){

    //let delete_id="id"+1;

    let movie_title1=title_input_element.value;
    let movie_review=review_input_element.value;
    if(movie_title1===""){
        alert("Please enter the movie title")
        return;
    }

    /*let h=document.createElement("button");
    h.textContent="Delete";
    h.id=delete_id;
    h.onclick=function(){
        delete_reviews(review_id)
    }
    review_container.appendChild(h);*/

    let add_movie_title_element=document.createElement("h1");
    add_movie_title_element.id=review_id;
    
    add_movie_title_element.textContent = "movie_title :"+movie_title1;
    add_movie_title_element.classList.add("movie_title1");
    review_container.appendChild(add_movie_title_element);

    let add_movie_review_element=document.createElement("p");
    add_movie_review_element.textContent="Review :"+movie_review;
    review_container.appendChild(add_movie_review_element);

    let horizontalLineElem = document.createElement("hr");
    review_container.appendChild(horizontalLineElem)


    title_input_element.value="";
    review_input_element.value="";



}