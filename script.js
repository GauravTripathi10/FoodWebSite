function botttomnav() {

    var icon1 = document.querySelector('.ri-home-2-line');
    var icon2 = document.querySelector(".ri-fire-line");
    var icon3 = document.querySelector(".ri-movie-line");
    var icon4 = document.querySelector(".ri-folder-line");
    var icon5 = document.querySelector(".ri-tv-2-line");

    icon1.addEventListener("click", function () {
        this.style.color = "red";
        icon2.style="#000";
        icon3.style.color = "#000";
        icon4.style.color = "#000";
        icon5.style.color = "#000";

    });
    icon2.addEventListener("click", function () {
        this.style.color = "red";
        icon1.style.color = "#000";
        icon3.style.color = "#000";
        icon4.style.color = "#000";
        icon5.style.color = "#000";
    });
    icon3.addEventListener("click", function () {
        this.style.color = "red";
        icon1.style.color = "#000";
        icon2.style.color = "#000";
        icon4.style.color = "#000";
        icon5.style.color = "#000";

    });
    icon4.addEventListener("click", function () {
        this.style.color = "red";
        icon1.style.color = "#000";
        icon2.style.color = "#000";
        icon3.style.color = "#000";
        icon5.style.color = "#000";
    });
    icon5.addEventListener("click", function () {
        this.style.color = "red";
        icon1.style.color = "#000";
        icon2.style.color = "#000";
        icon4.style.color = "#000";
        icon3.style.color = "#000";

    });
};
function pages(){
    var arr=[
        {pic:"https://images.unsplash.com/photo-1664992892797-781fcf7b7541?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",text:"55$"},
        {pic:"https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",text:"21$"},
        {pic:"https://images.unsplash.com/photo-1628885363743-fbf9c98d4196?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",text:"22$ "},
        {pic:"https://images.unsplash.com/photo-1563822248828-fd50acca9ad0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",text:"33$ "},
        {pic:"https://images.unsplash.com/photo-1664542497842-61043e40967e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",text:"99$"},
        {pic:"https://images.unsplash.com/photo-1663592151816-b30533dc08ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",text:"11$"},
        {pic:"https://images.unsplash.com/photo-1664192579087-80def67137a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",text:"!5$"},
        {pic:"https://images.unsplash.com/photo-1664542497842-61043e40967e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",text:"10$"},

    ];
    var clutter=" ";
    arr.forEach(function(dets){
        clutter +=`  <div id="infomovie">
        <img src="${dets.pic}" alt="This is an Img">
         <h3>${dets.text}</h3>

        </div>`
    });
    document.querySelector("#slide2").innerHTML=clutter;
}


pages();
botttomnav();