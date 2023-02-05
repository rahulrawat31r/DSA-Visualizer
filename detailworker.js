arr = [300, 250, 200, 280, 235];

ele1 = [];
ele2 = [];
ind1 = [];
ind2 = [];
inda = "";
indb = "";
counter = 1;
let run;

function clicksetter (runner){
  run = runner;
  

  
}


function clickrunner (){
  finalsorter (run);
  document.getElementById('rarrow').style.backgroundColor = 'red';

  setTimeout(() => {
    document.getElementById('rarrow').style.backgroundColor = 'black';
  }, 300);
}

// Bubble Sort Area
function BubbleSort(arr) {
  counter = 1;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        ele1.push(arr[j + 1]);
        ele2.push(arr[j]);
        ind1.push(j);
        ind2.push(j + 1);

        // sorthchanger(30,arr[j+1],arr[j],j,j+1,counter);
        // counter ++;
        var temp = arr[j];
        arr[j] = arr[j + 1];
        x = arr[j];
        arr[j + 1] = temp;
      }
    }
  }

  // console.log (arr);
}



// Algo Writer

function algowriter (runner){
   
  if (runner == 'merge'){
      document.getElementById('sname').innerText = 'Merge Sort';
      algo = document.getElementsByClassName('algo')[0].innerHTML = `
      <div class="algimg"><h1>Algorithm</h1></div>
      <span id="one">split each element into partitions of size 1</span>
            <p id="two">recursively merge adjacent partitions</p>
            <p id="three">&nbsp;for i = leftPartIdx to rightPartIdx</p>
            <p id="four">&nbsp;&nbsp; if leftPartHeadValue <= rightPartHeadValue</p>
            <p id="five">&nbsp;&nbsp;&nbsp; copy leftPartHeadValue</p>
            <p id="six">&nbsp;&nbsp; else: copy rightPartHeadValue; Increase InvIdx</p>
            <p id="seven">copy elements back to original array</p>`

        mergeSort(arr,0,4);
        console.log (ele1,ind1)
    
  }

  else if (runner == 'quick'){
    document.getElementById('sname').innerText = 'Quick Sort';
    algo = document.getElementsByClassName('algo')[0].innerHTML = `
    <div class="algimg"><h1>Algorithm</h1></div>
    <span id="one">for each (unsorted) partition</span>
          <p id="two">set first element as pivot</p>
          <p id="three">&nbsp;storeIndex = pivotIndex+1</p>
          <p id="four">&nbsp;for i = pivotIndex+1 to rightmostIndex</p>
          <p id="five">&nbsp;&nbsp if ((a[i] < a[pivot]) or (equal but 50% lucky))</p>
          <p id="six">&nbsp;&nbsp;&nbsp; swap(i, storeIndex); ++storeIndex</p>
          <p id="seven">swap(pivot, storeIndex-1)</p>`
      quickSort (arr,0,4);
  }

  else if (runner == 'insert'){
    document.getElementById('sname').innerText = 'Insertion Sort';
    algo = document.getElementsByClassName('algo')[0].innerHTML = `
    <div class="algimg"><h1>Algorithm</h1></div>
    <span id="one">mark first element as sorted</span>
          <p id="two">for each unsorted element X</p>
          <p id="three">&nbsp;'extract' the element X</p>
          <p id="four">&nbsp;for j = lastSortedIndex down to 0</p>
          <p id="five">&nbsp;&nbsp if current element j > X</p>
          <p id="six">&nbsp;&nbsp;&nbsp; move sorted element to the right by 1</p>
          <p id="seven">&nbsp;&nbsp;break loop and insert X here</p>`
      
     insertionSort (arr);
  }

  else if (runner == 'select'){
    document.getElementById('sname').innerText = 'Selection Sort';
    algo = document.getElementsByClassName('algo')[0].innerHTML = `
    <div class="algimg"><h1>Algorithm</h1></div>
    <span id="one">repeat (numOfElements - 1) times</span>
          <p id="two">&nbsp; set the first unsorted element as the minimum</p>
          <p id="three">&nbsp;for each of the unsorted elements</p>
          <p id="four">&nbsp;&nbsp;if element < currentMinimum</p>
          <p id="five">&nbsp;&nbsp&nbsp;  set element as new minimum</p>
          <p id="six">&nbsp;swap minimum with first unsorted position</p>
         `
      
      selectionSort (arr);
  }


  else if (runner == 'heap'){
    document.getElementById('sname').innerText = 'Heap Sort';
    algo = document.getElementsByClassName('algo')[0].innerHTML = `
    <div class="algimg"><h1>Algorithm</h1></div>
    <span id="one">HeapSort(arr)  </span>
          <p id="two">BuildMaxHeap(arr)</p>
          <p id="three">for i = length(arr) to 2  </p>
          <p id="four">&nbsp;swap arr[1] with arr[i]  </p>
          <p id="five">&nbsp;&nbsp; heap_size[arr] = heap_size[arr] ? 1  </p>
          <p id="six">&nbsp;&nbsp; MaxHeapify(arr,1)    </p>
          
         `

         heapsort(arr);
  }

  else{
    document.getElementById('sname').innerText = 'Bubble Sort';
    BubbleSort (arr);
  }


}


