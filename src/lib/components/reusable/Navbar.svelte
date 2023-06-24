<script>
	import Metamask from "../auth/Metamask.svelte";

  
  // All on-mount or lifecycle callbacks should be done in their respective components rather than something like Navbar.svelte.

</script>
<nav class="bg-[#0d1821] font-mono">
    <div class="mx-auto max-w-7xl px-2 sm:px-4 md:px-5 justify-between">
      <div class="relative flex h-16 items-center ">
        <span class='font-mono font-[500] text-2xl text-white'>
          fundr
        </span>
        <div class="flex flex-1  justify-between sm:items-stretch sm:justify-center">
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a href='/' class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium hover:scale-[1.06] transition" aria-current="page">Explore</a>
              <a href='/creators' class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:scale-[1.06] transition">Creators</a>
              <a href='/' class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:scale-[1.06] transition">Fundraisers</a>
              <a href='/' class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:scale-[1.06] transition">Events</a>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div class='gap-2 flex flex-wrap'>
            <Metamask/>
          
          </div>

        </div>
      </div>
    </div>
  
    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a href='/' class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
        <a href='/' class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
        <a href='/' class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
        <a href='/' class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
      </div>
    </div>
  </nav>