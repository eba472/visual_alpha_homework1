import React from 'react';
import { Popover, Button } from 'antd';
import 'antd/dist/antd.css';
import {
    InfoCircleOutlined
} from '@ant-design/icons';


export function Emoji({ country }) {
    const link = "https://en.wikipedia.org/wiki/"+ country.name
    const content = (
        <div>
            <p>The population is {country.population}.</p>
            <p>The land area is {country.area}.</p>
            <h2 className="bigFlag">{country.flag.emoji}</h2>
            <a color="white" href={link}><InfoCircleOutlined/>  More info</a>
        </div>
    );
    
    return (
        <Popover content={content} title={country.name}>
            <Button className="flagButton" type="primary" onClick={() => window.location = link}>{country.flag.emoji} </Button>
        </Popover>
    )
}
