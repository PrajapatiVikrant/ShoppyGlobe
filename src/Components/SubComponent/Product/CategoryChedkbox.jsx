export default function CategoryCheckbox({category}){
    return (
       <li className="text-2xl flex items-center gap-2">
        <input className="w-[20px] h-[25px]" type="checkbox" />
        <span>{category}</span>
       </li>
    )
}