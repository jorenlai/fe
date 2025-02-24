import styled from "styled-components"
import JAdjuster from "./JAdjuster"
import { po } from "../App"

const StyledGroup=styled.main`
    border:1px solid #78ca41;
    padding:20px;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    border-radius: 8px;
    gap: 22px;
`
const Group=({
    value
    ,indexG
    ,group
    ,digi
    ,changeValue
}:{
    value:any[]
    ,indexG:number
    ,group:number
    ,digi:number
    ,changeValue:any
})=>{
    return <StyledGroup>
        {    
            value?.map((record,index)=>{
                const indexNum=indexG*group+index
                const paddedIndex = String(indexNum+1).padStart(digi, '0');
                return <JAdjuster {...record} index={index} paddedIndex={paddedIndex} key={index}
                    onChange={(value:number)=>{
                        changeValue(value,indexNum)
                    }}
                />
            })
        }
    </StyledGroup>
}

const StyledStudentList=styled.main<{ $group: number }>`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$group})=>$group==0?'100px, 1fr':`100px, ${($group*100)+(($group+1)*22)}px `}));
    padding-right: 10px;
    gap: 22px;
`
export default function StudentList(
    {
        value
        ,onChange
        ,group=0
    }:{
        value:any[]
        ,onChange:any
        ,group?:number
    }){

    const changeValue=(inputValue:number,index:number)=>{
        const _value=[...value]
        po('changeValue',value)
        po('index',index)
        po('value[index].value',value[index].value)
        _value[index]={
            ..._value[index]
            ,value:inputValue
        }
        onChange(_value)
    }

    const digi=value?.length.toString().length ?? 0
    return <StyledStudentList
        $group={group}
    >
        {
            group==0
                ?value?.map((record,index)=>{
                    const paddedIndex = String(index+1).padStart(digi, '0');
                    return <JAdjuster {...record} index={index} paddedIndex={paddedIndex} key={index}
                        onChange={(value:number)=>{
                            changeValue(value,index)
                        }}
                    />
                })
                :value?.reduce((aco,record,index)=>{
                    const groupNum:number=Math.floor(index/group)
                    if(aco[groupNum]==null){
                        aco[groupNum]=[]
                    }
                    aco[groupNum].push(record)
                    return aco
                },[])
                .map((value:any,indexG:number)=>{
                    return <Group group={group} indexG={indexG} value={value} digi={digi} changeValue={changeValue}/>
                })
        }
    </StyledStudentList>
}