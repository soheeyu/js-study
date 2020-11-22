import React, { Component } from 'react'

class CrudInput extends React.Component {

    state = {

    }
    constructor(props) {
        super()
        // this 바인딩
        this.refUserName = React.createRef()
        this.refUserPower = React.createRef()
    }
    handler = (event) => {
        // 이벤트 핸들러는 화살표 함수로 만들면 this를 bind() 생략해도 된다
        console.log(event.target)//
    }
    render() {
        return (
            <div>
                <h1>Creat Read Update Delete</h1>
                <div>
                    <label htmlFor="">Name : </label>
                    <input type="text" name="name" ref={this.refUserName} />
                </div>
                <div>
                    <label htmlFor="">Power : </label>
                    <input type="text" name="power" ref={this.refUserPower} />
                </div>
                <button onClick={this.doIns}>Add</button>
                <hr />
            </div>
        )
    }
}

export default CrudInput