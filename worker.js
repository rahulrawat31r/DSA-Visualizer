var arr = [];
let inda = "";
let indb = "";
let counter = 0;
let indc = "";
let issort = 0;
let gana = document.getElementById('done');
let start = document.getElementById('start');
let wrong = document.getElementById('wrong');

// input setter for detials
function detailsetter (){
    ab = document.getElementById('sortselectoption').value;

    if (ab == '1'){
        document.getElementById('valuewala').value = 'bubble';
    }

    else if (ab == '2'){
        document.getElementById('valuewala').value = 'merge';
    }

    else if (ab == '3'){
        document.getElementById('valuewala').value = 'quick';
    }
    else if (ab == '4'){
        document.getElementById('valuewala').value = 'insert';
    }

    else if (ab == '5'){
        document.getElementById('valuewala').value = 'select';
    }

    else if (ab == '6'){
        document.getElementById('valuewala').value = 'heap';
    }
}





function arrsetter (){
    for (i = 0;i<50;i++){
        let x = Math.floor((Math.random() * 503) + 201)
        arr.push (x);
    }
    
    // console.log (arr);
}

arrsetter ();

function  randomizing(){
    document.getElementById('average').innerText = 'NA';
    // gana.play ();
    start.play();
    issort = 0;
    if (inda != ""){
        document.getElementById(inda).style.backgroundColor = 'rgb(255, 208, 0)';
        inda = "";
    }

    if (indb != ""){
        document.getElementById(indb).style.backgroundColor = 'rgb(255, 208, 0)';
        indb = "";

    }

    for (i=0;i<50;i++){
        let x = Math.floor ((Math.random()*503)+201);
        arr[i] = x;
        
        hchanger (arr[i],i,0,50);
    }


}

randomizing ();

function hchanger (height,id,check,time){
    setTimeout(() => {
        
        y = (id+1).toString();
        z = 'bar'+y;
    
    
        a = height.toString();
        a = a + 'px';
        k = (0.1).toString() + 's';
        document.getElementById(z).style.height = a;
        document.getElementById(z).style.transitionDuration =k;
        // console.log (inda);
        if (check){
            if (inda == ""){
                document.getElementById(z).style.backgroundColor = 'red';
                
                inda = z;

                if (indb == inda){
                    inbd == "";
                }
            }
    
            else{
    
                document.getElementById(inda).style.backgroundColor = 'rgb(255, 208, 0)';
                document.getElementById(z).style.backgroundColor = 'red';
                // console.log ('chala');
                inda = z;

                if (indb == inda){
                    inbd == "";
                }
            }
        }
    }, time*id);


}

function sorthchanger (timing, lena, lenb,ida,idb,count){
    
    setTimeout(() => {
        if (inda != ""){
            document.getElementById(inda).style.backgroundColor = 'rgb(255, 208, 0)';
            inda = "";
        }
        if (indb != ""){
            document.getElementById(indb).style.backgroundColor = 'rgb(255, 208, 0)';
            indb = "";
        }
        ida++;
        idb++;

        a = 'bar' + ida.toString();
        b = 'bar' + idb.toString();
    
        // console.log (lenb);
        c = lena.toString() + 'px';
        d = lenb.toString() + 'px';
        // console.log (d);
    
        document.getElementById(a).style.backgroundColor = 'red';
        document.getElementById(a).style.height = c;
    
        document.getElementById(b).style.backgroundColor = 'blue';
        document.getElementById(b).style.height = d;
    
        inda = a;
        indb = b;
        
    }, timing*count);
}

function singlehchanger (h, ind,timing,count){
    
    setTimeout(() => {
        if (inda != ""){
            document.getElementById(inda).style.backgroundColor = 'rgb(255, 208, 0)';
            indc = "";
        }
        ind++;
        a = 'bar' + ind.toString();
        b = h.toString() + 'px';
    
        document.getElementById(a).style.height = b;
        document.getElementById(a).style.backgroundColor = 'red';
        inda = a;
        
    }, timing*count);
}

// sorting bar function

function sortit (){

    if (issort){
        wrong.play ();
        document.getElementById('errmsg').style.top = '100px';
        
        setTimeout(() => {
            document.getElementById('errmsg').style.top = '0px';
            
        }, 2300);
        return;
    }

    document.getElementById('dabba').scrollIntoView();

    sort = document.getElementById('sortselectoption').value;
    // console.log (sort);
    if (sort == 1){
        document.getElementById('average').innerText = 'O ( n^2 )';
        BubbleSort (arr);
        issort = 1;

        gana.play ();
        
    }

    else if (sort == 5){
        document.getElementById('average').innerText = 'O ( n^2 )';
        selectionSort (arr);
        issort = 1;
        gana.play ();
    }

    else if (sort == 4){
        document.getElementById('average').innerText = 'O ( n^2 )';
        insertionSort (arr);
        issort = 1;
        gana.play ();
    }

    else if (sort == 3){
        document.getElementById('average').innerText = 'O ( n log (n) )';
        counter = 1;
        quickSort(arr,0,(arr.length-1));
        issort = 1;
        gana.play ();
    }

    else if (sort == 2){
        document.getElementById('average').innerText = 'O ( n log (n) )';
        counter = 1;
        mergeSort (arr,0,arr.length-1);
        issort = 1;
        gana.play ();
    }

    else if (sort == 6){
        document.getElementById('average').innerText = 'O ( n log (n) )';
        counter = 1;
        heapsort (arr);
        issort = 1;
        gana.play ();
    }
}

