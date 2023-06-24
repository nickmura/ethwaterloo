<script lang="ts">

     interface Project {
      name: string,
      images: string[],
      category: string,
      goal: number,
      progress: string | number,
      donations: string | number,
      country: string,
      location: string,
      timeLeft: string,
      creationDate: string,
      supporters : number
    }
  
   let project:Project = 
    { 
      name: 'knxwledge',
      images: ["https://f4.bcbits.com/img/0020991183_10.jpg" , "https://f4.bcbits.com/img/0020991183_10.jpg" ], 
      category: 'Music producer',
      goal: 0,
      progress: '237',
      donations: 3,
      country: '🇺🇸',
      location: 'Philedelphia',
      timeLeft: '10d',
      creationDate: '2023-06-12',
      supporters: 10
     }
  


</script>


<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->

  
  <main>
    <header class="relative isolate pt-1">
      <div class="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div class="absolute left-16 top-full -mt-16 transform-gpu opacity-50 blur-3xl xl:left-1/2 xl:-ml-80">
          <div class="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#FF80B5] to-[#9089FC]" style="clip-path: polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)"></div>
        </div>
        <div class="absolute inset-x-0 bottom-0 h-px bg-gray-900/5"></div>
      </div>
  
      <div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div class="mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none">
          <div class="flex items-center justify-center basis-2/3 gap-x-6">
            
              <div class="mt-1 text-base font-semibold leading-6 text-gray-900 text-xl"> {project.name}</div>
            
          </div>
          <div class="flex items-center gap-x-4 sm:gap-x-6 basis-1/5">
            <button type="button" class="hidden text-sm font-semibold leading-6 text-gray-900 sm:block">Share</button>
            <a href="#" class="hidden text-sm font-semibold leading-6 text-gray-900 sm:block">favourite </a>
            <a href="#" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send</a>
  
            <div class="relative sm:hidden">
              <button type="button" class="-m-3 block p-3" id="more-menu-button" aria-expanded="false" aria-haspopup="true">
                <span class="sr-only">More</span>
                <svg class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                </svg>
              </button>
  
             
              <div class="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="more-menu-button" tabindex="-1">
                <!-- Active: "bg-gray-50", Not Active: "" -->
                <button type="button" class="block w-full px-3 py-1 text-left text-sm leading-6 text-gray-900" role="menuitem" tabindex="-1" id="more-menu-item-0">Copy URL</button>
                <a href="#" class="block px-3 py-1 text-sm leading-6 text-gray-900" role="menuitem" tabindex="-1" id="more-menu-item-1">Edit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <!-- Project Summary card  -->
        <div class="lg:col-start-3 lg:row-end-1">
          <h2 class="sr-only">Summary</h2>
          <div class="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
            <div>
              <img src="{project.images}">
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
                  <span class="text-sm italic  text-gray-600 basis-3/4 mt-2">{project.supporters} supporters this month</span>
              </div>
            </div>

            <div class="mt-3 border-t border-gray-900/5 px-6 py-3 flex justify-center">
              <button class='px-2 py-2 bg-[#ee4266] border-[#ee4266] text-white border rounded-xl shadow-sm hover:scale-[1.06] transition'>Support</button>
            </div>

          </div>
        </div>
  
        <!-- main media -->
        <div class="-mx-4 px-4 py-8 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:px-16 xl:pb-20 xl:pt-16">
          <h2 class="text-base font-semibold leading-6 text-gray-900"></h2>
          <div class="mt-1">
          <!-- main media -->
          <p>The standard Lorem Ipsum passage, used since the 1500s
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            <br>
            <br>
            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            <br>
            <br>
            1914 translation by H. Rackham
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>

          </div>
        </div>
  
        <div class="lg:col-start-3">
          <!-- Activity feed -->
          <h2 class="text-sm font-semibold leading-6 text-gray-900">Activity</h2>
          <ul role="list" class="mt-6 space-y-6">
            <li class="relative flex gap-x-4">
              <div class="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                <div class="w-px bg-gray-200"></div>
              </div>
              <div class="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                <div class="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
              </div>
              <p class="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span class="font-medium text-gray-900">Chelsea Hagon</span> created the invoice.</p>
              <time datetime="2023-01-23T10:32" class="flex-none py-0.5 text-xs leading-5 text-gray-500">7d ago</time>
            </li>
            <li class="relative flex gap-x-4">
              <div class="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                <div class="w-px bg-gray-200"></div>
              </div>
              <div class="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                <div class="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
              </div>
              <p class="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span class="font-medium text-gray-900">Chelsea Hagon</span> Donated</p>
              <time datetime="2023-01-23T11:03" class="flex-none py-0.5 text-xs leading-5 text-gray-500">6d ago</time>
            </li>
            <li class="relative flex gap-x-4">
              <div class="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                <div class="w-px bg-gray-200"></div>
              </div>
              <div class="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                <div class="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
              </div>
              <p class="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span class="font-medium text-gray-900">Chelsea Hagon</span> sent the invoice.</p>
              <time datetime="2023-01-23T11:24" class="flex-none py-0.5 text-xs leading-5 text-gray-500">6d ago</time>
            </li>
            <li class="relative flex gap-x-4">
              <div class="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                <div class="w-px bg-gray-200"></div>
              </div>
              <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="relative mt-3 h-6 w-6 flex-none rounded-full bg-gray-50">
              <div class="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200">
                <div class="flex justify-between gap-x-4">
                  <div class="py-0.5 text-xs leading-5 text-gray-500"><span class="font-medium text-gray-900">Chelsea Hagon</span> commented</div>
                  <time datetime="2023-01-23T15:56" class="flex-none py-0.5 text-xs leading-5 text-gray-500">3d ago</time>
                </div>
                <p class="text-sm leading-6 text-gray-500">Called client, they reassured me the invoice would be paid by the 25th.</p>
              </div>
            </li>
            <li class="relative flex gap-x-4">
              <div class="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                <div class="w-px bg-gray-200"></div>
              </div>
              <div class="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                <div class="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
              </div>
              <p class="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span class="font-medium text-gray-900">Alex Curren</span> viewed the invoice.</p>
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
              <p class="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span class="font-medium text-gray-900">Alex Curren</span> paid the invoice.</p>
              <time datetime="2023-01-24T09:20" class="flex-none py-0.5 text-xs leading-5 text-gray-500">1d ago</time>
            </li>
          </ul>
  
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
  