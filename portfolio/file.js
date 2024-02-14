let arr=[{
    img:'portfolioPic/dsa.png',
    name:'Data Structure And Algorithm'
},{
    img:'portfolioPic/htmlANDcss.png',
    name:'HTML & CSS'
},{
    img:'portfolioPic/javascript.png',
    name:'javaScript'
},{
    img:'portfolioPic/java1.jpeg',
    name:'JAVA'
},{
    img:'portfolioPic/python.png',
    name:'PYTHON'
},{
    img:'portfolioPic/c_logo.png',
    name:'C Language'
},{
    img:'portfolioPic/mysql.jpg',
    name:'MySQL'
},{
    img:'portfolioPic/dsa.png',
    name:'Data Structure And Algorithm'
}];

let val='';
arr.forEach((object)=>{
   val=val+`
   <div class="container">
    <div class="img"><img src="${object.img}" alt=""></div>
    <div class="text">${object.name}</div>
</div>
   `; 
});

document.querySelector('.grid1').innerHTML=val;
