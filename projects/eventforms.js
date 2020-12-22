
const tweetFrom = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets')
tweetFrom.addEventListener('submit', function (e) {
    e.preventDefault();
    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    // console.log(usernameInput.value, tweetInput.value);
    const usernameInput = tweetForm.elements.username;
    const commentInput = tweetForm.elements.comment;
    addTweet(usernameInput.value, commentInput.value)
    usernameInput.value = '';
    commentInput.value = ''

});

const addTweet = (username, comment) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`-${comment}`);
    tweetsContainer.append(newTweet)
}


// ========= event delegation ============
tweetsContainer.addEventListener('click', function (e) {
    e.target.nodeName === 'LI' && e.target.remove();
})