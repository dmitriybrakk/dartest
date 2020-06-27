import { Common } from 'typings/common';
import React, { Fragment } from 'react';
import styled from 'styled-components';
import Input from '../Input';
import getSolution from '../../helpers/getSolution';
import extractValues from '../../helpers/extractValues';
import checkCoprime from '../../helpers/checkCoprime';
import checkPositive from '../../helpers/checkPositive';
import checkBlanks from '../../helpers/checkBlanks';
import { ERRORS } from '../../constants/errors';

const Container = styled('div')`
    display: flex;
    flex: 1;
    padding: 1rem;
    justify-content: space-between;
`;
const Column = styled('div')`
    display: flex;
    flex-direction: column;
    flex: 1;
`;
const Header = styled('h4')`
    text-align: left;
`;
const Row = styled('div')`
    display: flex;
`;
const Button = styled('button')`
    &:not(:first-child) {
        margin-left: 1rem;
    }
`;
const Output = styled(Column)`
    padding: 2rem;
    justify-content: center;
    font-size: 2rem;
    text-align: center;
`;
const Error = styled('span')`
    color: ${({ theme }) => theme.colors.error};
    margin-top: 1rem;
`;
const Inputs = styled('div')<{ pairCount: number }>`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: ${(props) => `repeat(${props.pairCount}, 1fr)`};
`;

interface IState {
    pairs: Common.Pair[];
    errors: string[];
    output: number | string | null;
}

export default class Index extends React.PureComponent<{}, IState> {
    state = {
        pairs: [],
        errors: [],
        output: null,
    };

    validate = (bases: Common.Base[], remainders: Common.Remainder[]) => {
        const hasBlanks = checkBlanks(bases.concat(remainders));
        const isPositive = checkPositive(bases as number[]);
        const isCoprime = checkCoprime(bases as number[]);
        const isValid = !hasBlanks && isPositive && isCoprime;

        if (!isValid) {
            const errors = [
                hasBlanks && ERRORS.blank,
                !isPositive && ERRORS.positive,
                !isCoprime && ERRORS.prime,
            ].filter(Boolean) as string[];

            this.setState({ errors });
        }

        return isValid;
    };

    handleSubmit = () => {
        const { pairs } = this.state;
        const { bases, remainders } = extractValues(pairs);
        const isValidInput = this.validate(bases, remainders);

        if (isValidInput) {
            const solution = getSolution(bases as number[], remainders as number[]) || ERRORS.unsolvable;

            this.setState({ output: solution });
        }
    };

    handleAddPair = () => {
        this.setState(({ pairs }) => ({ pairs: [...pairs, [null, null]] }));
    };

    handleChangePair = (pairIndex: number, numberType: Common.NumberType, value: number) => {
        this.setState(({ pairs }) => ({
            output: null,
            errors: [],
            pairs: [
                ...pairs.slice(0, pairIndex),
                numberType === Common.NumberType.Base ? [value, pairs[pairIndex][1]] : [pairs[pairIndex][0], value],
                ...pairs.slice(pairIndex + 1),
            ],
        }));
    };

    handleRemovePair = (index: number) => {
        this.setState(({ pairs }) => ({
            output: null,
            errors: [],
            pairs: [...pairs.slice(0, index), ...pairs.slice(index + 1, pairs.length)],
        }));
    };

    render() {
        const { pairs, output, errors } = this.state;

        return (
            <Container>
                <Column>
                    <Row>
                        <Button onClick={this.handleAddPair}>Добавить пару</Button>
                        {!!pairs.length && <Button onClick={this.handleSubmit}>Найти решение</Button>}
                    </Row>
                    {!!errors.length && <Error>{errors[0]}</Error>}
                    <Inputs pairCount={pairs.length}>
                        {Object.values(Common.NumberType).map((type) => (
                            <Header key={type}>{type}</Header>
                        ))}
                        <Header />
                        {pairs.map(([base, remainder]: Common.Pair, i: number) => (
                            <Fragment key={i}>
                                <div>
                                    <Input
                                        index={i}
                                        value={base}
                                        type={Common.NumberType.Base}
                                        onChange={this.handleChangePair}
                                    />
                                </div>
                                <div>
                                    <Input
                                        index={i}
                                        value={remainder}
                                        type={Common.NumberType.Remainder}
                                        onChange={this.handleChangePair}
                                    />
                                </div>
                                <div>
                                    <Button onClick={() => this.handleRemovePair(i)}>Удалить пару</Button>
                                </div>
                            </Fragment>
                        ))}
                    </Inputs>
                </Column>
                <Column>{output && <Output>Искомое значение: {output}</Output>}</Column>
            </Container>
        );
    }
}