function sorthchanger(timing, lena, lenb, ida, idb, count) {
  setTimeout(() => {
    if (inda != "") {
      document.getElementById(inda).style.backgroundColor = "rgb(255, 208, 0)";
      inda = "";
    }
    if (indb != "") {
      document.getElementById(indb).style.backgroundColor = "rgb(255, 208, 0)";
      indb = "";
    }
    ida++;
    idb++;

    a = "bar" + ida.toString();
    b = "bar" + idb.toString();

    // console.log (lenb);
    c = lena.toString() + "px";
    d = lenb.toString() + "px";
    // console.log (d);

    document.getElementById(a).style.backgroundColor = "red";
    document.getElementById(a).innerText = lena;
    document.getElementById(a).style.height = c;

    document.getElementById(b).style.backgroundColor = "blue";
    document.getElementById(b).style.height = d;
    document.getElementById(b).innerText = lenb;

    inda = a;
    indb = b;
  }, timing * count);
}


// Main sort calculator

window.onload = function (a) {
  window.onkeydown = function (a) {
    if (a.keyCode == 39) {
      // algochanger ();
      document.getElementById('rarrow').style.backgroundColor = 'red';

      setTimeout(() => {
        document.getElementById('rarrow').style.backgroundColor = 'black';
      }, 300);
      // console.log (runner);
      finalsorter(runner);
    }
  };
};

function finalsorter(check) {
  console.log (check);

  if ((check == 'bubble') || (check == 'select') || (check == 'insert') || (check == 'heap') || (check == 'quick')) {
    console.log ('kake');
    if (counter <= ele1.length) {
      sorthchanger(
        30,
        ele1[counter - 1],
        ele2[counter - 1],
        ind1[counter - 1],
        ind2[counter - 1],
        counter
      );
      counter++;
    } else {
      for (i = 0; i < 5; i++) {
        document.getElementsByClassName("bar")[i].style.backgroundColor =
          "#07da07";
        document.getElementById('rarrow').style.display = 'none';
      }
    }
  } 
  else if (check == "merge") {
    
    if (counter <= ele1.length) {
      singlehchanger(ele1[counter - 1], ind1[counter - 1], 20, counter);
      counter++;
    } else {
      for (i = 0; i < 5; i++) {
        document.getElementsByClassName("bar")[i].style.backgroundColor = "#07da07";
      }
    }
  }
}



// for merge sort area

function merge(arr, l, m, r) {
  var n1 = m - l + 1;
  var n2 = r - m;

  var L = new Array(n1);
  var R = new Array(n2);

  for (var i = 0; i < n1; i++) L[i] = arr[l + i];
  for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

  var i = 0;

  var j = 0;

  var k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];

      ele1.push(L[i]);
      ind1.push(k);

      // singlehchanger (L[i],k,100,counter);
      // counter ++ ;
      i++;
    } else {
      arr[k] = R[j];

      ele1.push(R[j]);
      ind1.push(k);
      // singlehchanger (R[j],k,100,counter);
      // counter ++ ;
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = L[i];

    ele1.push(L[i]);
    ind1.push(k);

    // singlehchanger (L[i],k,100,counter);
    // counter ++ ;
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = R[j];
    ele1.push(R[j]);
    ind1.push(k);

    // singlehchanger (R[j],k,100,counter);
    // counter ++ ;
    j++;
    k++;
  }
}



function mergeSort(arr, l, r) {
  if (l >= r) {
    return;
  }
  var m = l + parseInt((r - l) / 2);
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);
}

// mergeSort (arr,0,4);

function singlehchanger(h, ind, timing, count) {
  setTimeout(() => {
    if (inda != "") {
      document.getElementById(inda).style.backgroundColor = "rgb(255, 208, 0)";
      // indc = "";
    }
    ind++;
    console.log ('h ' + h);
    console.log (ind + ' ind');
    a = "bar" + ind.toString();
    b = h.toString() + "px";

    document.getElementById(a).style.height = b;
    document.getElementById(a).style.backgroundColor = "red";
    document.getElementById(a).innerText = h;

    inda = a;
  }, timing * count);
}



// Quick Sort Area

// Quick Sort

function swap2(arr,xp, yp)
{
    // console.log ('kake');

    ele1.push (arr[yp]);
    ele2.push (arr[xp])
    ind1.push (xp)
    ind2.push (yp)

    // sorthchanger(100,arr[yp],arr[xp],xp,yp,counter);
    // counter ++ ;
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

    console.log (arr);
}




// Insertion Sort wala

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

          ele1.push (arr[j+1]);
          ele2.push (arr[j])
          ind1.push (j)
          ind2.push (j+1)

            // sorthchanger(30,arr[j+1],arr[j],j,j+1,counter);
            // counter ++ ;
            arr[j + 1] = arr[j]; 
            arr[j] = key; 
            j = j - 1; 

        } 
    } 
} 



// Selection Sort wala

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
        swap(arr,min_idx, i,200);
    }
}

function swap(arr,xp, yp,timing)
{

    ele1.push (arr[yp]);
    ele2.push (arr[xp])
    ind1.push (xp)
    ind2.push (yp)
    // console.log ('kake');
    // sorthchanger(timing,arr[yp],arr[xp],xp,yp,counter);
    // counter ++ ;
    var temp = arr[xp];

    arr[xp] = arr[yp];

    

    arr[yp] = temp;


   
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
            swap (arr,i,largest,100);
 
            
            heapify(arr, N, largest);
        }
    }