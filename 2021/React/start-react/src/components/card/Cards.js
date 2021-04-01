import React from 'react';
import {Card} from './Card'

export function Cards (props) {
    return (
        <div>
            <ul>
                <Card title='title1' text='some text...'/>
                <Card title='title2' text='some text...'/>
                <Card title='title3' text='some text...'/>
             </ul>
        </div>
    );
}

