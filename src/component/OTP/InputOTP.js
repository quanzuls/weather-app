import OtpInput from 'react-otp-input';
import { useState } from 'react';
import CountDown from './CountDown';

const InputOTP = (props) => {
    const [otp, setOtp] = useState('');
    const handleChange = (paramOtp) => {
        // console.log(">>check inside handlechange", paramOtp);
        setOtp(paramOtp);
        props.setUserOTPParent(paramOtp);

    }
    const handleSubmitOTP = () => {
        props.handleSubmitOTP();
    }
    return (
        <div className='input-opt-container'>
            <div className='title'>Enter verification code</div>
            <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={6}
                separator={<span>-</span>}
                inputStyle={'input-customize'}
            />
            <div className='timer'>
                <CountDown
                    setIsDisableBtn={props.setIsDisableBtn}
                />
            </div>
            <div className='action'>
                <button className='clear'>Clear</button>
                <button className='confirm'
                    disabled={props.isDisableBtn}
                    onClick={() => handleSubmitOTP()}
                >
                    Confirm</button>
            </div>
        </div>
    )
}
export default InputOTP;