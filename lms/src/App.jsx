import React from 'react'

function App() {
  return (
    // <div><h1 className='text-red-800'>inam</h1></div>
    <div>
<button class="bg-blue-500 ...">Button A</button>
<button class="bg-cyan-500 ...">Button B</button>
<button class="bg-pink-500 ...">Button C</button>
Save changes
<button class="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 ...">
  Save changes
</button>
<h1 className='text-8xl text-green-500 shadow-amber-900 blur-sm'>hi</h1>
    <div className='w-full h-96 bg-blue-500 flex justify-around items-center flex-wrap'>
    <div className='w-72 bg-amber-400 h-80'></div>
    <div className='w-72 bg-amber-400 h-80'></div>
    <div className='w-72 bg-amber-400 h-80'></div>
    {/* <div className='w-72 bg-amber-400 h-80'></div> */}

    </div>
    <div class="forced-color-adjust-none md:forced-color-adjust-auto ...">
      <form>
  <fieldset class="forced-color-adjust-none lg:forced-color-adjust-auto ...">
    <legend>Choose a color:</legend>
    <select class="hidden lg:block">
      <option value="White">White</option>
      <option value="Gray">Gray</option>
      <option value="Black">Black</option>
    </select>
    <div class="lg:hidden">
      <label>
        <input class="sr-only" type="radio" name="color-choice" value="White" />
        {/* <!-- ... --> */}
      </label>
      {/* <!-- ... --> */}
    </div>
  </fieldset>
</form>
</div>

    </div>
    
  )
}

export default App