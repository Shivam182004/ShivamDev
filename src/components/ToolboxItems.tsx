import { TechIcn } from "@/components/TechIcons";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";
export const ToolboxItems = ({toolBoxItems, className, itemWrapperClassName,}:{
    toolBoxItems:{
        title:string;
        iconType : React.ElementType;
    }[];  
    className?: string;
    itemWrapperClassName?:string;
}) => {
  return (
    <div className={twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",className)}>
     
        <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6 ", itemWrapperClassName)}>

        {[...new Array(2)].fill(0).map((_,index)=>(
        <Fragment key={index}>
         {toolBoxItems.map(item=>(
      <div key={item.title} className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">
     <TechIcn component={item.iconType}/>
    <span className="font-semibold">{item.title}</span>
      </div>
    ))}
        </Fragment>
      ))}
   
     </div>
     </div>
  )
}

 