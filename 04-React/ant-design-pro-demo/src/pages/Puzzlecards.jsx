import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'dva'

@connect((state) => {
    return {
        cardListProps: state.puzzlecards.data
    }
}, (dispatch) => {
    return {
        onClickAdd: (newCard) => {
            const action = {
                type: 'puzzlecards/addNewCard',
                payload: newCard
            }
            dispatch(action)
        },
        initCard: () => {
            const action = {
                type: 'puzzlecards/queryIntCards'
            }
            dispatch(action)
        }
    }
})

export default class PuzzleCardsPage extends Component {
  constructor(props) {
    super(props);
    this.counter = 100;
    this.state = {
      cardList: [
        {
          id: 1,
          setup: 'Did you hear about the two silk worms in a race?',
          punchline: 'It ended in a tie',
        },
        {
          id: 2,
          setup: 'What happens to a frog\'s car when it breaks down?',
          punchline: 'It gets toad away',
        },
      ],
    }
  }

  componentDidMount () {
    this.props.initCard()
  }

  addNewCard = () => {
    this.setState(prevState => {
        const prevCardList = prevState.cardList;
        this.counter += 1;
        const card = {
          id: this.counter,
          setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
          punchline: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        };
        return {
          cardList: prevCardList.concat(card),
        };
      });
  }

  

  render() {
    return (
      <div>
        {
          this.props.cardListProps.map(card => {
            return (
              <Card key={card.id}>
                <div>Q: {card.setup}</div>
                <div>
                  <strong>A: {card.punchline}</strong>
                </div>
              </Card>
            );
          })
        }
        <div>
            <Button onClick={() => this.props.onClickAdd({
            setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            punchline: 'here we use dva',
          })}>添加卡片</Button>
        </div>
      </div>
    );
  }
}