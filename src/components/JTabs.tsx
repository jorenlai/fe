import { useState } from "react";
import styled from "styled-components";

const StyledLabel=styled.label`
    xborder:1px solid gray;
    border-bottom: 0;
    border-radius: 6px 6px 0 0;
    padding: 5px 12px 2px 12px;
    user-select: none;
    font-weight: bold;
`
const Tab=({ 
        label 
        ,selectedIndex
        ,setSelectedIndex
        ,index
    }: { 
        label: string 
        ,selectedIndex:any
        ,setSelectedIndex:any
        ,index:number
    })=>{

    const selected=selectedIndex==index
    return <StyledLabel 
        style={selected?{
            cursor:'default'
            ,background:'#ffffff'
            ,color:'#098df0'
        }:{
            cursor: 'pointer'
            ,background:'#d6d6d6'
            ,color:'#6b6b6b'
            ,boxShadow: '#565656 0px -10px 5px -10px inset'
        }}
        onClick={
            selected
            ?()=>{}
            :()=>{
                setSelectedIndex(index)
            }
        }
    >
        {label}
    </StyledLabel>
}


const StyledContent=styled.div`
    height: 100%;
    overflow: overlay;
`
const Content=({ type, isSelected }: { type: any, isSelected:boolean })=>{
    return <StyledContent
        className={'j-tabs-content'}
        style={{
            display:isSelected?'block':'none'
        }}
    >{type}</StyledContent>
}




const StyledLabels=styled.div`
    display: flex;
    justify-content: space-between;
    padding:0  20px;

    > main{
        gap:4px;
        display: flex;
    }
    > section{
        flex:1;
        justify-items: end;
        user-select: none;
    }
`
const Labels=({ 
        tabs
        ,right 
        ,selectedIndex
        ,setSelectedIndex
    }:{ 
        tabs: any[]
        ,right:any 
        ,selectedIndex:any
        ,setSelectedIndex:any
    })=>{

    return <StyledLabels
        className={'j-labels'}
    >
        <main>
            {tabs.map((tab,index)=>{
                return <Tab {...tab} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} index={index} key={index}/>
            })}
        </main>
        <section>{right}</section>
    </StyledLabels>
}



const StyledTabs=styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`

const StyledContents=styled.div`
    border-radius: 6px;
    background:#ffffff;
    color:black;
    flex:1;
    width:100%;
    overflow: hidden;
    padding:20px ;
`
const Contents=({ tabs,selectedIndex }: { tabs: any[],selectedIndex:any})=>{
    return <StyledContents
        className={'j-tabs-contents'}
    >
        {tabs.map((tab,index)=>{
            return <Content {...tab} isSelected={selectedIndex==index} key={index}/>
        })}
    </StyledContents>
}
export default function JTabs({ tabs,right,style }: { tabs: any[],right:any,style?:any }){
    const [selectedIndex,setSelectedIndex]=useState(tabs?.length>0?0:null)
    return <StyledTabs style={style}
        className={'j-tabs'}
    >
        <Labels tabs={tabs} right={right} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
        <Contents tabs={tabs} selectedIndex={selectedIndex}/>
    </StyledTabs>
}