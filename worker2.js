// for Stocks

function btnclickcolor(a){
    document.getElementById(a).style.backgroundColor = 'rgb(173, 255, 47)';
    setTimeout(() => {
        document.getElementById(a).style.backgroundColor = 'rgb(255, 170, 66)';
    }, 150);
}

function push (){
    counter ++;
    if (counter == 5){
        document.getElementById('push').style.visibility = 'hidden';
        errpoper ('Stack is FULL !')
    }
    z = (498-counter*56).toString() + 'px';

    document.getElementById('itos').style.top = z;
    document.getElementById('pop').style.visibility = 'visible';

    y = helping.pop();
    main.push (y);

    x = 'box' + y.toString();
    document.getElementById(x).style.animationName = 'boxdown';
}

function pop (){
    counter --;

    if (counter == 0){
        document.getElementById('pop').style.visibility = 'hidden';
        errpoper ('Stack is EMPTY !');
    }
    z = 498 - (counter*56);
    // console.log (z)
    z = z.toString() + 'px';

    document.getElementById('itos').style.top = z;

    document.getElementById('push').style.visibility = 'visible';

    y = main.pop ();
    helping.push (y);

    x = 'box' + y.toString ();

    document.getElementById(x).style.animationName = 'boxup';
}

function errpoper (a){
    document.getElementById('errmsg').innerText = a;
    document.getElementById('errmsg').style.top = '100px';

    setTimeout(() => {
        document.getElementById('errmsg').style.top = '0px';
    }, 1200);
}


function enqueue (){
    counter ++ ;
    
    if (counter == 5){
        errpoper ('Queue is FULL !');
        document.getElementById('enqueue').style.visibility = 'hidden';
    }

    document.getElementById('dequeue').style.visibility = 'visible';

    x = imgarr.pop ();
    arr.push (x);

    queueimgchanger (0);
}

function dequeue (){
    counter --;
    if (counter == 0){
        errpoper ('Queue is EMPTY !');
        document.getElementById('dequeue').style.visibility = 'hidden';
    }

    document.getElementById('enqueue').style.visibility = 'visible';

    x = arr.shift();
    imgarr.unshift (x);

    queueimgchanger(1);
}

function queueimgchanger (a){
    if (a){
        // Dequeue operations
        for (i=1;i<6;i++){
            y = 'img' + i.toString ();
            document.getElementById(y).style.opacity = '0%';
        }
        setTimeout(() => {
            for (i=0;i<arr.length;i++){
                
                x = 'img' + (i+1).toString ();
                document.getElementById(x).style.opacity = '100%';
                document.getElementById(x).src = arr[i];
                
            }
            
        }, 300);
        x = 'img' + (arr.length+1).toString();
        document.getElementById(x).src = "";
    }

    else{

        // Enqueue Operations 

        for (i=0;i<arr.length;i++){
            x = 'img' + (i+1).toString ();
            document.getElementById(x).style.opacity = '100%';
            document.getElementById(x).src = arr[i];
            
            
        }

    }
}


// Binary search section 

function inputtaker (){
    toFind = window.prompt ('Enter the number to search: ','');
    // console.log (toFind);
    // console.log (checker);
    if (toFind == ''){
        document.getElementById('errmsg').innerText = 'Invalid Input !';
        document.getElementById('errmsg').style.top = '150px';
        
        setTimeout(() => {
            document.getElementById('errmsg').style.top = '0px';
        }, 1000);
    }
    
    else{
        checker = binarysearch (arr,toFind);

    }
}

function randomizer (arr){
    if (helping.length != 0){
        // console.log (helping);
        // console.log (counter);
        k = helping[counter];
        k++;
        // console.log (k);
        k = 'bar' + k.toString();
        document.getElementById(k).style.backgroundColor = 'rgb(248, 66, 248)';
        // console.log (helping.length + 'a')
        b = helping.length;
        for (i=1;i<=b;i++){
            helping.pop();
        }

        // console.log ('ake' + helping);

    }

    counter = -1;
    document.getElementById('searcher').style.display = 'block';
    document.getElementById('nextstep').style.display = 'none';


    for (i=0;i<5;i++){
        arr.pop();
    }
    for (i=0;i<5;i++){
        x = Math.floor(Math.random()*100);
        arr.push(x);
    }
    console.log ('before' + arr);
    bblSort (arr);  
    console.log (arr);

    for (i=0;i<5;i++){
        x = arr[i];
        // console.log (x);
        x = x.toString();
        y = 'bar' + (i+1).toString();

        document.getElementById(y).innerText = x;
    }
}

let binarysearch = function (arr, x) {
    // console.log (arr + x)
    
    
    document.getElementById('searcher').style.display = 'none';
    document.getElementById('nextstep').style.display = 'block';
    let start=0, end=arr.length-1;
         
 
    while (start<=end){
 
        
        let mid=Math.floor((start + end)/2);
        // console.log (mid);
        helping.push(mid);
       
        if (arr[mid]==x) {
        
            return true;
        }
 
  
        else if (arr[mid] < x)
             start = mid + 1;
        else
             end = mid-1;
    }
    return false;
}

