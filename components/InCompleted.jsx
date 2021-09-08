export const Incompleted = (props) =>{

    const { inCompletedTodos, onClickDone, onClickDelete} = props;

    return(
        <div class="bg-yellow-100 p-4 mt-5">
            <h2 class="text-center text-2xl">Things to do</h2>

            <ul class="ml-5">
            {inCompletedTodos.map((todo,index)=> {
                return(
                <div key={todo} class="flex items-center mt-3">
                    <li class="font-medium list-decimal list-outside">{todo}</li>
                    <button class="rounded-xl bg-blue-600 text-gray-100 px-4 ml-4" onClick={() =>{onClickDone(index)}}>Done</button>
                    <button class="rounded-xl bg-red-600 text-gray-100 px-4 ml-2" onClick={() => onClickDelete(index)}>Delete</button>
                </div> 
                )
            })}

            </ul>
        </div>
    )
}