import { Common } from 'typings/common';
import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Input = styled('input')`
    grid-area: input;
`;

interface IProps {
    value: number | null;
    type: Common.NumberType;
    onChange: (index: number, type: Common.NumberType, value: number) => void;
    index: number;
}

export default class InputComponent extends PureComponent<IProps> {
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { onChange, index, type } = this.props;

        onChange(index, type, parseInt(e.target.value, 10));
    };

    render() {
        const { value } = this.props;

        return <Input type="number" value={value || ''} onChange={this.handleChange} />;
    }
}
