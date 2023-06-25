<script lang="ts">

  import { projects, type Project } from '$lib/config'
  let project:Project = projects[1];


  let supportValue =  0

</script>




  
  <main>
    <header class="relative isolate pt-1">
      
  
      <div class="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8">
        <div class="mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none">
          

        </div>
      </div>
    </header>
  
    <div class="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <!-- Project Summary card  -->
        <div class="lg:col-start-3 lg:row-end-1">
          <h2 class="sr-only">Summary</h2>
          <div class="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
            <div class="flex justify-center p-10">
              
              <img src="{project.images[0]}" alt='no'>
            </div>
            <div class="h-full w-full pt-15 pl-5">

              <div class="mt-1 text-base font-semibold leading-6 text-gray-900 py-3">{project.name}</div>


              <span aria-hidden="true" class="text-sm text-gray-600">{project.category}</span>

              <div id='location' class=''>
                <span class="text-sm text-gray-500 mt-3">
                  <span class=''> 
                    {project.country}
                  </span>{project.location}
                </span>
              </div>

              <div class="flex flex-row">
                  <span class="text-sm italic  text-gray-600 basis-3/4 mt-2">{project.subscribers.length} supporters this month</span>
              </div>
            </div>

            <div class="mt-3 border-t border-gray-900/5 px-6 py-3 ">
              <button class='px-2 py-2 bg-[#9649cb] border-[#9649cb] text-white border rounded-xl shadow-sm hover:scale-[1.06] transition'>Support</button>
            
            </div>
            
          </div>
          
        </div>
  
        <!-- main media -->
        <div class="-mx-4 px-4 py-8 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:px-16 xl:pb-20 xl:pt-16">
          
          <div class="mt-1">
          <!-- main media -->

          <p class="text-m font-bold">{project.name}</p>
          <p>My backyard is super old and on a slope, I want to landscape so my family can enjoy it. I need some finacial support.<p/>
          <img class="p-10" src="{project.images[1]}" alt='images'>
            

          <p class="text-m font-bold pt-10"> The Goal</p>  

          I want to upgrade my planter aswell as make a path for walking. I also want to create and area where we can hangout and have a potential fire.  
          

          <div> </div>

          
          <p class="text-m font-bold pt-10">The Implementation</p>    
          I was able to use the funds to upgrade the planters and add a patio.

          
          <img class="p-10" src={project.images[2]} alt=''>

           

            
          </div>
        </div>
  
        <div class="lg:col-start-3">
          <!-- Activity feed -->
          <h2 class="text-sm font-semibold leading-6 text-gray-900">Activity</h2>
          
            <li class="relative flex gap-x-4">
              <div class="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                <div class="w-px bg-gray-200"></div>
              </div>
              <div class="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                <div class="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
              </div>
              <p class="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span class="font-medium text-gray-900">Anonymous</span> Donated $125</p>
              <time datetime="2023-01-23T10:32" class="flex-none py-0.5 text-xs leading-5 text-gray-500">7d ago</time>
            </li>
            <li class="relative flex gap-x-4">
              <div class="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                <div class="w-px bg-gray-200"></div>
              </div>
              <div class="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                <div class="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
              </div>
              <!-- <p class="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span class="font-medium text-gray-900">0x889...gjk9</span> Donated $30</p> -->
              <time datetime="2023-01-23T11:03" class="flex-none py-0.5 text-xs leading-5 text-gray-500">6d ago</time>
            </li>
            <li class="relative flex gap-x-4">
              <div class="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                <div class="w-px bg-gray-200"></div>
              </div>
              <div class="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                <div class="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
              </div>
              <!-- <p class="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span class="font-medium text-gray-900">Chelsea Hagon</span> Donated $400</p>
              <time datetime="2023-01-23T11:24" class="flex-none py-0.5 text-xs leading-5 text-gray-500">6d ago</time> -->
            </li>
            <li class="relative flex gap-x-4">
              <div class="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                <div class="w-px bg-gray-200"></div>
              </div>
              <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="relative mt-3 h-6 w-6 flex-none rounded-full bg-gray-50">
              {#each project.comments as comment}
                <div class="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200">
                  <div class="flex justify-between gap-x-4">
                    <div class="py-0.5 text-xs leading-5 text-gray-500"><span class="font-medium text-gray-900 truncate w-8">{comment.address.substring(0,4)}..{comment.address.substring(37,42)}</span> commented</div>
                    <time datetime="2023-01-23T15:56" class="flex-none py-0.5 text-xs leading-5 text-gray-500">3d ago</time>
                  </div>
                  <p class="text-sm leading-6 text-gray-500">Wow! This is such a transform. Im glad you can now enjoy your backyard.</p>
                </div>
              {/each}
            </li>
            <li class="relative flex gap-x-4">
              <div class="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                <div class="w-px bg-gray-200"></div>
              </div>
              <div class="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                <div class="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
              </div>
              <p class="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span class="font-medium text-gray-900">Alex Curren</span> Donated $100</p>
              <time datetime="2023-01-24T09:12" class="flex-none py-0.5 text-xs leading-5 text-gray-500">2d ago</time>
            </li>
            <li class="relative flex gap-x-4">
              <div class="absolute left-0 top-0 flex w-6 justify-center h-6">
                <div class="w-px bg-gray-200"></div>
              </div>
              <div class="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                <svg class="h-6 w-6 text-indigo-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                </svg>
              </div>
              <p class="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span class="font-medium text-gray-900">{project.name}</span> Was succesfully funded.</p>
              <time datetime="2023-01-24T09:20" class="flex-none py-0.5 text-xs leading-5 text-gray-500">1d ago</time>
            </li>

  
          <!-- New comment form -->
          <div class="mt-6 flex gap-x-3">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-6 w-6 flex-none rounded-full bg-gray-50">
            <form action="#" class="relative flex-auto">
              <div class="overflow-hidden rounded-lg pb-12 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                <label for="comment" class="sr-only">Add your comment</label>
                <textarea rows="2" name="comment" id="comment" class="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Add your comment..."></textarea>
              </div>
  
              <div class="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                <div class="flex items-center space-x-5">
                  <div class="flex items-center">
                    <button type="button" class="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
                      <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                      </svg>
                      <span class="sr-only">Attach a file</span>
                    </button>
                  </div>
                  
                </div>
                <button type="submit" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Comment</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
  