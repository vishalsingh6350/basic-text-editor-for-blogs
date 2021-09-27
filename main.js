document.querySelector('.editor').focus()

document.querySelectorAll('.toolbar-btn').forEach((item) => {
    item.addEventListener('click', (e) => {
        document.querySelector('.viewHTMLBtn').disabled = false
        document.querySelector('.viewTextBtn').disabled = false
        document.querySelector('.editor').focus()
        document.execCommand(item.dataset.action.trim())
    })
})


document.querySelectorAll('.alignment-btn').forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelector('.viewHTMLBtn').disabled = false
        document.querySelector('.viewTextBtn').disabled = false
        document.querySelector('.editor').focus()
        document.execCommand(item.dataset.action.trim())
    })
})

document.querySelector('.viewTextBtn').addEventListener('click', (e) => {
    document.querySelector('.editor').innerText = document.querySelector('.editor').innerHTML
    console.log(document.querySelector('.editor').innerHTML)
    e.currentTarget.disabled = true
    document.querySelector('.viewHTMLBtn').disabled = false
})

document.querySelector('.viewHTMLBtn').addEventListener('click', (e) => {
    document.querySelector('.editor').innerHTML = document.querySelector('.editor').textContent
    e.currentTarget.disabled = true
    document.querySelector('.viewTextBtn').disabled = false
})

document.querySelector('.unorderedList').addEventListener('click', () => {
    document.querySelector('.viewHTMLBtn').disabled = false
    document.querySelector('.viewTextBtn').disabled = false
    document.execCommand('insertUnorderedList')
})
document.querySelectorAll('.formatBlock-btn').forEach((item) => {
    item.addEventListener('click', () => {
        document.execCommand('formatBlock', 'false', item.dataset.action.trim())
    })
})