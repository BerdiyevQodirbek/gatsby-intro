import styled from 'styled-components'

const S = {}

S.StudentWrapper = styled.div`
    width: 65%;
    margin: auto;

    .add__title {
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 48px;
        letter-spacing: 0px;
        text-align: left;

    }

    .add__upload-img {
        display: flex;
        align-items: center;
    }

    .add__form-wrapper {
        padding: 20px 0;
    }

    .firstCustimized {
        margin-bottom: 10px;
    }

    .add__d-flex {
        display: flex;

    }
    
    .weekDays .ant-checkbox-inner{
        border-radius: 50%;
    }
    
    .add__d-flex > div:first-child {
        margin-right: 20px;
    }
    
    
    @media (max-width: 1024px) {
        & {
            width: 90%;
        }
    }
    @media (max-width: 674px) {
        & {
            width: 100%;
        }

        .add__upload-img {
            display: block;
        }

        .add__d-flex{
            flex-direction: column;
        }

        .firstCustimized {
            margin-bottom: 10px;
        }

        .add__title {
            text-align: center
        }

        .label-wrapper {
            height: 120px !important;
        }

        .ant-radio-wrapper {
            font-size: 12px !important;
        }
    }
    
    `
S.CheckboxGroup = styled.div`
        
    padding: 20px 0;
    
    .label-wrapper {
        position: relative;
        height: 140px;
        width: 32%;
        border: 1px solid var(--text-unselect);
        border-radius: 10px;
        overflow: hidden;
        background: transparent;
        transition: 0.5s;
    }
    
    .ant-radio-group.ant-radio-group-outline {
        display: flex;
        color: var(--text-unselect);
        justify-content: space-between;
    }

    .checked {
        background: var(--btn-green-bc);
        color: var(--main-green);
    }
    
    .radio-box {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(0 0 0 0);
        padding-left: 20px;
        opacity: 0;
    }
    
    .check-style {
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 0;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        cursor:pointer;
        left: 0;
        
        & > span {
            font-size: 30px;
            padding-bottom: 10px;
        }
    }

    .ant-radio-wrapper {
        opacity: 0;
    }

    .check-box:checked + .check-style::before {
        content: "";
        width: 8px;
        height: 8px;
        background-color: #0ca36e;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`
S.CameraButton = styled.button`
    height: 88.0412826538086px;
    width: 88.0412826538086px;
    border-radius: 50%;
    border: none;
    background: var(--input-icon);
    color: var(--white);
    cursor: pointer;
    outline: none;

    svg {
        font-size: 30px;
    }

    @media (max-width: 674px) {
        & {
            margin-left: calc(50% - 30px);
            width: 60px;
            height: 60px;
        }
    }
`
S.UploadButton = styled.button`
    height: 52px;
    width: 274px;
    margin-left: 30px;
    border-radius: 10px;
    padding: 14px 60px 14px 60px;
    border: none;
    background: var(--input-icon);
    color: var(--white);
    cursor: pointer;
    outline: none;

    @media (max-width: 674px) {
        & {
            width: 100%;
            height: 40px;
            margin-left: 0px;
            margin-top: 10px;
            padding: 0;
        }
    }
    
`
    
S.UploadInput = styled.input`
    opacity: 0;
    position: absolute;
    top: -50px;

`
    
S.CustomizedInput = styled.div`
   
    position: relative;
    height: 52px;
    width: 100%;
    border-radius: 10px;
    color: var(--input-icons);
    outline: none;
    overflow: hidden;
    margin: 10px 0;

    &:hover input{
        border-color: var(--main-green);
    }
    
    * {
        box-shadow:none;
        height: 100%;
    }

    input {
        transition:1s;
    }

    .ant-input:focus {
        box-shadow: none;
        border-color: var(--main-green);
    }

    .ant-row,ant-form-item {
        height: 100%;
        margin: 0!important;
    }

    .ant-col.ant-col-16.ant-form-item-control {
        margin: 0;
        height: 100%;
        max-width: 100%;
        display: block !important;
    }
    span {
        positiopn: absolute
        height: 104%;
        width: 56px;
        margin-right: -3px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--input-icon);
        color: var(--white)
    }
    .ant-form-item-control-input, .ant-form-item-control-input-content {
        height: 100%;
        
        input, .ant-input-affix-wrapper > input.ant-input {
            height: 100%;
            border-radius: 10px !important;;
        }
    }

    // ****** Customized styles for datePicker *****//
    .ant-picker:hover, .ant-picker-focused {
        border-color: var(--main-green);
    }
    .ant-picker {
        height: 100%;
        width: 100%;
        border-radius: 10px;
        padding: 0 5px;
    }

    @media (max-width: 674px) {
        & {
            width: 100%;
            height: 40px;
            // margin-bottom: 10px;
        }
    }
`