function binaryvisualizer (){
    if ((counter+1) == helping.length){
        return;
    }
    counter ++;
    // console.log (helping);
    k = helping[counter];
    k++;
    // console.log(k)
    k = 'bar' + k.toString();
    document.getElementById(k).style.backgroundColor = 'red';

    if (counter > 0){
        k = helping[counter-1];
        k++;
        k = 'bar' + k.toString();
        document.getElementById(k).style.backgroundColor = 'rgb(248, 66, 248)';
    }

    if ((counter+1) == helping.length){
        document.getElementById('nextstep').style.display = 'none';
        if (checker){
            document.getElementById('errmsg').innerText = 'Element Found at Selected position !';
            
        }
        
        else{
            document.getElementById('errmsg').innerText = 'Element not Found !';

        }

        document.getElementById('errmsg').style.top = '150px';
        setTimeout(() => {
            document.getElementById('errmsg').style.top = '0px';
        }, 1500);
    }

}

// For sorting in between

function bblSort(arr){
	
    for(var i = 0; i < arr.length; i++){
        
    
        for(var j = 0; j < ( arr.length - i -1 ); j++){
            
        
            if(arr[j] > arr[j+1]){
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
            }
        }
    }
   
}

  
// N queen functions

function queenvaluecheck(){
    // console.log ('running');
    let val = document.getElementById('size').value;
    // console.log (val);
    if (val > 8 || val < 1 || val == ""){
        let x = document.getElementById('errmsg');
        x.innerText = "Invalid number of Queens !";
        x.style.top = "100px";

        setTimeout(() => {
            x.style.top = "0px";
        }, 1500);

        return false;
    }

    return val;
}

function sliderval(){
    // console.log ('run');
    let val = document.getElementById('time').value;
    document.getElementById('rval').innerText = val;

}

function backtrack (row,cols,n){
    if (row == n) {
        return true;
    }
    // console.log ('chala'); 
    // console.log (n);

    for (let col = 0; col < n; col++) {
        // console.log (isSafe(row,col,cols,n));
        if (isSafe(row, col,cols,n)) {
            cols[row] = col;

            arr.push(col);
            pos.push(row);
          

            if (backtrack(row + 1,cols,n)) {
                return true;
            }
            cols[row] = 0;

            arr.push (0);
            pos.push (row);
            
        }
    }
    return false;
};

function isSafe (row,col,cols,n) {
    for (let r = 0; r < row; r++) {
        const c = cols[r];

        if (c == col) {
            return false;
        }

        if (Math.abs(c - col) === Math.abs(r - row)) {
            return false;
        }
    }
    return true;
};


function queenvisualizer(){   
    arr = [];
    pos = [];
    imgpos = [];
    counter = 0;

    let n = 8;
    let x = queenvaluecheck();
    // console.log (x);
    if (x){
        n = x;
    }
    else{
        return;
    }
    chessmaker(n);
    // console.log(n);
    let cols = [];

    for (i=0;i<n;i++){
        cols.push(0);
        imgpos.push(-1);
    }
    
    backtrack(0,cols,n);
    // console.log(cols);
    queenanimator();
}

function chessmaker (val){
    let y = document.querySelectorAll('li');
    for (i=0;i<y.length;i++){
        y[i].style.visibility = 'hidden';
        y[i].innerHTML = "";
    }
    for (j=1;j<=val;j++){
        for (i=1;i<=val;i++){
            let c = "c" + j.toString();
            // console.log(c);
            document.getElementsByClassName(c)[i-1].style.visibility = 'visible'; 
        }
    }
}

function queenanimator (){
    let iwala = [];
    let timing = document.getElementById('time').value;
    document.getElementById('btn').style.visibility = 'hidden';
    for (i=0;i<arr.length;i++){
        // console.log (i);
        // console.log (imgpos);
        iwala.push (i);
        setTimeout(() => {
            i = iwala[0];
            iwala.shift();
            if (imgpos[pos[i]] == -1){
                let c = "c" + (pos[i]+1).toString();
                
                document.getElementsByClassName(c)[arr[i]].innerHTML = `<img src="https://cdn.pixabay.com/photo/2013/07/12/13/27/queen-147057_1280.png" alt="" height="30px">`;
                counter++;
                imgpos[pos[i]] = arr[i];
            }
    
            else{
                // console.log ('kake');
                let c = "c" + (pos[i]+1).toString();
                document.getElementsByClassName(c)[imgpos[pos[i]]].innerHTML = "";
    
                document.getElementsByClassName(c)[arr[i]].innerHTML = `<img src="https://cdn.pixabay.com/photo/2013/07/12/13/27/queen-147057_1280.png" alt="" height="30px">`;
                imgpos[pos[i]] = arr[i];
                
            }

            if (i == arr.length-1){
                document.getElementById('btn').style.visibility = 'visible';
                console.log (counter);
                if (counter == imgpos.length){
                    let x = document.getElementById('errmsg');
                    x.innerText = "Queens Placed Successfully!";
                    x.style.top = "100px";

                    setTimeout(() => {
                        x.style.top = "0px";
                    },1800);
                }
                else{
                    let x = document.getElementById('errmsg');
                    x.innerText = "It is not possible to place them!";
                    x.style.top = "100px";

                    setTimeout(() => {
                        x.style.top = "0px";
                    }, 1800);
                }
            }
        }, timing*i);
    }
}