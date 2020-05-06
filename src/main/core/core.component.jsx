'use strict';

export default class COREMainVIEW extends NyaUI.COMPONENT {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="page__inner core">
                <div className="modules">
                    <div className="append_me">
                        <h3>Как подключить?</h3>
                        <ul>
                            <li>JS -  <code>{'<sript type="text/javascript" src="nymphea/public/nymphea.v_0.0.5.js"></script>'} </code></li>
                        </ul>
                    </div>
                    <div className="route__wrapper" ref="route"></div>
                    <div className="services__wrapper" ref="services"></div>
                    <div className="class__wrapper" ref="class"></div>
                    <div className="values__wrapper" ref="values"></div>
                    <div className="cast__wrapper" ref="cast"></div>
                    <div className="alerty__wrapper" ref="alerty"></div>
                    <div className="devOnly__wrapper" ref="devOnly"></div>
                    <div className="cl__wrapper" ref="cl">console.log замена</div>
                </div>
            </div>
        )
    }
}
