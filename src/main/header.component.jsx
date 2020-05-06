'use strict';

export default class Header_main extends NyaUI.COMPONENT {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="header_main__inner">
                <div className="content">
                    <h2> Test App </h2>
                    <h5> Hello! im a Test App from Nya ^.^ </h5>
                    <label> Я создан для демонстрации и проверки возможностей Nymphea Core & UI</label>
                </div>
            </div>
        )
    }
}