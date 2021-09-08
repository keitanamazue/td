
export const Input = (props) =>{
    const {todoText, onChangeTodoText, onClickAdd} = props;

    return(
        <div class="flex items-center bg-green-200 p-4">
            <input class="px-2 md:ml-5 mr-5 outline-none" type="text" value={todoText} onChange={onChangeTodoText}/>
            <button class="rounded-xl bg-gray-300 text-gray-600 px-4" onClick={onClickAdd}>Add</button>
        </div>
    )
}