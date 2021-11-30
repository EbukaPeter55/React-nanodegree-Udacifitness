import React, { Component } from "react";
import { View, Text} from "react-native";
import {getMetricMetaInfo} from "../utils/helpers";
import UdaciSlider from "./UdaciSlider";
import UdaciSteppers from "./UdaciSteppers";



export  default  class AddEntry extends Component {
    // The state contains all the metrics we are tracking
    state = {
        run: 0,
        bike: 0,
        swim: 0,
        sleep: 0,
        eat: 0
    }
    // Increment method
    increment = (metric) => {
        const { max, step} = getMetricMetaInfo(metric)
        this.setState((state)=> {
            const count = state[metric] + step

            return {
                ...state,
                [metric]: count > max ? max : count
            }
        })
    }

    // Decrement method
    decrement = (metric) => {
        this.setState((state)=> {
            const count = state[metric] - getMetricMetaInfo(metric).step

            return {
                ...state,
                [metric]: count < 0 ? 0 : count
            }
        })
    }

    // Slide method
    slide = (metric, value) => {
        this.setState((state)=>({
            [metric]: value
        }))

    }

    render() {
        const metaInfo = getMetricMetaInfo();
        return (
            <View>
                {/*Loop through the getMetricMetaInfo() and get all its*/}
                {/*properties by destructuring*/}
                {Object.keys(metaInfo).map((key)=> {
                    const { getIcon, type, ...rest} = metaInfo[key];
                    const value = this.state[key]

                    return (
                        <View key={key}>
                            {getIcon()}
                            {type=== 'slider'
                            ?
                            <UdaciSlider
                            value={value}
                            onChange={(value)=> this.slide(key, value)}
                            {...rest}
                            />
                            :
                                <UdaciSteppers
                                value={value}
                                onIncrement = {()=> this.increment(key)}
                                onDecrement = {()=> this.decrement(key)}
                                    {...rest}
                                />
                            }
                        </View>

                    )
                })}
            </View>
        )
    }
}