let lastMessage = '';
setInterval(function() {
    var assistantMessages = document.querySelectorAll('[data-message-author-role="assistant"]');
    var lastAssistantMessage = assistantMessages[assistantMessages.length - 1];

    if (lastAssistantMessage && lastAssistantMessage.querySelector('.markdown')) {
        lastMessage = lastAssistantMessage.querySelector('.markdown').innerHTML; // Используем innerHTML вместо innerText
    }

    if (lastAssistantMessage && lastAssistantMessage.querySelector(':scope .text-token-text-error') && lastMessage != '') {
        // Очищаем элемент
        lastAssistantMessage.innerHTML = '';

        // Создаем новый div с классом 'markdown' и добавляем его
        var markdownDiv = document.createElement('div');
        markdownDiv.className = 'markdown prose w-full break-words dark:prose-invert light';
        markdownDiv.innerHTML = lastMessage; // Используем innerHTML для сохранения разметки

        lastAssistantMessage.appendChild(markdownDiv);
    }
}, 100);
