    for(let i=0; i<10; i++){
    var bdy = document.getElementsByTagName('body')[0];
    var eyesAlready = document.getElementsByClassName('eyes')[0]
    let eye = document.createElement('div');
    eye.setAttribute('class', 'eye');
    eyesAlready.appendChild(eye);
    let bll = document.createElement('div');
    bll.setAttribute('class', 'ball');
    eye.appendChild(bll);
    }

    var balls = document.getElementsByClassName("ball");
    var eyeClassEl = document.getElementsByClassName("eye");
    document.onmousemove = () => {
      var x=0;
      var y=0;
      for(let i=0; i<eyeClassEl.length; i++){
        let rect = eyeClassEl[i].getBoundingClientRect();
    
      x = (event.clientX * 100) / ((rect.x+120)*2) + "%";
      y = (event.clientY * 100) / ((rect.y+60)*2) + "%";
    
        if(parseInt(x)>90) x=90 + '%';    
        balls[i].style.left = x;
        if(parseInt(y)>90) y=90 + '%';
        balls[i].style.top = y;
    
        balls[i].style.transform = "translate(-" + x + ",-" + y + ")";
      }
    };
 