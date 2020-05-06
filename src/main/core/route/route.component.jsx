'use strict';

export default class COREMainVIEW extends NyaUI.COMPONENT {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="main_view">
                <div className="main__inner">
                    <div className="header__wrapper" ref="header"> 
                    </div>

                    
                    <div className="page__wrapper" ref="page"></div>
                    
                </div>
            </div>
        )
    }
}
