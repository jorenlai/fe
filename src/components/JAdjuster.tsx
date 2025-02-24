import styled from "styled-components"

const StyledJAdjuster=styled.main<{ disabled: boolean }>`
    border:1px solid ${({disabled})=>disabled?'#c4c9c8':' #098df0'};
    
    white-space: nowrap;
    height: 100px;

    border-radius: 5px;
    display: flex;
    flex-direction: column;

    > label{
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${({disabled})=>disabled?'#c4c9c8':' #098df0'};
        color:#ffffff;
        font-size:14px;
    }

    main{
        flex:1;
        display: flex;
        justify-content: center;
        align-items: center;
        color:${({disabled})=>disabled?'#c4c9c8':'black'};
        border-bottom: 1px solid ${({disabled})=>disabled?'#c4c9c8':' #098df0'};
    }

    > section{
        display: flex;
        justify-content: space-between;
        padding:4px ;
        color:${({disabled})=>disabled?'#c4c9c8':'black'};
        button{
            padding:0 6px;
            border-radius: 3px;
        }
        button:disabled{
            background:#c4c9c8 !important;
        }
        font-size:12px;
    }
`

export default function JAdjuster({
    paddedIndex
    ,value
    ,name
    ,onChange
}:{
    paddedIndex:string
    ,value:number
    ,name:string
    ,onChange:any
    ,disabled:boolean
    ,style:any
    ,props:any
}){
    const disabled:boolean=name=='Guest'
    return <StyledJAdjuster
        disabled={disabled}
    >
        <label>{paddedIndex}</label>
        <main>{name}</main>
        <section>
            <button
                disabled={value<1 || disabled}
                style={{background:'#f1466e'}}
                onClick={()=>{
                    onChange?.(value-1)
                }}
            >-1</button>
            <div style={{padding:'0 12px',textAlign:'center'}}>{value}</div>
            <button
                disabled={disabled}
                style={{background:'#78ca41'}}
                onClick={()=>{
                    onChange?.(value+1)
                }}
            >+1</button>
        </section>
    </StyledJAdjuster>
}