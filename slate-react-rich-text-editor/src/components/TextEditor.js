import React, { useEffect, useMemo, useState, Component } from "react";
import { Editor } from 'slate-react'
import { Value } from 'slate'

export default class TextEditor extends Component {

    state = {
        value: '',
    }

    onChange = ({ value }) => {
        this.setState({ value })
    }

    render() {
        return (
            <Editor value={this.state.value} onChange={this.onChange} />
        )
    }
}