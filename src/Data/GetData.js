export async function GetPokerHands(playerOne, playerTwo) {
    const url = `https://localhost:44317/deal?playerOne=${playerOne}&playerTwo=${playerTwo}`;
    console.log(`url: ${url}`);

    const options = {
        method: 'GET',
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }
    }
    const response = await fetch(url, options).then(response => console.log(`then: ${response}`));
    console.log(`response: ${JSON.stringify(response)}`);
    return response;
}

export async function GetWinner(players) {
    const url = `https://localhost:44317/deal?playerOne=${JSON.stringify(players[0])}&playerTwo=${JSON.stringify(players[1])}`;

    const options = {
        method: "GET",
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }
    }

    const response = await fetch(url, options);

    return response;
}