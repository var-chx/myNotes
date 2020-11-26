export default {
    'get /dev/puzzleList': (req, res) => {
        res.send(
            {
              setup: 'Did you hear about the two silk worms in a race?',
              punchline: 'It ended in a tie',
            }
        )
    }
}