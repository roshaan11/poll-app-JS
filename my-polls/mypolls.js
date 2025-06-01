let getData=JSON.parse(localStorage.getItem("polls"))||[];
let currentUser=JSON.parse(localStorage.getItem("currentUser"))||[];
let main=document.getElementById("main-div");


let userPolls=getData.filter(item=>item.userId==currentUser.userId);
console.log(userPolls);

if(userPolls.length==0){
        main.innerHTML+=` <p class="text-xl mt-20 w-full justify-center font-semibold items-center text-gray-600 font-serif flex "><span class="font-bold font-sans"><i class="fa-solid fa-plus mr-2"></i></span>Create polls to show</p>`
}

userPolls.forEach(items=>{
    main.innerHTML+=`
            <div class="flex flex-col shadow-md h-auto py-4 px-8 mt-6 rounded-md justify-start bg-white  border-gray-200 border-2 ">
            <div class="w-full flex justify-between items-center">
                <span id="polltitle" class="text-xl font-bold">${items.pollTitle}</span>
                 <div class="flex items-center gap-4">
                     <i class="fa-regular text-xl hover:text-red-600  fa-trash-can"></i>
                     <i class="fa-regular text-xl hover:text-green-600  fa-pen-to-square"></i>
                 </div>
            </div>
            
            <div class="flex md:flex-row flex-col items-start gap-4 mt-3">
                <div class="flex gap-2 justify-center items-center">
                    <i class="fa-solid text-gray-500 fa-calendar-check"></i>
                    <span id="date" class="text-base font-semibold">${items.timestamp}</span>
                </div>
                <div class="flex gap-2 justify-center items-center">
                    <i class="fa-solid text-blue-500 fa-users"></i>
                    <p  class="text-base font-semibold">0<span> votes</span></>
                    
                </div>
                <div class="flex gap-2 justify-center items-center">
                    <i class="fa-solid fa-tag text-green-500"></i>
                    <p  class="text-base font-semibold">${items.pollOptions.length}<span> Options</span></>
                </div>
            </div>

             <ul class="full flex flex-col md:flex-row  gap-2 mt-8" >
                 ${items.pollOptions.map(item => `
                <li class="flex-1 bg-blue-100 text-blue-500 font-semibold w-full h-auto min-w-15 min-h-5 flex justify-center items-center py-2 px-4 rounded-sm ">
                ${item}
                </li>
            `).join('')}   
             </ul>

        
            <a href="" class="hover:cursor-pointer mt-8 md:mt-6 md:w-30 w-full sm:my-4 px-3  text-md text-center font-semibold text-black py-2 bg-gradient-to-r from-blue-100 to-blue-400 hover:bg-gradient-to-l  rounded-md ">Vote Now</a>
          
            </div>`
})
