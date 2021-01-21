import Sty from "styled-components";

const S = {};

S.Info = Sty.div`
    display:flex;
    flex-direction: column;
    max-width: 385px;
    width: 100%;
    min-height: 800px;
    height: 100%;
    background: var(--white);
    border-radius:var(--group-border-rd);
    border: 1px solid var(--card-border);
    

    .info__box{
        padding: 0px 20px;
    }

    .info__img{
        background: var(--bg);
        img{
            border-radius: 20px 20px 0px 0px;
            height: 250px;
            width:100%;
            padding: 2px;
        }
    }

    .info__title{
        margin-top: 18px;
        text-align:center;
        font-weight: 600;
        font-size: 22px;
        line-height: 33px;
    }
    .info__subject{
        text-align:center;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.7);
    }
    .info__teacher-row{
        display: flex;
        margin-bottom: 20px;
        align-items: center;
    }
    .info__teacher-title{
        font-weight: 500;
        font-size: 20px;
        color: var(--black);
        line-height: 30px;
        
    }
    .info__teacher-img{
        width: 35px;
        height: 35px;
        border-radius: 50%;
        object-fit: cover;
        cursor: pointer;
    }
    .info__teacher-name{
        font-weight: normal;
        font-size: 12px;
        margin: 0px;
        line-height: 15px;
        margin-left: 10px;
        color: var(--text-unselect);
        cursor: pointer;
    }
    .info__teacher-block{
        margin-right: 50px;
        border-bottom: 1px solid rgba(196, 196, 196, 0.24);
    }

    .info__days-row{
        margin: 10px 0px;
        display: flex;
        justify-content: space-between;
    }

    .info__days-title{
        font-weight: 500;
        font-size: 20px;
        color: var(--black);
        line-height: 30px;
        font-style: normal;
    }

    .info__days-time-box{
        width: 75px;
        height: 20px;
        font-size: 12px;
        line-height: 10px;
        background: #E0E0E0;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .info__checkboxs{
        margin-right: 50px;
        padding-bottom: 40px;
        border-bottom: 1px solid rgba(196, 196, 196, 0.24);
    }

    .ant-checkbox-inner, .ant-checkbox-inner:hover{
        border-radius: 50%;
    }

    .info__icon{
        width: 46px;
        height: 46px;
        border-radius: 50%;
        background-color: var(--main-blue);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .info__footer-box{
        display:flex;
    }
    .info__footer-box:first-child{
        margin-right: 20px;
    }

    .info__num{
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        margin: 0;
    }
    .info__students-label{
        font-weight: normal;
        font-size: 14px;
        line-height: 21px;
        color:var(--sub-text);
    }

    .info__footer-inner{
        padding-left: 14px;
        display:flex;
        flex-direction: column;
        justify-content: center;
    }

    .info__icon-blue{
        background: var(--blue);
    }
    .info__icon-orange{
        background: #F7B055;
    }

    .ant-btn{
        margin: 30px 0 12px 0;
        width: 330px;
        height: 50px;
        border-radius: 48px;
        background: var(--btn-green-bc);
        color: var(--main-green);
        outline: none;
        border:none;
    }

`;

S.Table = Sty.div`
    // min-width: 700px;
    width: calc( 100% - 20px);
    background: var(--white);
    border: 1px solid var(--card-border);
    border-radius: var(--group-border-rd);
    min-height: 800px;
    height: 100%;
    margin-left:20px;
    transition: 1s;
    
`;

export default S;
