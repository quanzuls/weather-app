import React, { useState, useEffect } from 'react';
const CountDown = (props) => {

    const [count, setCount] = useState(20);
    useEffect(() => {
        if (count === 0) {
            props.setIsDisableBtn(true)
            return;
        }
        const timer = setInterval(() => {
            setCount(count - 1);

        }, 1000)

        return () => {
            clearInterval(timer);

        }

    }, [count])
    return (
        <div>
            {count}
        </div>
    )
}
// class CountDown extends React.Component {
//     constructor(props) {
//         console.log('>>run contructor');

//         super(props);
//         this.state = {
//             count: 10,
//             dk: 25,
//         }
//     }
//     componentDidMount() {
//         console.log('>>run did mount');

//         this.timer = setInterval(() => {
//             let currentCount = this.state.count;
//             this.setState({
//                 count: currentCount - 1,
//             })
//         }, 1000)
//     }
//     componentDidUpdate(prevProps, prevState) {
//         console.log('>>run did update', 'currentState= ', this.state, 'prevState', prevState);
//         if (this.state.count !== prevState.count && this.state.count === 0) {
//             if (this.timer) {
//                 clearInterval(this.timer);
//             }
//         }
//     }
//     render() {
//         console.log('>>run render');

//         return (
//             <div>
//                 {this.state.count}
//             </div>
//         )
//     }
// }
export default CountDown;