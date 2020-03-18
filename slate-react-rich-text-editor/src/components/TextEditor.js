import React, { useState, Component } from "react";
import { Editor } from 'slate'


export default class TextEditor extends Component {

    const [value, setValue] = useState([
        {
          type: 'paragraph',
          children: [{ text: 'A line of text in a paragraph.' }],
        },
    ])

    state = {
        value: "TEste",
    }

    onChange = ({ value }) => {
        this.setState({ value })
    }

    render() {
        return (
            <Editor value={value} onChange={value => setValue(value)} />
        )
    }
}