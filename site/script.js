var data =[
    {
        namePose: "Chém số 1",
        description: "chemso1.jpg"
    },
    {
        namePose: "Chém số 2",
        description: "chemso2.jpg"
    },
    {
        namePose: "Chém số 3",
        description: "chemso3.jpg"
    },
    {
        namePose: "Chém số 4",
        description: "chemso4.jpg"
    },
    {
        namePose: "Đấm thẳng",
        description: "Damthang.jpg"
    },
    {
        namePose: "Đấm thấp",
        description: "damthap.jpg"
    },
    {
        namePose: "Đấm móc",
        description: "dammoc.jpg"
    },
    {
        namePose: "Đấm múc",
        description: "dammuc.jpg"
    },
    {
        namePose: "Đấm lao",
        description: "damlao.jpg"
    },
    {
        namePose: "Phạt ngang",
        description: "phatngang.jpg"
    },
    {
        namePose: "Bật ngược",
        description: "batnguoc.jpg"
    },
    {
        namePose: "Đá thẳng",
        description: "dathang.jpg"
    },
    {
        namePose: "Đá cạnh",
        description: "dacanh.jpg"
    },
    {
        namePose: "Đá tạt ngang",
        description: "tatngang.jpg"
    },
    {
        namePose: "Đá đạp ngang",
        description: "dapngang.jpg"
    },
    {
        namePose: "Chỏ số 1",
        description: "choso1.jpg"
    },
    {
        namePose: "Chỏ số 2",
        description: "choso2.jpg"
    },
    {
        namePose: "Chỏ số 3",
        description: "choso3.jpg"
    },
    {
        namePose: "Chỏ số 4",
        description: "choso4.jpg"
    },
    {
        namePose: "Gạc số 1",
        description: "gacso1.jpg"
    },
    {
        namePose: "Gạc số 2",
        description: "gacso2.jpg"
    },
    {
        namePose: "Gạc số 3",
        description: "gacso3.jpg"
    },
    {
        namePose: "Gạc số 4",
        description: "gacso4.jpg"
    },
        ],
    showResults = document.getElementById("results"),
    countDown = document.querySelector(".countdown"),
    buttonStart = document.querySelectorAll(".btn-start"),
    startRandomPose,timerInterval,countDownToStart,
    practiceTime = prompt('Bạn muốn luyện tập trong bao lâu?/n seconds')*1000,
    checkRandom=true;

function startTimer(duration, display) {
        var timer = duration, minutes, seconds; 
        function startCounter () {
            display.innerHTML = minutes + ":" + seconds;
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            if (--timer < 0) {
                timer = duration;
            }
            return startCounter;
        }
         timerInterval = setInterval(startCounter()(), 1000);
    }

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function convertArray (array,index) {
        renderData = array.map(function(obj) {
            return `<h2 class = "vov-pose">${obj.namePose}</h2>`;
        })
        showResults.innerHTML = renderData[index];
}
function startRandom(){
        // let randomValue = Math.floor(Math.random()*data.length);
        // renderData = data.map(function(obj) {
        //     return `<h2 class = "vov-pose">${obj.namePose}</h2>`;
        // })
        // showResults.innerHTML = renderData[randomValue];
        // return startRandom;
        let shuffleData = shuffleArray(data);
        let lengthArr = shuffleData.length-1;
        convertArray(shuffleData,lengthArr)
        lengthArr--;
        loopRandom();
        function loopRandom(){
            console.log(checkRandom);
            if (checkRandom){
            startRandomPose = setTimeout( function(){
            convertArray(shuffleData,lengthArr);
            lengthArr--;
            console.log(lengthArr);
            if(lengthArr>=0){loopRandom()
            }else {showResults.innerHTML = `<h1>Bạn đã tập xong!</h1>`;clearTimeout(startRandomPose);}
         },practiceTime+1000);        
        } else {return;}
    };
};

function randomPose (){
    //startRandom();
    //startRandomPose = setInterval(startRandom()(),practiceTime+1000);  
    checkRandom=true;
    startRandom();
    startTimer(practiceTime/1000,countDown);       
}
function stopPractice(){
    checkRandom = false;
    console.log(checkRandom);
    clearTimeout(startRandomPose);
    clearInterval(startRandomPose);
    clearInterval(timerInterval);
    countDown.innerHTML="";
    showResults.innerHTML = "<h2>Stopped!!</h2>";
}
