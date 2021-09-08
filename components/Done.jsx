export const Done = (props) => {

    const{ inDoneTodos, onClickReturn, onClickDoneDelete} = props

    return(
        <div class="bg-blue-200 p-4 mt-5">
           <h2 class="text-center text-2xl">Done</h2>

          <ul class="ml-5">

              {inDoneTodos.map((todo,index) => {
                return(
                  <div key={todo} class="flex items-center mt-3">
                    <li class="font-medium list-decimal list-outside">{todo}</li>
                    <button class="rounded-xl bg-purple-400 text-gray-100 px-4 ml-4" onClick={() => {onClickReturn(index)}}>Return</button>
                    <button class="rounded-xl bg-red-600 text-gray-100 px-4 ml-2" onClick={() => onClickDoneDelete(index)}>Delete</button>
                </div> 
                )
                })}
          </ul>
      </div>
    )
}