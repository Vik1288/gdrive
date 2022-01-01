@media screen and (max-width: 785px) {
    .box{
      width: 12em;
    }
  }
  
  
  @media screen and (max-width: 542px) {
    .header {
      width: 150vw;
    }
  }
  @media screen and (max-width: 420px) {
    .header {
      width: 200vw;
    }
  }
  @media screen and (max-width: 342px) {
    .header {
      width: 250vw;
    }
  }
  @media screen and (max-width: 262px) {
      .header {
        width: 300vw;
      }
    }
    let grid_btn = document.querySelector('.grid-btn')
grid_btn.addEventListener('click',function(){
    let grid = document.querySelector('.grid').classList.toggle("grid1");
})