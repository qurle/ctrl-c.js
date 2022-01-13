// Selector of elements that will be copied
const elementsToCopy = 'i'

function handle(element) {
    if (element.matches(elementsToCopy)) copy(element.innerHTML)
}

function copy(text) {
    navigator.permissions.query({ name: "clipboard-write" }).then(result => {
        if (result.state == "granted" || result.state == "prompt") {
            navigator.clipboard.writeText(text).then(function () {
                console.log('copied\n' + text)
            }, function () {
                console.error('Extension Hotpot Icon to Clipboard failed to write to clipboard\nContact the dev at https://qurle.net/contact')
            });
        }
    })

}

document.onclick = function (event) {
    if (event === undefined) event = window.event
    if (event.target instanceof Element)
        handle(event.target)
};

