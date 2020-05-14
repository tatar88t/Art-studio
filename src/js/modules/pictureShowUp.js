const pictureShowUp = () => {
    const imgsWrapper = document.querySelector('.sizes-wrapper'),
          sizesBlocks = document.querySelectorAll('.sizes-block'),
          imgsBlocks = document.querySelectorAll('.sizes-block img');
    
    console.log(imgsBlocks);

    imgsWrapper.addEventListener('mouseover', (e) => {
        imgsBlocks.forEach((item, i) => {
            item.classList.remove('animated', 'fadeIn');
            if(e.target && e.target == item){
                // item.removeAttribute('src')
                item.classList.add('animated', 'fadeIn');
                item.setAttribute("src", `assets/img/sizes-${i+1}-1.png`)
            }
        })
    })
    imgsWrapper.addEventListener('mouseout', (e) => {
        imgsBlocks.forEach((item, i) => {

            if(e.target && e.target == item){
                // item.removeAttribute('src')
                
                item.setAttribute("src", `assets/img/sizes-${i+1}.png`)
            }
        });
    });

}

export default pictureShowUp;