const add = document.getElementById('add');
const newTask = document.getElementById('newTask');
const close = document.getElementById('close');
const btn = document.getElementById('submit');
var date = document.getElementsByClassName('date');
const task_panel = document.getElementById('task-panel');
var subTask = document.getElementsByClassName('subtask');
let del ;

add.addEventListener('click',function(e){
  newTask.style.display = "block";
  add.style.display = "none";
})

close.addEventListener('click',function(e){
  add.style.display = "block";
  newTask.style.display = "none" ;
})


submit.addEventListener('click',function(e){
  add.style.display = "block";
  newTask.style.display = "none" ;
  var t , p , nd , index ;
  var d = '';
  var st = '';
  var pre = false;
  var c;
  d = document.querySelector('input[type="date"]').value;
  var e =  document.querySelector('select');
  p = e.options[e.selectedIndex].text;
  t = document.querySelector('input[type="text"]').value;
  d = new Date(d).toString().slice(0,15);
  for(var i=0 ; i<date.length; i++){
    st = date[i].innerHTML.slice(0,15) ;
    if(!st.localeCompare(d)){
      pre = true;
      index = i ;
      break ;
    }
  }

  console.log(p);
  if(p.localeCompare('high')!=1){
    c = "rgb(221, 51, 51)" ;
  }
  else if(p.localeCompare('Low')!=1){
    c = "green" ;
  }
  else if(p.localeCompare('Medium')!=1){
    c = "orange" ;
  }


  if(!pre){
    const sub = document.createElement('div');
    sub.innerHTML = 
    `
    <div class="subtask">
    <span class="date">${d}</span>
      <div class="list">
          <div class="task-list">${t}
              <button style="background:none; border:none;">
                <span class="glyphicon glyphicon-stats" style="color:${c};  font-weight:bold;">
                </span>
              </button>
      </div>
    </div>`;
    task_panel.appendChild(sub) ;
  }else{
    const sub = document.createElement('div');
    sub.innerHTML = 
    `
        <div class="task-list">${t}
            <button style="background:none; border:none;">
            <span class="glyphicon glyphicon-stats" style="color:${c};  font-weight:bold;">
            </span>
            </button>
        </div>
    `;
    subTask[index].firstChild.nextSibling.nextSibling.nextSibling.appendChild(sub);  
  }
})

task_panel.addEventListener('click',function(e){
  if(e.srcElement.className==='task-list'){
    e.srcElement.parentNode.removeChild(e.srcElement);
      // if(e.srcElement.className.localeCompare('task-list')!=1)
      // e.srcElement.className += " cut";
  }
})


