import Sty from "styled-components";

const S = {};

S.Wrapper = Sty.div`
 
.ant-tabs {
    padding: 0 20px 0 20px;
    margin-top: 50px;
    width: 100%;
}

.ant-tabs-tab:hover{
    color: var(--main-green);
}
.ant-tabs-tab-btn{
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color:var(--text-unselect);

}
.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{
    color: var(--main-green);
    
}
.ant-tabs-ink-bar{
    background: var(--main-green);
}

.ant-tabs-nav{
    margin-left: 30px;
}

`;

export default S;
