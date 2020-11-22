import React, { Component } from 'react'

class CrudListItem extends React.Component {

    state = {
        isEditMode: false,
    }
    constructor(props) {
        super()
        // this 바인딩

        //ref 생성
        this.refUserName = React.createRef()
        this.refUserPower = React.createRef()
    }

    doDel = (event) => {
        // 이벤트 핸들러는 화살표 함수로 만들면 this를 bind() 생략해도 된다
        console.log(event.target)//
        // CrudApp.doDel() 메서드 호출하기 ( 콜백 받으려면 자식에게 만들어 놓고 값 받기 )
        const item = this.props.item;
        this.props.doDel(item.id); //CrudApp.doDel()

    }
    doUp = (event) => {
        // 이벤트 핸들러는 화살표 함수로 만들면 this를 bind() 생략해도 된다
        console.log(event.target)//
        //CrudApp.doUp() 메서드 호출하기
        const item = this.props.item;
        this.props.doUp(item.id); //CrudApp.doUp()

    }
    doDown = (event) => {
        // 이벤트 핸들러는 화살표 함수로 만들면 this를 bind() 생략해도 된다
        console.log(event.target)//
        //CrudApp.doDown() 메서드 호출하기
        const item = this.props.item;
        this.props.doDown(item.id); //CrudApp.doDown()

    }
    doEdit = (event) => {
        // 이벤트 핸들러는 화살표 함수로 만들면 this를 bind() 생략해도 된다
        console.log(event.target)//
        const item = this.props.item; // Crudlist.item
        //this.props.doEdit(item.id); //CrudApp.doEdit()
        //this.state.isEditMode로 바꾼다
        // ! not 으로 버튼을 클릭할 때마다 반전되게 하는
        this.setState({
            ...this.state,
            isEditMode: !this.state.isEditMode
        })
    }
    doSave = (event) => {
        const item = this.props.item;

        const newitem = {
            id: item.id,
            name: this.refUserName.current.value,
            power: Number(this.refUserPower.current.value),
        }

        this.props.doEdit(newitem)

        //this.state.isEditMode로 바꾼다
        // ! not 으로 버튼을 클릭할 때마다 반전되게 하는
        this.setState({
            ...this.state,
            isEditMode: !this.state.isEditMode
        })
    }

    render() {
        const { item } = this.props
        const formView = (
            <tr className="">
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.power}</td>
                <td>
                    <button onClick={this.doDel}>Del</button>
                    <button onClick={this.doUp}>Power Up</button>
                    <button onClick={this.doDown}>Power Down</button>
                    <button onClick={this.doEdit}>Edit</button>
                </td>
            </tr>
        )

        //화면 수정
        const formEdit = (
            <tr className="">
                <td>{item.id}</td>
                <td> <input type="text" name="name" ref={this.refUserName} defaultValue={item.name} /></td>
                <td> <input type="text" name="power" ref={this.refUserPower} defaultValue={item.power} /></td>
                <td>
                    <button onClick={this.doDel}>Del</button>
                    <button onClick={this.doUp}>Power Up</button>
                    <button onClick={this.doDown}>Power Down</button>
                    <button onClick={this.doSave}>Save</button>
                </td>
            </tr>
        )

        if (this.state.isEditMode === true) {
            return formEdit
        }
        else {
            return formView
        }
    }
}

export default CrudListItem