S.CustomizedSelect= styled.div`
    position: relative;
    height: 52px;
    width: 100%;
    border-radius: 10px;
    color: var(--input-icons);
    outline: none;
    margin: 10px 0;

    

    .ant-select.ant-select-single.ant-select-allow-clear.ant-select-show-arrow {
        height: 100%;
        width: 100%;
    }

// -------- Special for ant selector --------

    .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
        border-color: var(--main-green);
        box-shadow: none;
    }

    .ant-col.ant-col-16.ant-form-item-control {
        max-width: 100%;
    }

    .ant-form-item-explain.ant-form-item-explain-error {
        display: none;
    }

    .ant-select-selector{
        height: 100% !important;
        box-shadow: none !important;
        border-radius: 10px !important;;;

        &:hover {
            border-color: var(--main-green) !important;
            box-shadow: none !important;

        }
        
        span {
            line-height: 50px !important;
        }
    }

    @media (max-width: 674px) {
        & {
            width: 100%;
            height: 40px;
            // margin-left: 5px;
            // margin-top: 10px;
            // padding: 0;
        }
        
    }
`

S.CreateButton = styled.button`
    height: 52px;
    width: 100%;
    border-radius: 10px;
    border: none;
    line-height: 52px;
    padding:0 auto;
    background: var(--main-green);
    color: var(--white);
    cursor: pointer;
    outline: none;
    text-align: center;
    margin-top: 10px;

    @media (max-width: 674px) {
        & {
            width: 100%;
            height: 40px;
            line-height: 40px;
            margin-top: 10px;
        }
        
    }
`

S.CancelButton = styled.button`
    height: 52px;
    width: 100%;
    border-radius: 10px;
    border: 1px solid #d9d9d9;
    line-height: 52px;
    padding:0 auto;
    background: var(--white);
    color: var(--text-unselect);
    cursor: pointer;
    outline: none;
    text-align: center;
    margin-top: 10px;

    @media (max-width: 674px) {
        & {
            width: 100%;
            height: 40px;
            line-height: 40px;
            margin-top: 10px;
        }
        
    }
`


// S.PickerInput = styled.div`
//     position: relative;
//     height: 52px;
//     width: 100%;
//     border-radius: 10px;
//     color: var(--input-icons);
//     outline: none;
//     overflow: hidden;


//     .ant-picker {
//         width: 100%;
//         height: 100%;
//         padding: 0;
//         border-radius: 10px;
        
        
        
//         &:hover {
//             border-color: var(--main-green);
//         }
//     }

//     .ant-picker-input {
//         height: 100%;
//         margin: 0 !important;
        
//     }
//     .ant-picker-focused {
//         border: 1px solid var(--main-green);
//         box-shadow: none;
//     }

//     input {
//         height: 100%;
//         padding-left: 5px;
//     }

//     span {
//         height: 102%;
//         width: 56px;
//         margin-right: -1px;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         background: var(--input-icon);
//         color: var(--white)
//     }
// `

// S.Placeholder = styled.span`
//     position: absolute;
//     top: 50%;
//     left: 0%;
//     transform: translate(20%, -50%);
//     z-index: 1;
//     color: var(--text-unselect);
//     transition: 0.5s;
// `

// S.InputWrapper = styled.div`
    //     position: relative;
    //     height: 52px;
    //     width: 100%;
    //     border-radius: 10px;
    //     color: var(--input-icons);
    //     outline: none;
    
    //     &:hover input{
    //         border-color: var(--main-green);
    //     }
    
    //     span {
    //         position: absolute;
    //         top: 50%;
    //         left: 0%;
    //         transform: translate(20%, -50%);
    //         z-index: 1;
    //         color: var(--text-unselect);
    //         transition: 0.5s;
    //     }
    
    //     .top {
    //         transform: translate(8px, -25px);
    //         font-size: 11px;
    //         font-weight: 600;
    //         color: var(--bg-hover);
    //     }
    // `
    
    // S.StyledInput = styled.input`
    //     width: 100%;
    //     height: 100%;
    //     position: absolute;
    //     border: 1px solid var(--text-unselect);
    //     border-radius: 10px;
    //     outline: none;
    //     padding-left: 15px;
    
    //     &:focus + span {
    //         transform: translate(8px, -25px);
    //         font-size: 11px;
    //         font-weight: 600;
    //         color: var(--bg-hover);
    //     }
    
    //     &:focus {
    //         border: 1px solid var(--main-green)
    //     }
    // `
export default S;