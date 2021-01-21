import styled from 'styled-components'


const S = {}

S.AddonInput = styled.div`
   
    position: relative;
    height: 52px;
    width: 100%;
    border-radius: 10px;
    color: var(--input-icons);
    outline: none;
    overflow: hidden;
    margin: 10px 0;
    overflow: hidden;
    
    &:hover input {
        border-color: var(--main-green);

    }

    .ant-row.ant-form-item, 
    .ant-col.ant-col-16.ant-form-item-control,
    .ant-form-item-control-input,
    .ant-form-item-control-input-content,
    input {
        position: relative;
        margin: 0;
        height: 100%;
        // width: 100%;
        max-width: 100%;
        border-radius: 10px;
    }

    .ant-col.ant-col-16.ant-form-item-control > div:nth-child(even) {
        display: none !important;
    }

    input:focus {
        border-color: var(--main-green);
    }
    
    .ant-form-item-explain.ant-form-item-explain-error {
        position: absolute;
        top: 100%;
    }
    
    .addon {
        position: absolute;
        right: 0;
        background-color: var(--input-icon);
        width: 54px;
        height: 100%;
        line-height: 54px;
        text-align: center;
        color: var(--white);
        font-size: 18px;
        z-index:10;
    }
`
S.CreateButton = styled.button`
    position: absolute;
    width: calc(50% - 36px);
    right: 24px;
    bottom: 24px;
    height: 52px;
    border-radius: 10px;
    border: none;
    line-height: 52px;
    background: var(--main-green);
    color: var(--white);
    cursor: pointer;
    outline: none;
    text-align: center;
    z-index: 20;

    @media (max-width: 674px) {
        & {
            width: 100%;
            height: 40px;
            line-height: 40px;
            margin-top: 10px;
        }
        
    }
`

S.PasswordInput = styled.div`
    position: relative;
    height: 52px;
    width: 100%;
    border-radius: 10px;
    color: var(--input-icons);
    outline: none;
    overflow: hidden;
    margin: 10px 0;
    overflow: hidden;

    &:hover .ant-input-affix-wrapper.ant-input-password {
        border-color: var(--main-green);

    }

    .ant-row.ant-form-item, 
    .ant-col.ant-col-16.ant-form-item-control,
    .ant-form-item-control-input,
    .ant-form-item-control-input-content,
    .ant-input-affix-wrapper.ant-input-password ,
    input {
        position: relative;
        margin: 0;
        height: 100%;
        // width: 100%;
        max-width: 100%;
        border-radius: 10px;
    }

    .ant-input-affix-wrapper.ant-input-password {
        border-color: none;
    }
    .ant-input-affix-wrapper.ant-input-password:focus {
        border-color: var(--main-green);
    }

    .ant-form-item-explain.ant-form-item-explain-error {
        position: absolute;
        top: 100%;
    }
`


    S.CustimizedTextArea = styled.div`
    position: relative;
    height: 72px;
    width: 100%;
    border-radius: 10px; 

    * {
        margin: 0;
        height: 100%;
    }

    &:hover textarea {
        border-color: var(--main-green);
    }
    
    .ant-col.ant-col-16.ant-form-item-control {
        height: 100%;
        max-width: 100%;
    }

    .ant-form-item .ant-mentions, .ant-form-item textarea.ant-input {
        height: 100%;

    }
    
    textarea {
        border-radius: 10px;
        max-height: 62px;
        
        &:focus {
            box-shadow: none;
            border-color: var(--main-green);
        }
    }
`

export default S