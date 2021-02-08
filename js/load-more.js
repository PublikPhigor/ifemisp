load1 = document.querySelector('#loadMore1');
load2 = document.querySelector('#loadMore2');
content1 = document.querySelectorAll('.moreBox');
content2 = document.querySelectorAll('.moreBox2');

const loadMore = (button, contentList)=> {
    let currentItems = 0;
    button.addEventListener('click', (e) => {
        e.preventDefault();
        for (let i = currentItems; i < currentItems + 3; i++) {
            if (contentList[i]) {
                contentList[i].style.display = 'block';
                console.log(currentItems); 
            }
        }
        currentItems += 3;
        if (currentItems >= contentList.length) {
            button.style.display = 'none';
        }
    });
};

loadMore(load1, content1);
loadMore(load2, content2);