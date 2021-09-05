const container = document.querySelector('.container');
const img = container.querySelector('img');
const about = document.querySelector('.about');
const aboutImg = about.querySelector('img');
const walk = 30; // 30px
const aboutWalk = 10; // 30px

const workImg = document.querySelectorAll('.workImg');
const workIcon = document.querySelectorAll('.fa-chevron-right');

function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = container;

    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    img.style.boxShadow = `
        ${xWalk}px ${yWalk}px 0 #feeea3,
        ${xWalk *-1}px ${yWalk}px 0 rgba(0,255,255,0.5),
        ${yWalk*-1}px ${yWalk}px 0 rgba(0,0,255,0.5)
    `;

}

function aboutMove(e) {
    const { offsetWidth: width, offsetHeight: height } = about;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * aboutWalk) - (aboutWalk / 2));
    const yWalk = Math.round((y / height * aboutWalk) - (aboutWalk / 2));

    aboutImg.style.transform = `translate(${xWalk}px,${yWalk}px)`;
}

// works icon 出現
function appear() {
    const imgItem = this.childNodes[1];
    const i = imgItem.childNodes[1]
    console.log(imgItem);
    console.log(i);
    i.classList.remove('disappear');
}

// works icon 消失
function disappear() {
    const imgItem = this.childNodes[1];
    const i = imgItem.childNodes[1]
    i.classList.add('disappear');
}

container.addEventListener('mousemove', shadow);
about.addEventListener('mousemove', aboutMove);
workImg.forEach(img => img.addEventListener('mouseover', appear));
workImg.forEach(img => img.addEventListener('mouseleave', disappear));