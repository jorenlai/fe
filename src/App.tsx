import { useEffect } from 'react';
import './App.css'
import JMenu from './components/JMenu';
import JTabs from './components/JTabs'
import styled from "styled-components";
import StudentList from './components/StudentList';
import JFrame from './components/JFrame';
import Link from './components/Link';
import {  useDispatch, useSelector } from 'react-redux';
import {studentActions} from './redux/student'
import { back } from './assets/img';

export const po=console.debug
const StyledMain=styled.div`
	width: 80%;
	height: 100%;
	padding:40px 0;
    display: flex;
	gap: 20px;
	.back{
		display: flex;
		align-items: center;
	}
	
`
function App() {
	const dispatch = useDispatch()
	const studant = useSelector((state:any) => state.student)

	const setStudent=(value:any)=>{
		dispatch(studentActions.setData(value))
	}
	const tabs=[
		{
			name:'studentList'
			,label:'Student List'
			,type:<StudentList value={studant.data} onChange={setStudent}/>
		}
		,{
			name:'group'
			,label:'Group'
			,type:<StudentList value={studant.data} onChange={setStudent} group={5}/>
		}
	]

	async function getData() {
		try {
			const res = await fetch("data/student.json")
			if (!res.ok) {
				throw new Error(`Response status: ${res.status}`)
			}
			const value = await res.json()
			dispatch(studentActions.setData(value))

		} catch (err:any) {
		  	console.error(err.message)
		}
	}

	useEffect(()=>{
		getData()
	},[])

	const count=studant.data?.filter(({name}:{name:string})=>name=='Guest').length ?? 0
	return <StyledMain>
		<JFrame title={`Join 302 Science` } nav={<div className={'back'}><img width={'16px'} src={back}/>Back to Class List</div>}>
			<Link/>
		</JFrame>

		<JFrame title={`302 Science ${studant.data?.length}/${count}` }>		
			<JTabs
				tabs={tabs}
				right={<JMenu/>}
			/>
		</JFrame>
	</StyledMain>
}

export default App