// sorting functions

// Bubble sort

function BubbleSort(arr){
    counter = 1;

    for(var i = 0; i < arr.length; i++){
       
       
      for(var j = 0; j < ( arr.length - i -1 ); j++){
         
        
        if(arr[j] > arr[j+1]){
           
         
        sorthchanger(100,arr[j+1],arr[j],j,j+1,counter);
        counter ++;
          var temp = arr[j]
          arr[j] = arr[j + 1]
          x = arr[j];
          arr[j+1] = temp
          
        }
      }
    }
   
    // console.log (arr);
}


// Selection sort

function swap(arr,xp, yp,timing)
{
    // console.log ('kake');
    sorthchanger(timing,arr[yp],arr[xp],xp,yp,counter);
    counter ++ ;
    var temp = arr[xp];

    arr[xp] = arr[yp];

    

    arr[yp] = temp;


   
}
 
function selectionSort(arr)
{
    counter = 1;
    // arr = [500,400,300,200,100];
    // console.log ('chalgya');
    var n = arr.length;
    var i, j, min_idx;
 
    // One by one move boundary of unsorted subarray
    for (i = 0; i < n-1; i++)
    {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i + 1; j < n; j++)
        if (arr[j] < arr[min_idx])
            min_idx = j;
 
        // Swap the found minimum element with the first element
        swap(arr,min_idx, i,230);
    }
}


// Insertion sort

function insertionSort(arr) 

{ 
    counter = 1;
    let n = arr.length;
    let i, key, j; 
    for (i = 1; i < n; i++)
    { 
        key = arr[i]; 
        j = i - 1; 
   
        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && arr[j] > key)
        { 
            sorthchanger(190,arr[j+1],arr[j],j,j+1,counter);
            counter ++ ;
            arr[j + 1] = arr[j]; 
            arr[j] = key; 
            j = j - 1; 

        } 
    } 
} 



// Quick Sort

function swap2(arr,xp, yp)
{
    // console.log ('kake');
    sorthchanger(150,arr[yp],arr[xp],xp,yp,counter);
    counter ++ ;
    var temp = arr[xp];

    arr[xp] = arr[yp];

    

    arr[yp] = temp;


   
}

function partition(arr, low, high) {
 
    
    let pivot = arr[high];
 
    
    let i = (low - 1);
 
    for (let j = low; j <= high - 1; j++) {
 
       
        if (arr[j] < pivot) {
 
            
            i++;
            swap2(arr, i, j);
        }
    }
    swap2(arr, i + 1, high);
    return (i + 1);
}
 

function quickSort(arr, low, high) {
    
    if (low < high) {
 
       
        let pi = partition(arr, low, high);
 
      
        quickSort(arr, low, pi - 1);
        console.log ('a');
        quickSort(arr, pi + 1, high);
    }

    // console.log (arr);
}

// Merge Sort

function merge(arr, l, m, r)
{
    var n1 = m - l + 1;
    var n2 = r - m;
 

    var L = new Array(n1);
    var R = new Array(n2);
 

    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
 

    var i = 0;
 
 
    var j = 0;
 

    var k = l;
 
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            singlehchanger (L[i],k,180,counter);
            counter ++ ;
            i++;
        }
        else {
            arr[k] = R[j];
            singlehchanger (R[j],k,180,counter);
            counter ++ ;
            j++;
        }
        k++;
    }
 
 
    while (i < n1) {
        arr[k] = L[i];
        singlehchanger (L[i],k,180,counter);
        counter ++ ;
        i++;
        k++;
    }
 
   
    while (j < n2) {
        arr[k] = R[j];
        singlehchanger (R[j],k,180,counter);
        counter ++ ;
        j++;
        k++;
    }
}
 


function mergeSort(arr,l, r){
    if(l>=r){
        return;
    }
    var m =l+ parseInt((r-l)/2);
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    merge(arr,l,m,r);
}



// Heap Sort


function heapsort( arr)
    {
        var N = arr.length;
 

        for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
            heapify(arr, N, i);
 
        
        for (var i = N - 1; i > 0; i--) {
         
            swap (arr,0,i,100);
 
        
            heapify(arr, i, 0);
        }
    }
 
   
    function heapify(arr, N, i)
    {
        var largest = i; 
        var l = 2 * i + 1; 
        var r = 2 * i + 2; 
 
    
        if (l < N && arr[l] > arr[largest])
            largest = l;
 
      
        if (r < N && arr[r] > arr[largest])
            largest = r;
 
      
        if (largest != i) {
            swap (arr,i,largest,180);
 
            
            heapify(arr, N, largest);
        }
    }