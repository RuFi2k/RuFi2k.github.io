const page4 = {
  text: `<div class="page4wrapper page4hidden">
<!--small cat-->
<div id="container">
  <div id="tail"></div>
  <div id="tail-mask"></div>
  <div id="tail-end"></div>
  
  <div id="body">
    <div class="ear" id="ear-left">
      <div class="ear-inner" id="ear-inner-left"></div>
    </div>
    <div class="ear" id="ear-right">
      <div class="ear-inner" id="ear-inner-right"></div>
    </div>
    
    <div id="mask"></div>
    
    <div id="patch">
      <div class="fur"></div>
      <div class="fur"></div>
      <div class="fur"></div>
    </div>
    
    <div id="eyes">
      <div class="eye" id="eye-left">
        <div class="shine" id="shine-left"></div>
      </div>
      <div class="eye" id="eye-right">
        <div class="shine" id="shine-right"></div>
      </div>
    </div>
    
    <div id="whisk-left">
      <div class="whisker" id="whisk-one"></div>
      <div class="whisker"></div>
      <div class="whisker" id="whisk-three"></div>
    </div>
    
    <div id="nose"></div>
    
    <div id="whisk-right">
      <div class="whisker" id="whisk-four"></div>
      <div class="whisker"></div>
      <div class="whisker" id="whisk-six"></div>
    </div>
    
    <div id="smile">
      <div id="smile-left-align">
        <div id="smile-left"></div>
        <div id="mask-left"></div>
      </div>
      
      <div id="smile-right-align">
        <div id="smile-right"></div>
        <div id="mask-right"></div>
      </div>
    </div>
    
    <div id="tongue"></div>
    <div id="tummy"></div>
  </div>
</div>
<!--------------->

<!--cup cat-->
<div class="cupcontainer">
  <div class="cupshadow"></div>
<div class="cupmug"></div>
<div class="cupcat">
  <ul class="cupeyes">
    <li></li>
    <li></li>
  </ul>
  <div class="cupmouth"></div>
</div>
</div>

<!--------------->

<!--moon cat-->
<div class="moondiv moonwrapper">

  <div class="moondiv mooncat">
    <span class="mooneyes left"></span>
    <span class="mooneyes right"></span>
    <span class="moonmouth"></span>
  </div>
  
  <div class="moondiv moonmoon">
    <div class="moondiv moonsphere"></div>
    
  </div>
  
  <div class="moondiv mooncloud-container">
    <div class="moondiv mooncloud"></div>
    <div class="moondiv mooncloud"></div>
    <div class="moondiv mooncloud"></div>
    <div class="moondiv mooncloud"></div>
  </div>
    
</div>
<!--------------->

<!--blinking cat-->
<div class="bcat">
  <div class="bear bear--left"></div>
  <div class="bear bear--right"></div>
  <div class="bface">
    <div class="beye beye--left">
      <div class="beye-pupil"></div>
    </div>
    <div class="beye beye--right">
      <div class="beye-pupil"></div>
    </div>
    <div class="bmuzzle"></div>
  </div>
</div>
<!---------------->
<p class="page4text">А ще я знаю що ти любиш котів, так що тут просто коти :3</p>
</div>`,
  init: function (body) {
    body.className = "page4body";
    body.innerHTML = this.text;
    setTimeout(() => {
      body.appendChild(scroll);
    }, 2000);
    setTimeout(() => {
      document.querySelector(".page4hidden").classList.remove("page4hidden");
    }, 1000);
  },
};
