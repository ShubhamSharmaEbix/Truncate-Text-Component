import TextTruncate from 'react-text-truncate';
import { useState } from 'react';



// const TruncateText = (props)=>{
// 	const [hasReadMoreOn,toggleReadMore] = useState(true);
//     const truncateText = hasReadMoreOn?<span onClick={()=>toggleReadMore(false)} style={{color : '#337ab7', textDecoration : 'underline', cursor : 'pointer'}}>{props.readMoreText}</span>:
//     <span onClick={()=>toggleReadMore(true)} style={{color : '#337ab7', textDecoration : 'underline', cursor : 'pointer'}}>{props.readLessText}</span>

//     return (
//     	hasReadMoreOn?<TextTruncate
//                             containerClassName={props.containerClass}
//                             line={props.line}
//                             element={props.HTMLElement}
//                             truncateText='...'
//                             text={props.text}
//                             textTruncateChild={truncateText}/>:
//                             <td className='text-center w-25'>
//                                 {props.text}
//                                 &nbsp;
//                                 {truncateText}
//                             </td>
//     )

// }

// export default TruncateText;



const TruncateText = (props)=>{

    const [hasReadMoreOn,toggleReadMore] = useState(true);
    const style={'color' : '#337ab7', 'textDecoration' : 'underline', 'cursor' : 'pointer'}


    return (
        <>
            <TextTruncate
                containerClassName={props.containerClass}
                line={hasReadMoreOn?props.line:0}
                element={props.element}
                truncateText='...'
                text={props.text}
                textTruncateChild={<span onClick={()=>{toggleReadMore(!hasReadMoreOn)}} style={style}>{props.truncateText}</span>}
                
            />
        {/*show Read Less text when all lines are shown*/}
            {!hasReadMoreOn&&<span style={style}onClick={()=>{
                    if(!hasReadMoreOn){
                        toggleReadMore(!hasReadMoreOn)
                    }
                }}>Read Less</span>
            }
        </>

    )

}

export default TruncateText;
 