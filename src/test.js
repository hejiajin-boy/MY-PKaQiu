//引入字符串
/*import string from './css.js'*/
const string = `

.skin * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.skin * ::before,
.skin *::after {
    box-sizing: border-box;
}




/*1. 皮肤 */

.skin {
    position: relative;
    background: #ffdb00;
    /* 全屏 */
    min-height: 100vh;
}


/* 2.鼻子 */

.nose {
    border: 10px solid black;
    /*两边透明，*/
    border-color: black transparent transparent;
    bottom: none;
    width: 0;
    height: 0;
    position: relative;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    /* 提高优先级 上嘴唇被遮了 */
    z-index: 10;
}


/* 鼻子动画效果摇晃 */

@keyframes wave {
    0% {
        transform: rotate(0deg);
    }
    33% {
        transform: rotate(15deg);
    }
    66% {
        transform: rotate(-15deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

.nose:hover {
    transform-origin: 50% 100%;
    animation: wave 0.7s infinite linear;
}

.yuan {
    position: absolute;
    width: 20px;
    height: 6px;
    /* border: 1px solid skyblue; */
    top: -16px;
    left: -10px;
    /* 长方形变圆弧 */
    border-radius: 10px 10px 0 0;
    background-color: black;
}


/* 3.眼睛 */

.eye {
    border: 1px solid black;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
}


/* 用伪元素做小圆 */

.eye::before {
    content: '';
    display: block;
    border: 3px solid #000;
    width: 25px;
    height: 25px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 8px;
    top: 4px;
}


/* 左右一百距离 */

.eye.left {
    transform: translateX(-100px);
}

.eye.right {
    transform: translateX(100px);
}


/* 4.嘴巴 */

.mouth {
    /* border: 1px solid red; */
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
}


/* 4.1上嘴唇 */

.mouth .up {
    position: relative;
    top: -20px;
    z-index: 1;
}


/* (1) 左嘴唇 */

.mouth .up .lip {
    border: 3px solid black;
    height: 30px;
    width: 100px;
    background: #ffdb00;
    border-top-color: transparent;
    border-right-color: transparent;
    position: relative;
    /* 居中的做法 */
    position: absolute;
    left: 50%;
    margin-left: -50px;
}

.mouth .up .lip::before {
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background: #ffdb00;
}

.mouth .up .lip.left {
    /* 椭圆 */
    border-radius: 0 0 0 50px;
    /* 倾斜 */
    transform: rotate(-15deg) translateX(-53px);
}

.mouth .up .lip.left::before {
    right: -6px;
}


/* (2) 右嘴唇 */

.mouth .up .lip.right {
    border-radius: 0 0 50px 0;
    /* 倾斜 */
    transform: rotate(15deg) translateX(53px);
}

.mouth .up .lip.right::before {
    left: -6px;
}


/* 4.2下嘴唇 */

.mouth .down {
    /* border: 1px solid red; */
    height: 250px;
    position: absolute;
    top: 5px;
    width: 100%;
    overflow: hidden;
}


/* 第一个圆 */

.mouth .down .yuan1 {
    border: 1px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    /* 做舌头 */
    border-radius: 75px/300px;
    background: #9b000a;
    overflow: hidden;
}


/* 第二个圆 */

.mouth .down .yuan1 .yuan2 {
    border: 1px solid green;
    width: 200px;
    height: 300px;
    background: #ff485f;
    position: absolute;
    bottom: -105px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
}


/* 5.脸颊 */

.face {
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
    z-index: 3;
}


/* 闪电动画 */

.face>img {
    /* border: 1px solid red; */
    position: absolute;
    top: 50%;
    left: 50%;
}


/* 5.1左脸 */

.face.left {
    transform: translateX(-180px);
    background: #ff0000;
    border-radius: 50%;
}

.face.left>img {
    transform: rotateY(180deg);
    transform-origin: 0 0;
}


/* 5.2右脸 */

.face.right {
    transform: translateX(180px);
    background: #ff0000;
    border-radius: 50%;
}`

let n = 1;
demo.innerText = string.substr(from = 0, n);
demo2.innerHTML = string.substr(from = 0, n);

//时间间隔
let time = 100


const run = () => {
    n += 1;
    //判断字符串的长度，并停止执行。
    if (n > string.length) {
        window.clearInterval(id)
        return
    }
    console.log(n + ':' + string.substr(from = 0, n))
    demo.innerText = string.substr(from = 0, n);
    demo2.innerHTML = string.substr(from = 0, n);
    //滚动条一直处于最下方
    demo.scrollTop = demo.scrollHeight

}


//重设闹钟
const play = () => {
    return setInterval(run, time)
}

let id = play()



//砸掉当前闹钟
const pause = () => {
    window.clearInterval(id)
}



//1.暂停
btnPause.onclick = () => {
    pause()
}





//2.播放
btnPlay.onclick = () => {
        id = play()

    }
    //3.慢速

btnSlow.onclick = () => {
    pause()
    time = 300
    id = play()
}


//4.中速

btnNormal.onclick = () => {
    pause()
    time = 100
    id = play()
}


//5.快速

btnFast.onclick = () => {
    pause()
    time = 0
    id = play()
}