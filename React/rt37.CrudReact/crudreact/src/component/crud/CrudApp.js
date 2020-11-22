import React, { Component } from 'react'
import CrudList from './CrudList'
import CrudInput from './CrudInput'

class CrudApp extends React.Component {

    state = {
        user: {},
        list: [
            { id: 1, name: "슈퍼맨", power: 100 },
            { id: 2, name: "아쿠아맨", power: 300 },
            { id: 3, name: "스파이더맨", power: 500 },
            { id: 4, name: "배트맨", power: 30 },
        ],
    }
    func = {
        //100씩 증가
        doUp(id) {
            let mans = this.state.list.filter((item, index) => {
                if (item.id == id) {
                    return item.power = Number(item.power) + 100;
                }
                return item;
            })
            this.setState({
                ...this.state,
                list: mans,
            })
        },
        doDown(id) {
            let mans = this.state.list.filter((item, index) => {
                if (item.id == id) {
                    return item.power = Number(item.power) - 50;
                }
                return item;
            })
            this.setState({
                ...this.state,
                list: mans,
            })
        },
        doDel(id) {
            //배열에서 삭제 <=>  해당되는 id 값을 제외한 배열 찾기
            let mans = this.state.list.filter((item, index) => {
                if (item.id !== id) {
                    return item;
                }
            })
            this.setState({
                ...this.state,
                list: mans,
            })
        },
        doEdit(newitem) { //map :찾는게 아니라 새롭게 만들어라
            let mans = this.state.list.map((item, index) => {
                if (item.id === newitem.id) {
                    return newitem;
                }
                else {
                    return item;
                }
            })
            this.setState({
                ...this.state,
                list: mans,
            })
        },
        doIns(newitem){
            // this.state.list에서 max(id) 찾기
            const maxid = 0;
            newitem.id = maxid;

            const newlist = [ ...this.state.list, newitem]
            this.setState({
                ...this.state,
                list:newlist
            })
        }
    }
    constructor(props) {
        super()
        // this 바인딩
        this.func.doUp = this.func.doUp.bind(this)
        this.func.doDown = this.func.doDown.bind(this)
        this.func.doDel = this.func.doDel.bind(this)
        this.func.doEdit = this.func.doEdit.bind(this)
        this.func.doIns = this.func.doIns.bind(this)
    }
    componentDidMount() {
        // 마운트 완료 후에  : 페이지 load 될 때 한번
    }
    componentDidUpdate(prevProps, prevState) {
        // 업데이트 완료 후에 : 여러번, state 가 변경될 때마다
    }
    componentWillUnmount() {
        // 언마운트 완료 후에 : 페이지 unload 될 때 한번
    }
    handler = (event) => {
        // 이벤트 핸들러는 화살표 함수로 만들면 this를 bind() 생략해도 된다
        console.log(event.target)//
    }
    render() {
        return (
            <div>
                <CrudInput {...this.func}></CrudInput>
                <CrudList {...this.state}{...this.func}></CrudList>
            </div>
        )
    }
}

export default CrudApp