function myHand(player, cc){
    const allCards = [...player.hand, ...cc]

}
// help function 0 DO NOT DELETE
function hasCard(cards, card){
    for(let i = 0; i < cards.length; i++){
        if (cards[i].suit === card.suit && cards[i].number === card.number) return true
    }
    return false
}

function isRoyalStraightFlush(player, cc){
    const allCards = [...player.hand, ...cc]
    possibleCases = [
        [new Card('spade', 1), new Card('spade', 13), new Card('spade', 12), new Card('spade', 11), new Card('spade', 10)],
        [new Card('heart', 1), new Card('heart', 13), new Card('heart', 12), new Card('heart', 11), new Card('heart', 10)],
        [new Card('diamond', 1), new Card('diamond', 13), new Card('diamond', 12), new Card('diamond', 11), new Card('diamond', 10)],
        [new Card('club', 1), new Card('club', 13), new Card('club', 12), new Card('club', 11), new Card('club', 10)]
    ]
    for (let i = 0; i < possibleCases.length; i++){
        if (possibleCases[i].every(el => hasCard(allCards, el))) return [true, possibleCases[i]]
    }
    return false
}

function isStraightFlush(player, cc){
    const possibleStraightFlush = []
    const allCards = [...player.hand, ...cc]
    for (let i = 0; i < allCards.length; i++){
        
        const straightFlush = [allCards[i]]
        let j = 1
        while (j < 5){
            if (hasCard(allCards, next = new Card(allCards[i].suit, allCards[i].number - j))){
                straightFlush.push(next)
                j++
            }
            else break
        }
        if (straightFlush.length === 5){
            possibleStraightFlush.push(straightFlush)
        }
    }
    if (possibleStraightFlush.length){
        const max = possibleStraightFlush[0]
        for (let i = 1; i < possibleStraightFlush.length; i++){
            if (possibleStraightFlush[i][0].number > max) max = possibleStraightFlush[i]
        }
        return [true, max]
    }
    return false
}

function isFourOfaKind(player, cc){
    const allCards = [...player.hand, ...cc]
    for (let i = 0; i < allCards.length; i++){
        if(allCards.filter(el => el.number === allCards[i].number).length === 4){
            const fourOfaKind = allCards.filter(el => el.number === allCards[i].number)
            fourOfaKind.push(allCards.filter(el => el.number !== allCards[i].number).sort((a, b) => b.number - a.number)[0])
            return [true, fourOfaKind]
        }
    }
    return false
}
function isFullHouse(player, cc){
    const allCards = [...player.hand, ...cc]
<<<<<<< HEAD
<<<<<<< HEAD
    hi
=======
    hello
>>>>>>> 66756122f33aedf11d90488ea5b85b003d0db368
=======
    
>>>>>>> parent of 6675612 (hello in rules.js)
}